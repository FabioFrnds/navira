'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/src/lib/supabase';
import { PrimaryButton } from '@/src/components/ui/primary-button';

export default function ModifierMotDePassePage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setIsError(false);

    if (password !== confirmPassword) {
      setIsError(true);
      setMessage("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        setIsError(true);
        setMessage(error.message || "Impossible de mettre à jour le mot de passe.");
        return;
      }

      setMessage("Mot de passe modifié avec succès ! Redirection...");
      setIsError(false);

      // Redirection après 2 secondes vers le dashboard
      setTimeout(() => {
        router.replace('/dashboard');
        router.refresh();
      }, 2000);

    } catch (err) {
      setIsError(true);
      setMessage("Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-zone py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 navira-card p-10 bg-white shadow-xl">
        
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-(--primary)">
            Nouveau mot de passe
          </h2>
          <p className="mt-2 text-sm text-(--text-muted)">
            Saisissez votre nouveau mot de passe sécurisé.
          </p>
        </div>

        <form onSubmit={handleUpdatePassword} className="space-y-5 mt-8">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Nouveau mot de passe
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-(--accent) outline-none"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-(--accent) outline-none"
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
            disabled={loading}
            className="w-full justify-center py-3"
          >
            {loading ? 'Mise à jour...' : 'Enregistrer le mot de passe'}
          </PrimaryButton>
        </form>

      </div>
    </div>
  );
}