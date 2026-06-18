export type Profile = {
  status: string;
  income: string;
  savings: string;
  capital: string;
  goal: string;
  timeline: string;
};

export type ExpatAnalysis = {
  score: number;
  level: string;
  insights: string[];
};

export function calculateExpatAnalysis(
  profile: Profile
): ExpatAnalysis {
  let score = 40;

  // --------------------
  // Statut
  // --------------------

  switch (profile.status) {
    case "Investisseur":
      score += 20;
      break;

    case "Entrepreneur":
      score += 15;
      break;

    case "Freelance":
      score += 12;
      break;

    case "Salarié":
      score += 8;
      break;
  }

  // --------------------
  // Revenus
  // --------------------

  switch (profile.income) {
    case "+10k€":
      score += 15;
      break;

    case "5k-10k€":
      score += 12;
      break;

    case "2k-5k€":
      score += 8;
      break;

    case "0-2k€":
      score += 5;
      break;
  }

  // --------------------
  // Épargne
  // --------------------

  switch (profile.savings) {
    case "+5k€":
      score += 15;
      break;

    case "2k-5k€":
      score += 12;
      break;

    case "500-2k€":
      score += 8;
      break;

    case "0-500€":
      score += 4;
      break;
  }

  // --------------------
  // Patrimoine
  // --------------------

  switch (profile.capital) {
    case "+500k€":
      score += 15;
      break;

    case "150-500k€":
      score += 12;
      break;

    case "50-150k€":
      score += 8;
      break;

    case "0-50k€":
      score += 4;
      break;
  }

  // --------------------
  // Horizon du projet
  // --------------------

  switch (profile.timeline) {
    case "Moins de 6 mois":
      score += 15;
      break;

    case "6 à 12 mois":
      score += 10;
      break;

    case "1 à 3 ans":
      score += 5;
      break;
  }

  score = Math.min(score, 100);

  // --------------------
  // Niveau
  // --------------------

  let level = "Standard";

  if (score >= 85) {
    level = "Très favorable";
  } else if (score >= 70) {
    level = "Favorable";
  } else if (score >= 55) {
    level = "Intéressant";
  }

  // --------------------
  // Insights
  // --------------------

  const insights: string[] = [];

  // Objectif

  switch (profile.goal) {
    case "Fiscalité":
      insights.push(
        "Potentiel d'optimisation fiscale à étudier"
      );
      break;

    case "Pouvoir d'achat":
      insights.push(
        "Potentiel d'amélioration du niveau de vie"
      );
      break;

    case "Qualité de vie":
      insights.push(
        "Recherche d'un meilleur équilibre de vie"
      );
      break;

    case "Patrimoine":
      insights.push(
        "Potentiel de développement patrimonial"
      );
      break;

    case "Sécurité":
      insights.push(
        "Recherche d'un environnement plus stable"
      );
      break;
  }

  // Patrimoine

  if (
    profile.capital === "150-500k€" ||
    profile.capital === "+500k€"
  ) {
    insights.push(
      "Patrimoine nécessitant une réflexion internationale"
    );
  }

  // Épargne

  if (
    profile.savings === "2k-5k€" ||
    profile.savings === "+5k€"
  ) {
    insights.push(
      "Capacité d'investissement supérieure à la moyenne"
    );
  }

  // Entrepreneur / freelance

  if (
    profile.status === "Entrepreneur" ||
    profile.status === "Freelance"
  ) {
    insights.push(
      "Flexibilité géographique potentiellement avantageuse"
    );
  }

  return {
    score,
    level,
    insights,
  };
}