'use client';

import { PrimaryButton } from '@/src/components/ui/primary-button';
import { Mail, MessageCircle, Calendar } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-soft-zone pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div>
          <h1 className="text-3xl font-extrabold text-(--primary)">Support & Accompagnement</h1>
          <p className="text-(--text-muted) mt-2">Nous sommes là pour vous aider dans votre projet.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="navira-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-(--primary) mb-2">Email</h3>
            <p className="text-sm text-(--text-muted) mb-6">Une question technique ou sur votre compte ?</p>
            <a href="mailto:support@navira.com" className="mt-auto text-sm font-bold text-(--accent) hover:underline">
              support@navira.com
            </a>
          </div>

          {/* Appel */}
          <div className="navira-card p-6 flex flex-col items-center text-center border-2 border-(--accent)/10">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
              <Calendar size={24} />
            </div>
            <h3 className="font-bold text-(--primary) mb-2">Consultation</h3>
            <p className="text-sm text-(--text-muted) mb-6">Besoin d'un expert pour valider votre montage ?</p>
            <PrimaryButton className="w-full justify-center text-sm px-4">
              Réserver 30 min
            </PrimaryButton>
          </div>

          {/* FAQ (Placeholder) */}
          <div className="navira-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-full flex items-center justify-center mb-4">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-bold text-(--primary) mb-2">FAQ</h3>
            <p className="text-sm text-(--text-muted) mb-6">Trouvez des réponses immédiates.</p>
            <button className="mt-auto text-sm font-bold text-(--primary) hover:underline">
              Consulter la base &rarr;
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}