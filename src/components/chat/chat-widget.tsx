"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // 👈 Ajouté pour détecter l'URL actuelle
import ChatFunnel from "@/src/components/chat-funnel";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // 👈 On récupère le chemin de la page

  // ESC to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Body lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // 🛑 Condition d'exclusion : Si l'URL commence par /dashboard, on n'affiche RIEN
  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <>
      {/* 1. Le Wrapper : s'occupe UNIQUEMENT de la position FIXE */}
      <div className="fixed bottom-6 right-6 z-50">
        
        {/* 2. Le Bouton : s'occupe du style, du relatif et du overflow-hidden */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le chat"
          className="
            group
            relative overflow-hidden
            flex items-center justify-center
            w-12 h-12
            rounded-full
            bg-[linear-gradient(135deg,#6C5CE7,#1E4D8C)]
            shadow-lg
            transition-all duration-300
            hover:scale-110
            active:scale-95
            cursor-pointer
          "
        >
          {/* Glow radial */}
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(108,92,231,0.35),transparent_70%)]" />
          
          {/* Shine effect */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-out bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.18),transparent)] skew-x-12 rounded-full" />
          
          <div className="relative z-10 text-white text-xl font-bold">✦</div>
        </button>
      </div>

      {/* CHAT MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-xs"
            onClick={() => setOpen(false)}
          />

          {/* MAIN CHAT CONTAINER */}
          <div
            className="
              relative z-10
              w-[95vw] sm:w-105
              h-[80vh] sm:h-150
              bg-white
              rounded-4xl
              shadow-[0_12px_40px_rgba(0,0,0,0.12)]
              overflow-hidden
              flex flex-col
              border border-gray-100
            "
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 px-5 py-4 bg-[#0B1F3B] text-white shrink-0">
              <img
                src="/navi-chat.png"
                alt="Avatar Navi"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-white/10"
              />
              <div className="flex flex-col leading-tight">
                <p className="font-semibold text-sm tracking-wide">Navi</p>
                <p className="text-[11px] text-white/70">
                  votre assistant personnalisé
                </p>
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer le chat"
                className="
                  ml-auto
                  w-8 h-8
                  rounded-full
                  flex items-center justify-center
                  text-white
                  bg-white/10
                  hover:bg-white/20
                  transition-all
                  cursor-pointer
                  text-xs
                "
              >
                ✕
              </button>
            </div>

            {/* BODY CONTAINER : Zone stricte d'affichage */}
            <div className="flex-1 min-h-0 overflow-hidden bg-white">
              <ChatFunnel />
            </div>
          </div>
        </div>
      )}
    </>
  );
}