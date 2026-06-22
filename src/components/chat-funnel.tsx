"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // 👈 1. Import du router Next.js

type Profile = {
  status: string;
  income: string;
  savings: string;
  capital: string;
  goal: string;
  timeline: string;
};

type Message = {
  role: "navi" | "user";
  content: string;
  options?: string[];
  showCta?: boolean;
};

export default function ChatFunnel() {
  const router = useRouter(); // 👈 2. Initialisation du router

  const [step, setStep] = useState(0);
  const [score, setScore] = useState<number | null>(null);

  const lockRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const messageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const [profile, setProfile] = useState<Profile>({
    status: "",
    income: "",
    savings: "",
    capital: "",
    goal: "",
    timeline: "",
  });

  const questions = [
    {
      question: "Quelle est votre situation ?",
      field: "status",
      options: ["Salarié", "Freelance", "Entrepreneur", "Investisseur"],
    },
    {
      question: "Quel sont vos revenus mensuels ?",
      field: "income",
      options: ["0-2k€", "2k-5k€", "5k-10k€", "+10k€"],
    },
    {
      question: "Quelle est votre épargne mensuelle ?",
      field: "savings",
      options: ["0-500€", "500-2k€", "2k-5k€", "+5k€"],
    },
    {
      question: "Quel est votre patrimoine actuel ?",
      field: "capital",
      options: ["0-50k€", "50-150k€", "150-500k€", "+500k€"],
    },
    {
      question: "Quel est votre objectif principal ?",
      field: "goal",
      options: ["Pouvoir d'achat", "Fiscalité", "Qualité de vie", "Patrimoine", "Sécurité"],
    },
    {
      question: "Dans combien de temps envisagez-vous un départ ?",
      field: "timeline",
      options: ["Moins de 6 mois", "6 à 12 mois", "1 à 3 ans"],
    },
  ];

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages([
      {
        role: "navi",
        content:
          "Bonjour, je suis Navi.\nJe vais analyser votre situation pour vous donner un score d'expatriation.\n\nCela ne prendra que 2 minutes.",
      },
      {
        role: "navi",
        content: questions[0].question,
        options: questions[0].options,
      },
    ]);
  }, []);

  // AUTO-SCROLL INTELLIGENT SANS ZONE MORTE
  useEffect(() => {
    if (messages.length === 0) return;

    const timer = setTimeout(() => {
      const container = containerRef.current;
      const lastMessageIndex = messages.length - 1;
      const lastMessageEl = messageRefs.current[lastMessageIndex];
      const bottomEl = bottomRef.current;

      if (!container || !lastMessageEl || !bottomEl) return;

      const containerHeight = container.clientHeight;
      const elementHeight = lastMessageEl.clientHeight;

      // Si le bloc final est plus grand que le widget, on cadre sur le début de sa lecture
      if (elementHeight > containerHeight - 60) {
        lastMessageEl.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Sinon, on descend sur l'ancre fine
        bottomEl.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [messages]);

  const selectOption = async (value: string) => {
    if (lockRef.current) return;
    lockRef.current = true;

    setMessages((prev) => [...prev, { role: "user", content: value }]);

    const updatedProfile = {
      ...profile,
      [questions[step].field]: value,
    };

    setProfile(updatedProfile);

    const nextStep = step + 1;
    const isLast = nextStep >= questions.length;

    if (isLast) {
      setMessages((prev) => [
        ...prev,
        { role: "navi", content: "Analyse de votre situation en cours..." },
      ]);

      await handleSubmit(updatedProfile);
      lockRef.current = false;
      return;
    }

    setStep(nextStep);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "navi",
          content: questions[nextStep].question,
          options: questions[nextStep].options,
        },
      ]);

      lockRef.current = false;
    }, 400);
  };

  const handleSubmit = async (finalProfile: Profile) => {
    try {
      const res = await fetch("/api/groq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile: finalProfile }),
      });

      const data = await res.json();

      if (!data.result) {
        setMessages((prev) => [
          ...prev,
          { role: "navi", content: "Erreur: aucune réponse du moteur IA." },
        ]);
        return;
      }

      setScore(data.score ?? null);

      setMessages((prev) => [
        ...prev,
        { role: "navi", content: data.result, showCta: true },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "navi", content: "Erreur lors de l'analyse." },
      ]);
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-y-auto flex flex-col gap-5 p-4 sm:p-5 pb-8 sm:pb-10 scroll-smooth"
    >
      {messages.map((m, i) => (
        <div
          key={i}
          ref={(el) => {
            messageRefs.current[i] = el;
          }}
          className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} scroll-mt-4`}
        >
          {m.role === "navi" ? (
            <div className="flex gap-2.5 items-end max-w-[88%]">
              <img
                src="/navi-chat.png"
                className="w-7 h-7 rounded-full shrink-0 mb-1 shadow-sm"
                alt="Navi"
              />
              <div className="flex flex-col w-full">
                <span className="text-[10px] text-gray-400 font-medium mb-1 ml-1">Navi</span>
                <div className="bg-[#F1F5F9] rounded-2xl rounded-bl-none p-4 shadow-xs border border-gray-100">
                  <p className="text-[14px] text-gray-800 whitespace-pre-line leading-relaxed">
                    {m.content}
                  </p>

                  {/* CHOIX CLIQUABLES - Mode Pilules & Alignement fluide */}
                  {m.options && (
                    <div className="mt-4 flex flex-wrap gap-2 items-start">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => selectOption(opt)}
                          className="
                            relative group overflow-hidden
                            w-fit
                            rounded-full
                            px-4 py-2
                            text-[13px] font-medium text-white
                            bg-[linear-gradient(135deg,#0B1F3B,#1E4D8C)]
                            shadow-xs
                            transition-all duration-300
                            hover:scale-[1.04]
                            active:scale-[0.97]
                            cursor-pointer
                            text-center
                          "
                        >
                          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(108,92,231,0.22),transparent_65%)]" />
                          </span>
                          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.14),transparent)] skew-x-12" />
                          <span className="relative z-10">{opt}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* CTA BOUTON - Analyse complète */}
                  {m.showCta && (
                    <div className="mt-5">
                      <button
                        // 👈 3. Modification de l'action ici pour rediriger vers la page d'inscription
                        onClick={() => router.push("/inscription")} 
                        className="
                          relative group overflow-hidden
                          w-full sm:w-auto inline-flex items-center justify-center
                          h-12 px-6
                          rounded-xl
                          font-semibold text-white text-[14px]
                          bg-[linear-gradient(135deg,#6C5CE7,#1E4D8C)]
                          shadow-soft
                          transition-all duration-300
                          hover:scale-[1.02]
                          active:scale-[0.98]
                          cursor-pointer
                        "
                      >
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(108,92,231,0.28),transparent_65%)]" />
                        </span>
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.12),transparent)] skew-x-12" />
                        <span className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">
                          Obtenir mon analyse complète
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-end max-w-[80%]">
              <span className="text-[10px] text-gray-400 font-medium mb-1 mr-1">Moi</span>
              <div className="bg-[linear-gradient(135deg,#6C5CE7,#1E4D8C)] text-white px-4 py-3 rounded-2xl rounded-br-none text-[14px] shadow-soft">
                {m.content}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* ANCRE DE SCROLL TECHNIQUE - h-px pour ne pas rajouter de marge invisible inutile */}
      <div ref={bottomRef} className="h-px w-full shrink-0" />
    </div>
  );
}