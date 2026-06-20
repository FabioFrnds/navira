'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/src/lib/supabase';
import { PrimaryButton } from '@/src/components/ui/primary-button';

// Petit utilitaire pour traduire les erreurs courantes de Supabase Auth
const getFrenchErrorMessage = (message: string) => {
  if (message.includes('User already registered')) return "Cet email est déjà associé à un compte.";
  if (message.includes('Password should be')) return "Le mot de passe est trop court (6 caractères min).";
  if (message.includes('Unable to validate verification schema')) return "Le format de l'email est invalide.";
  return "Impossible de créer le compte. Veuillez réessayer.";
};

export default function InscriptionPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage('');
    setIsError(false);

    // 1. Vérification de la correspondance des mots de passe
    if (password !== confirmPassword) {
      setIsError(true);
      setMessage("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setIsError(true);
        // 2. Traduction de l'erreur de Supabase
        setMessage(getFrenchErrorMessage(error.message));
        return;
      }

      /**
       * IMPORTANT (ton setup email confirmation OFF)
       * → Supabase connecte souvent automatiquement l'utilisateur
       * MAIS la session peut être légèrement décalée côté client
       */
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        router.replace('/dashboard');
        router.refresh();
        return;
      }

      // fallback safe
      router.replace('/dashboard');

    } catch (err) {
      setIsError(true);
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-zone py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 navira-card p-10 bg-white shadow-xl">

        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-(--primary)">
            Rejoignez Navira
          </h2>
          <p className="mt-2 text-sm text-(--text-muted)">
            Créez votre compte gratuit pour simuler votre expatriation.
          </p>
        </div>

        <form onSubmit={handleEmailSignup} className="space-y-5 mt-8">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-(--accent) outline-none"
              placeholder="vous@exemple.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Créer un mot de passe
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

          {/* NOUVEAU CHAMP : CONFIRMATION */}
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
            {loading ? 'Création du compte...' : 'Créer mon compte'}
          </PrimaryButton>
        </form>

        <p className="mt-6 text-center text-sm text-(--text-muted)">
          Déjà un compte ?{' '}
          <Link href="/connexion" className="font-semibold text-(--accent) hover:underline">
            Se connecter
          </Link>
        </p>

      </div>
    </div>
  );
}