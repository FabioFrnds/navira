import { countriesData } from '@/src/lib/countries-data';

export function ComparisonTable() {
  const { france, mauritius } = countriesData;

  const compareItems = [
    { label: "Impôt sur les sociétés", fr: france.corporateTax, mu: mauritius.corporateTax, winner: "mu" },
    { label: "Impôt sur le revenu", fr: france.incomeTax, mu: mauritius.incomeTax, winner: "mu" },
    { label: "Impôt sur la plus-value", fr: france.capitalGainsTax, mu: mauritius.capitalGainsTax, winner: "mu" },
    { label: "Coût de la vie", fr: france.costOfLiving, mu: mauritius.costOfLiving, winner: "mu" },
    { label: "Sécurité", fr: france.security, mu: mauritius.security, winner: "mu" },
    { label: "Qualité de vie", fr: france.qualityOfLife, mu: mauritius.qualityOfLife, winner: "mu" },
    { label: "Santé", fr: france.healthcare, mu: mauritius.healthcare, winner: "fr" },
    { label: "Écoles pour enfants", fr: france.schools, mu: mauritius.schools, winner: "fr" },
    { label: "Logement / Immobilier", fr: france.realEstate, mu: mauritius.realEstate, winner: "mu" },
  ];

  return (
    <div className="navira-card p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-(--primary)">Comparaison Globale 2026</h2>
          <p className="text-sm text-(--text-muted) mt-1">Analyse détaillée : France vs Île Maurice</p>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Actif</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-150">
          <thead>
            <tr className="border-b border-(--border)">
              <th className="py-4 font-semibold text-(--text-muted) w-1/3">Critères</th>
              <th className="py-4 font-bold text-(--primary) w-1/3">🇫🇷 France</th>
              <th className="py-4 font-bold text-(--accent) w-1/3">🇲🇺 Maurice</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-(--border)">
            {compareItems.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 text-sm font-medium text-(--primary)">{item.label}</td>
                <td className={`py-4 text-sm ${item.winner === 'fr' ? 'font-bold text-green-600' : 'text-(--text-muted)'}`}>
                  {item.fr}
                </td>
                <td className={`py-4 text-sm ${item.winner === 'mu' ? 'font-bold text-green-600' : 'text-(--text-muted)'}`}>
                  {item.mu}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}