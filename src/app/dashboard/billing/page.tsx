'use client';

import { useState, useEffect } from 'react';
import { SecondaryButton } from '@/src/components/ui/secondary-button';
import { CheckCircle } from 'lucide-react';
import { supabase } from '@/src/lib/supabase'; // 👈 Utilisation de ton client partagé

export default function BillingPage() {
  const [loading, setLoading] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [fetching, setFetching] = useState(true);

  // 1. Charger dynamiquement le statut premium de l'utilisateur au chargement
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data, error } = await supabase
            .from('profiles')
            .select('is_premium')
            .eq('id', user.id)
            .single();

          if (data && !error) {
            setIsPremium(data.is_premium);
          }
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du profil:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpgrade = async () => {
    try {
      setLoading(true);

      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        alert("Vous devez être connecté pour passer Premium !");
        setLoading(false);
        return;
      }

      const userId = user.id;

      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      
      const data = await response.json();
      if (data.url) window.location.href = data.url;
      
    } catch (error) {
      console.error("Erreur", error);
      alert("Une erreur est survenue lors de la redirection vers le paiement.");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen bg-soft-zone flex items-center justify-center">
        <p className="text-(--text-muted)">Chargement de vos informations de facturation...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-zone pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <div>
          <h1 className="text-3xl font-extrabold text-(--primary)">Abonnement & Facturation</h1>
          <p className="text-(--text-muted) mt-2">Gerez votre plan et accédez à toute la puissance de Navira.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Plan Freemium */}
          <div className={`navira-card p-8 border-2 ${!isPremium ? 'border-slate-400 bg-white' : 'border-slate-200 opacity-60'}`}>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">Plan Découverte</span>
            <h2 className="text-2xl font-bold text-(--primary)">Freemium</h2>
            <p className="text-sm text-(--text-muted) mt-2 mb-6">Accès limité à une seule destination (Île Maurice).</p>
            <ul className="space-y-3 text-sm text-(--primary) mb-8">
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-slate-400" /> Analyse basique</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-slate-400" /> 1 pays débloqué</li>
            </ul>
            <div className="px-4 py-3 bg-slate-50 rounded-xl text-center text-sm font-medium text-slate-600">
              {!isPremium ? 'Actif et gratuit' : 'Abonnement obsolète'}
            </div>
          </div>

          {/* Plan Premium */}
          <div className={`navira-card p-8 border-2 ${isPremium ? 'border-green-500 bg-white shadow-md' : 'border-(--accent) bg-[linear-gradient(135deg,#ffffff,#f8f9ff)]'}`}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-(--accent) block">Recommandé</span>
              {isPremium && <span className="text-xs px-2 py-1 bg-green-100 text-green-700 font-bold rounded-full">Actif</span>}
            </div>
            <h2 className="text-2xl font-bold text-(--primary)">Navira Lifetime</h2>
            <p className="text-sm text-(--text-muted) mt-2 mb-6">Le couteau suisse ultime pour votre expatriation.</p>
            <ul className="space-y-3 text-sm text-(--primary) mb-8">
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Comparateur Mondial (20 pays)</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Simulateur d'impôts détaillé</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Accès à vie + Mises à jour</li>
            </ul>
            
            {/* 👈 Changement dynamique du bouton selon le statut de l'utilisateur */}
            {isPremium ? (
              <div className="px-4 py-3 bg-green-50 text-green-700 rounded-xl text-center text-sm font-semibold">
                Merci pour votre confiance ! ✨
              </div>
            ) : (
              <SecondaryButton onClick={handleUpgrade} disabled={loading} className="w-full justify-center">
                {loading ? 'Redirection...' : 'Passer Pro (999€)'}
              </SecondaryButton>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}