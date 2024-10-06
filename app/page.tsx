import type { Metadata } from "next";
import LandingPage from '@/src/components/resources/landingPage';
import PublicLayoutProvider from '@/src/components/providers/layout/publicLayoutProvider';

export const metadata: Metadata = {
  title: `Home | LinkBeam`,
  description: "Beam your links to your friends, in style.",
};

export default function Home() {
  return (
    <PublicLayoutProvider>
      <LandingPage />
    </PublicLayoutProvider>
  );
}
