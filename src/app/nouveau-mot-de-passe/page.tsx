'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/src/lib/supabase';
import { PrimaryButton } from '@/src/components/ui/primary-button';

export default function NouveauMotDePassePage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Sécurité d'entrée : On vérifie si l'utilisateur possède bien une session active suite au clic du mail
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setIsError(true);
        setMessage("Le lien d'accès est invalide ou a expiré. Veuillez refaire une demande.");
      }
    };
    checkSession();
  }, []);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Si la session était absente dès le début, on bloque
    if (isError && !password) return;

    setLoading(true);
    setMessage('');
    setIsError(false);

    // Validation de correspondance
    if (password !== confirmPassword) {
      setIsError(true);
      setMessage("Les deux mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    try {
      // Supabase met à jour l'utilisateur actuellement authentifié via le lien
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        setIsError(true);
        setMessage(error.message || "Erreur lors de la mise à jour.");
        return;
      }

      setIsError(false);
      setMessage("Votre nouveau mot de passe est enregistré ! Redirection...");

      // Redirection automatique vers le Dashboard après succès
      setTimeout(() => {
        router.replace('/dashboard');
        router.refresh();
      }, 2000);

    } catch (err) {
      setIsError(true);
      setMessage("Une erreur inattendue est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-zone py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 navira-card p-10 bg-white shadow-xl border border-slate-100 rounded-2xl">
        
        <div className="text-center">
          {/* Badge pour marquer la différence visuelle avec la connexion */}
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100 mb-3">
            Sécurité du compte
          </span>
          <h2 className="text-3xl font-extrabold text-(--primary)">
            Nouveau mot de passe
          </h2>
          <p className="mt-2 text-sm text-(--text-muted)">
            Saisissez et confirmez votre nouvelle clé d'accès pour Navira.
          </p>
        </div>

        <form onSubmit={handleUpdatePassword} className="space-y-5 mt-8">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Créer un nouveau mot de passe
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              disabled={isError && !password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-(--accent) outline-none disabled:bg-slate-50 disabled:text-slate-400"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Confirmer le nouveau mot de passe
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={confirmPassword}
              disabled={isError && !password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-(--accent) outline-none disabled:bg-slate-50 disabled:text-slate-400"
              placeholder="••••••••"
            />
          </div>

          {message && (
            <p className={`text-sm font-medium ${isError ? 'text-red-500' : 'text-green-600'}`}>
              {message}
            </p>
          )}

          <PrimaryButton
            type="submit"
            disabled={loading || (isError && !password)}
            className="w-full justify-center py-3"
          >
            {loading ? 'Enregistrement...' : 'Confirmer le mot de passe'}
          </PrimaryButton>
        </form>

      </div>
    </div>
  );
}