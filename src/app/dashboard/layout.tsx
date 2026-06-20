// src/app/dashboard/layout.tsx
import { Sidebar } from "@/src/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar fixe à gauche */}
      <Sidebar />
      
      {/* Zone de contenu principale */}
      {/* On ajoute un padding pour que ce ne soit pas collé au bord */}
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}