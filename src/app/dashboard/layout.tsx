import type { ReactNode } from 'react';
import { DashboardHeader } from '@/components/dashboard/header';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <DashboardHeader />
      <main className="flex-1 gap-4 p-4 sm:px-6 sm:py-8 md:gap-8">
        {children}
      </main>
    </div>
  );
}
