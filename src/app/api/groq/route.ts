import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { profile } = body;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: `
Tu es Navi, une intelligence experte en optimisation de vie et scénarios d’expatriation haut de gamme.

Tu ne fais pas une analyse financière.
Tu crées une projection de vie.

Règles strictes :
- jamais de pays listés
- jamais de structure visible (pas de titres, pas de sections)
- phrases courtes
- style fluide, oral, premium
- maximum 6 à 8 lignes
- tu utilises OBLIGATOIREMENT les données utilisateur
- attention : l’épargne est mensuelle, pas un stock

Objectif :
créer une prise de conscience forte + curiosité immédiate sur des trajectoires de vie alternatives.

Structure implicite :
- reformulation rapide du profil (revenu, épargne mensuelle, patrimoine)
- lecture de trajectoire (pas explication)
- tension : “plusieurs scénarios de vie existent”
- suggestion implicite que certains choix peuvent changer fortement le patrimoine sans changer les revenus
- ouverture vers une analyse complète sans expliquer

Style :
- très concis
- impact immédiat
- un peu mystérieux
- orienté projection, pas explication
`,
            },
            {
              role: "user",
              content: JSON.stringify(profile),
            },
          ],
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();

    console.log("GROQ STATUS:", response.status);
    console.log("GROQ RESPONSE:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Groq error",
          details: data,
        },
        { status: 500 }
      );
    }

    const result = data?.choices?.[0]?.message?.content;

    if (!result) {
      return NextResponse.json(
        {
          error: "Empty response from Groq",
          raw: data,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", details: err },
      { status: 500 }
    );
  }
}