'use client';

import { useState } from 'react';
import { PrimaryButton } from '@/src/components/ui/primary-button';
import { SecondaryButton } from '@/src/components/ui/secondary-button';
import Link from 'next/link';

// 1. On importe le nouveau composant (Assure-toi de l'avoir créé au bon endroit)
import { ComparisonTable } from '@/src/components/dashboard/comparison-table';

export default function DashboardPage() {
  // 2. État pour gérer le chargement lors du clic sur le bouton Premium (Stripe)
  const [loading, setLoading] = useState(false);

  // 3. Fonction pour appeler notre route API Stripe
  const handleSubscribe = async () => {
    try {
      setLoading(true);
      
      // TODO: Quand tu auras branché Supabase Auth, remplace ceci par session.user.id
      const userId = "786c23fd-1441-4e3b-a62f-727047d094f3"; 

      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();
      
      // Redirection vers la page sécurisée de Stripe
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Erreur lors du paiement:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-soft-zone pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER DASHBOARD */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-(--primary)">Mon Tableau de Bord</h1>
            <p className="text-(--text-muted) mt-2">Bienvenue 👋 Voici l'analyse de votre situation.</p>
          </div>
          {/* On utilise notre fonction Stripe ici */}
          <SecondaryButton onClick={handleSubscribe} disabled={loading}>
            {loading ? 'Redirection...' : 'Débloquer tout (Premium)'}
          </SecondaryButton>
        </div>

        {/* SECTION 1: KPI (RÉSUMÉ RAPIDE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="navira-card p-6 flex flex-col justify-center">
            <span className="text-sm text-(--text-muted)">Gain potentiel moyen</span>
            <span className="text-2xl font-bold text-(--accent) mt-1">+45%</span>
          </div>
          <div className="navira-card p-6 flex flex-col justify-center">
            <span className="text-sm text-(--text-muted)">Pays analysés</span>
            <span className="text-2xl font-bold text-(--primary) mt-1">1 / 20</span>
          </div>
          <div className="navira-card p-6 flex flex-col justify-center">
            <span className="text-sm text-(--text-muted)">Statut compte</span>
            <span className="text-2xl font-bold text-green-600 mt-1">Freemium</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* COLONNE GAUCHE : ANALYSE & SIMULATION */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 4. ON REMPLACE L'ANCIENNE CARTE PAR NOTRE COMPOSANT */}
            <ComparisonTable />

            {/* SECTION TEASING PREMIUM */}
            <div className="navira-card p-8 relative overflow-hidden border-2 border-dashed border-(--accent)/20">
              <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center p-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm border border-(--border)">
                  <span className="text-4xl mb-4 block">🚀</span>
                  <h3 className="text-xl font-bold text-(--primary)">Comparez les 20 pays</h3>
                  <p className="text-sm text-(--text-muted) mt-2 mb-6">Accédez au comparateur mondial et découvrez votre destination idéale.</p>
                  <PrimaryButton onClick={handleSubscribe} disabled={loading} className="w-full justify-center">
                    {loading ? 'Chargement...' : 'Accéder au Premium'}
                  </PrimaryButton>
                </div>
              </div>
              <div className="opacity-30 blur-sm select-none">
                <h3 className="text-xl font-bold text-(--primary) mb-4">Autres destinations</h3>
                <div className="space-y-4">
                  <div className="h-14 border rounded-xl" />
                  <div className="h-14 border rounded-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : SIDEBAR D'ACTION */}
          <div className="space-y-6">
            
            {/* CARTE PREMIUM */}
            <div className="navira-card p-6 border-t-4 border-(--accent) bg-linear-to-b from-white to-(--accent)/5">
              <h3 className="font-bold text-(--primary) text-lg">Navira Lifetime</h3>
              <p className="text-sm text-(--text-muted) mt-2">Analyse complète sur 20 ans.</p>
              <ul className="mt-4 space-y-2 text-sm text-(--text-muted)">
                <li>✅ Analyse personnalisée</li>
                <li>✅ 20+ pays débloqués</li>
                <li>✅ Rapports PDF</li>
              </ul>
              <div className="mt-6">
                <SecondaryButton onClick={handleSubscribe} disabled={loading} className="w-full justify-center">
                  {loading ? 'Chargement...' : 'Mettre à niveau (999€)'}
                </SecondaryButton>
              </div>
            </div>

            {/* CARTE SUPPORT */}
            <div className="navira-card p-6">
              <h3 className="font-bold text-(--primary) text-lg">Besoin d'aide ?</h3>
              <p className="text-sm text-(--text-muted) mt-2">Un doute sur votre projet d'expatriation ?</p>
              <Link href="/#pricing" className="block mt-6">
                <PrimaryButton className="w-full justify-center bg-(--primary) hover:bg-(--secondary)">
                  Réserver un appel
                </PrimaryButton>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}