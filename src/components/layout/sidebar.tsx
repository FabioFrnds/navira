'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, User, BarChart2, CreditCard, HelpCircle, Gem } from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Mes Simulations', href: '/dashboard/simulations', icon: BarChart2 },
  { name: 'Profil', href: '/dashboard/profile', icon: User },
  { name: 'Abonnement', href: '/dashboard/billing', icon: CreditCard },
  { name: 'Support', href: '/dashboard/support', icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-64 h-screen flex-col bg-white border-r border-(--border) sticky top-0">
      <div className="p-6">
        <Link href="/dashboard" className="block">
          <Image
            src="/navira-logo.png" // Ton fichier doit être dans /public/navira-logo.png
            alt="Navira Logo"
            width={140} // Ajuste selon la taille réelle de ton logo
            height={40}
            priority // Recommandé pour un logo
            className="h-auto w-auto"
          />
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${isActive ? 'bg-(--accent)/10 text-(--accent) font-bold' : 'text-(--text-muted) hover:bg-gray-50'}
              `}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer Sidenav : Petit bloc Premium */}
      <div className="p-4 border-t border-(--border)">
        <div className="bg-(--primary) p-4 rounded-xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <Gem size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Navira Pro</span>
          </div>
          <p className="text-xs opacity-80 mb-3">Débloquez l'optimisation complète.</p>
          <Link href="/pricing" className="block text-center bg-white text-(--primary) py-2 rounded-lg text-sm font-bold">
            Upgrader
          </Link>
        </div>
      </div>
    </aside>
  );
}