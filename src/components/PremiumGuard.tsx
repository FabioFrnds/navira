// components/PremiumGuard.tsx
import React from 'react';
import { PrimaryButton } from '@/src/components/ui/primary-button';

interface PremiumGuardProps {
  children: React.ReactNode;
  isPro: boolean;
}

// Composant local ou à exporter
const UpgradeButton = () => (
  <PrimaryButton className="bg-linear-to-r from-indigo-600 to-purple-600">
    Débloquer l'accès Premium
  </PrimaryButton>
);

export const PremiumGuard = ({ children, isPro }: PremiumGuardProps) => {
  if (!isPro) {
    return (
      <div className="relative blur-[2px] pointer-events-none select-none">
        {children}
      </div>
    );
  }
  return <>{children}</>;
};