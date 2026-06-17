"use client";

import { useRef, useState } from "react";

type Profile = {
  status: string;
  income: string;
  savings: string;
  capital: string;
  goal: string;
};

export default function ChatFunnel() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [mode, setMode] = useState<"questions" | "loading" | "result">(
    "questions"
  );

  const lockRef = useRef(false);

  const [profile, setProfile] = useState<Profile>({
    status: "",
    income: "",
    savings: "",
    capital: "",
    goal: "",
  });

  const questions = [
    {
      question: "Quelle est votre situation ?",
      field: "status",
      options: ["Salarié", "Freelance", "Entrepreneur"],
    },
    {
      question: "Vos revenus mensuels ?",
      field: "income",
      options: ["3 000€", "5 000€", "8 000€", "+10 000€"],
    },
    {
      question: "Votre épargne mensuelle ?",
      field: "savings",
      options: ["500€", "1 000€", "2 000€", "+3 000€"],
    },
    {
      question: "Votre patrimoine actuel ?",
      field: "capital",
      options: ["0-50k€", "50-150k€", "150-500k€", "+500k€"],
    },
    {
      question: "Votre objectif principal ?",
      field: "goal",
      options: ["Pouvoir d'achat", "Fiscalité", "Qualité de vie", "Patrimoine"],
    },
  ];

  const current = questions[step];

  const selectOption = async (value: string) => {
    if (lockRef.current) return;
    lockRef.current = true;

    const question = questions[step];

    const updatedProfile = {
      ...profile,
      [question.field]: value,
    };

    const isLast = step === questions.length - 1;

    setProfile(updatedProfile);

    if (!isLast) {
      setStep((prev) => prev + 1);
      lockRef.current = false;
      return;
    }

    await handleSubmit(updatedProfile);

    lockRef.current = false;
  };

  const handleSubmit = async (finalProfile: Profile) => {
    setMode("loading");

    try {
      const res = await fetch("/api/groq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile: finalProfile }),
      });

      const data = await res.json();

      if (!data.result) {
        setResult("Erreur: aucune réponse du moteur IA.");
      } else {
        setResult(data.result);
      }

      setMode("result");
    } catch (err) {
      setResult("Erreur lors de l'analyse.");
      setMode("result");
    }
  };

  // ---------------- LOADING ----------------
  if (mode === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-10">
        <div>
          <p className="text-xl font-semibold">
            Analyse de votre situation...
          </p>
          <p className="text-gray-500 mt-2">
            Simulation des scénarios fiscaux et patrimoniaux
          </p>
        </div>
      </div>
    );
  }

  // ---------------- RESULT ----------------
  if (mode === "result") {
    return (
      <div className="min-h-screen p-10 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          Votre analyse personnalisée
        </h1>

        <div className="bg-white/70 border rounded-2xl p-6 shadow-sm whitespace-pre-line text-gray-800 leading-relaxed">
          {result}
        </div>

        <div className="mt-8 space-y-3">
          <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:opacity-90 transition">
            🔓 Accéder à la comparaison complète (999€)
          </button>

          <button className="w-full border border-black py-4 rounded-xl font-medium hover:bg-black hover:text-white transition">
            📄 Télécharger mon rapport PDF
          </button>

          <button
            className="w-full text-sm text-gray-500 underline"
            onClick={() => {
              setStep(0);
              setResult(null);
              setMode("questions");
              setProfile({
                status: "",
                income: "",
                savings: "",
                capital: "",
                goal: "",
              });
            }}
          >
            Nouvelle simulation
          </button>
        </div>
      </div>
    );
  }

  // ---------------- SAFETY ----------------
  if (!current) return null;

  // ---------------- QUESTIONS ----------------
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <div className="max-w-xl w-full">

        <p className="text-sm text-gray-500 mb-4">
          Question {step + 1} / {questions.length}
        </p>

        <h2 className="text-2xl font-bold mb-6">
          {current.question}
        </h2>

        <div className="space-y-3">
          {current.options.map((opt) => (
            <button
              key={opt}
              onClick={() => selectOption(opt)}
              className="w-full border rounded-xl p-4 hover:bg-black hover:text-white transition"
            >
              {opt}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}