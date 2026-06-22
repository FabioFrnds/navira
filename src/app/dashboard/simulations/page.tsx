'use client';

import { PrimaryButton } from '@/src/components/ui/primary-button';
import { FileText, Plus } from 'lucide-react';

export default function SimulationsPage() {
  return (
    <div className="min-h-screen bg-soft-zone pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-(--primary)">Mes Simulations</h1>
            <p className="text-(--text-muted) mt-2">Retrouvez et gérez toutes vos analyses d'expatriation.</p>
          </div>
          <PrimaryButton className="flex items-center gap-2">
            <Plus size={20} /> Nouvelle simulation
          </PrimaryButton>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Carte Simulation Existante */}
          <div className="navira-card p-6 flex flex-col hover:border-(--accent) transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <FileText size={24} />
              </span>
              <span className="text-xs font-medium text-(--text-muted)">Il y a 2 jours</span>
            </div>
            <h3 className="font-bold text-(--primary) text-lg">Projet Maurice 2026</h3>
            <p className="text-sm text-(--text-muted) mt-1 flex-1">Comparaison France vs Île Maurice avec un revenu de 120k€.</p>
            <div className="mt-4 pt-4 border-t border-(--border) flex justify-between items-center text-sm">
              <span className="font-semibold text-green-600">+45% de gain</span>
              <span className="text-(--accent) font-medium">Voir les détails &rarr;</span>
            </div>
          </div>

          {/* Carte Ajouter */}
          <div className="navira-card p-6 border-2 border-dashed border-(--border) bg-transparent flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white hover:border-(--accent)/50 transition-all min-h-50">
            <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-3">
              <Plus size={24} />
            </div>
            <h3 className="font-bold text-(--primary)">Simuler un autre pays</h3>
            <p className="text-sm text-(--text-muted) mt-1">Débloquez la carte du monde en Premium.</p>
          </div>
        </div>

      </div>
    </div>
  );
}