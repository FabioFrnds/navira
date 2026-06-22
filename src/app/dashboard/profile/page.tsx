'use client';

import { PrimaryButton } from '@/src/components/ui/primary-button';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-soft-zone pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <div>
          <h1 className="text-3xl font-extrabold text-(--primary)">Mon Profil</h1>
          <p className="text-(--text-muted) mt-2">Ajustez vos informations pour affiner vos simulations.</p>
        </div>

        <div className="navira-card p-8 space-y-8">
          {/* Section Situation Financière */}
          <div>
            <h2 className="text-xl font-bold text-(--primary) mb-4">Situation Financière (Actuelle)</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-(--primary)">Revenu Net Annuel (€)</label>
                <input 
                  type="number" 
                  defaultValue={85000}
                  className="w-full px-4 py-3 rounded-xl border border-(--border) bg-slate-50 focus:bg-white focus:ring-2 focus:ring-(--accent) outline-none transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-(--primary)">Statut Professionnel</label>
                <select className="w-full px-4 py-3 rounded-xl border border-(--border) bg-slate-50 focus:bg-white focus:ring-2 focus:ring-(--accent) outline-none transition-all">
                  <option>Dirigeant d'entreprise / SASU</option>
                  <option>Indépendant / Freelance</option>
                  <option>Salarié</option>
                  <option>Rentier / Investisseur</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="border-(--border)" />

          {/* Section Situation Familiale */}
          <div>
            <h2 className="text-xl font-bold text-(--primary) mb-4">Situation Familiale</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-(--primary)">Statut Marital</label>
                <select className="w-full px-4 py-3 rounded-xl border border-(--border) bg-slate-50 focus:bg-white focus:ring-2 focus:ring-(--accent) outline-none transition-all">
                  <option>Célibataire</option>
                  <option>Marié(e) / Pacsé(e)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-(--primary)">Nombre d'enfants à charge</label>
                <input 
                  type="number" 
                  defaultValue={0}
                  className="w-full px-4 py-3 rounded-xl border border-(--border) bg-slate-50 focus:bg-white focus:ring-2 focus:ring-(--accent) outline-none transition-all" 
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <PrimaryButton>Sauvegarder les modifications</PrimaryButton>
          </div>
        </div>

      </div>
    </div>
  );
}