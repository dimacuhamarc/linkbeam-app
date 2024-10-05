import { NavBar } from "@/components/modules/navigationBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home | LinkBeam`,
  description: "Beam your links to your friends, in style.",
};

export default function Home() {
  return (
    <div className="h-full w-full">
      <NavBar />
    </div>
  );
}
