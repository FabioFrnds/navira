'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/src/lib/supabase';
import { PrimaryButton } from '@/src/components/ui/primary-button';

export default function MotDePasseOubliePage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleResetRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setIsError(false);

    try {
      // 🎯 On cible explicitement la nouvelle page : /nouveau-mot-de-passe
      const redirectToUrl = `${window.location.origin}/auth/callback?next=/nouveau-mot-de-passe`;

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectToUrl,
      });

      if (error) {
        setIsError(true);
        setMessage("Impossible d'envoyer l'email. Vérifiez l'adresse.");
        return;
      }

      setIsError(false);
      setMessage("Un email de réinitialisation vous a été envoyé !");
    } catch (err) {
      setIsError(true);
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-zone py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 navira-card p-10 bg-white shadow-xl border border-slate-100 rounded-2xl">
        
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-(--primary)">
            Mot de passe oublié ?
          </h2>
          <p className="mt-2 text-sm text-(--text-muted)">
            Entrez votre adresse email pour recevoir un lien de réinitialisation.
          </p>
        </div>

        <form onSubmit={handleResetRequest} className="space-y-5 mt-8">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Votre adresse email
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
            {loading ? 'Envoi en cours...' : 'Envoyer le lien'}
          </PrimaryButton>
        </form>

        <p className="mt-6 text-center text-sm text-(--text-muted)">
          <Link href="/connexion" className="font-semibold text-(--accent) hover:underline">
            Retour à la connexion
          </Link>
        </p>

      </div>
    </div>
  );
}