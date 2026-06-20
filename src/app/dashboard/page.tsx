'use client';

import { PrimaryButton } from '@/src/components/ui/primary-button';
import { SecondaryButton } from '@/src/components/ui/secondary-button';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-soft-zone pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER DASHBOARD */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-(--primary)">Mon Tableau de Bord</h1>
            <p className="text-(--text-muted) mt-2">Bienvenue 👋 Voici l'analyse de votre situation.</p>
          </div>
          <Link href="/#pricing">
            <SecondaryButton>Débloquer tout (Premium)</SecondaryButton>
          </Link>
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
            
            {/* CARTE COMPARAISON */}
            <div className="navira-card p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-(--primary)">Simulation : France vs Île Maurice</h2>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Actif</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-(--primary)">Maurice (Est.)</span>
                    <span className="font-bold text-(--accent)">+45%</span>
                  </div>
                  <div className="h-3 bg-(--accent)/10 rounded-full overflow-hidden">
                    <div className="h-full bg-(--accent) w-[85%] animate-in fade-in duration-1000" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2 opacity-80">
                    <span className="text-(--text-muted)">France (Actuel)</span>
                    <span>Base</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 w-[40%]" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-(--border) flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-sm text-(--text-muted)">Ajustez vos revenus pour des résultats plus précis.</p>
                <PrimaryButton>Modifier mon profil</PrimaryButton>
              </div>
            </div>

            {/* SECTION TEASING PREMIUM */}
            <div className="navira-card p-8 relative overflow-hidden border-2 border-dashed border-(--accent)/20">
              <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center p-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm border border-(--border)">
                  <span className="text-4xl mb-4 block">🚀</span>
                  <h3 className="text-xl font-bold text-(--primary)">Comparez les 20 pays</h3>
                  <p className="text-sm text-(--text-muted) mt-2 mb-6">Accédez au comparateur mondial et découvrez votre destination idéale.</p>
                  <Link href="/#pricing">
                    <PrimaryButton className="w-full justify-center">Accéder au Premium</PrimaryButton>
                  </Link>
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
              <Link href="/#pricing" className="block mt-6">
                <SecondaryButton>Mettre à niveau (999€)</SecondaryButton>
              </Link>
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