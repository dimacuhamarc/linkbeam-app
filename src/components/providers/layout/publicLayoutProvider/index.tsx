import React from 'react';
import { NavBar } from '@/src/components/modules/navigationBar';

export default function PublicLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full">
      <NavBar />
      {children}
    </div>
  );
}
