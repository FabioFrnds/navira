'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/src/lib/supabase';
import { PrimaryButton } from '@/src/components/ui/primary-button';

// Traduction des erreurs courantes de connexion
const getFrenchLoginErrorMessage = (message: string) => {
  if (message.includes('Invalid login credentials')) {
    return "Email ou mot de passe incorrect.";
  }
  if (message.includes('Email not confirmed')) {
    return "Veuillez confirmer votre adresse email.";
  }
  return "Une erreur est survenue lors de la connexion.";
};

export default function ConnexionPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setErrorMsg('');

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Application du traducteur d'erreur
        setErrorMsg(getFrenchLoginErrorMessage(error.message));
        return;
      }

      /**
       * IMPORTANT :
       * on laisse Supabase set le cookie session,
       * puis navigation simple
       */
      router.replace('/dashboard');
      router.refresh();

    } catch (err) {
      setErrorMsg("Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-zone py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 navira-card p-10 bg-white shadow-xl">

        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-(--primary)">
            Bon retour
          </h2>
          <p className="mt-2 text-sm text-(--text-muted)">
            Connectez-vous pour accéder à vos simulations.
          </p>
        </div>

        <form onSubmit={handleEmailLogin} className="space-y-5 mt-8">

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
            {/* Ajout d'une flexbox pour caler le "Mot de passe oublié ?" à droite du label */}
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-slate-700">
                Mot de passe
              </label>
              <Link 
                href="/mot-de-passe-oublie" 
                className="text-xs font-semibold text-(--accent) hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>
            
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-(--accent) outline-none"
              placeholder="••••••••"
            />
          </div>

          {errorMsg && (
            <p className="text-sm font-medium text-red-500">
              {errorMsg}
            </p>
          )}

          <PrimaryButton
            type="submit"
            disabled={loading}
            className="w-full justify-center py-3"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </PrimaryButton>
        </form>

        <p className="mt-6 text-center text-sm text-(--text-muted)">
          Pas encore de compte ?{' '}
          <Link href="/inscription" className="font-semibold text-(--accent) hover:underline">
            S'inscrire
          </Link>
        </p>

      </div>
    </div>
  );
}