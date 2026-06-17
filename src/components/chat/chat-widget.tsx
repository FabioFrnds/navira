"use client";

import { useState } from "react";
import ChatFunnel from "@/src/components/chat-funnel";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON FLOATING */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-black text-white px-5 py-3 rounded-full shadow-lg z-50"
      >
        Simuler mon expatriation
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center">
          
          <div className="bg-white w-full md:w-125 h-[90vh] md:h-150 rounded-t-2xl md:rounded-2xl overflow-hidden relative">
            
            {/* close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-black z-10"
            >
              ✕
            </button>

            {/* chatbot */}
            <div className="h-full overflow-y-auto">
              <ChatFunnel />
            </div>

          </div>
        </div>
      )}
    </>
  );
}