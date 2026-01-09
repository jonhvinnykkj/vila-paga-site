"use client";

import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { ScreenBorder } from "@/components/ui/ScreenBorder";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { AttractionsSection } from "@/components/sections/AttractionsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScreenBorder />
      <Header />
      <main className="relative">
        <HeroSection />
        <SectionDivider variant="leaves" className="relative z-10 -mt-4 -mb-4" />
        <WelcomeSection />
        <SectionDivider variant="ornate" className="relative z-10 -mt-4 -mb-4" />
        <AttractionsSection />
        <SectionDivider variant="simple" className="relative z-10 -mt-4 -mb-4" />
        <EventsSection />
        <SectionDivider variant="leaves" className="relative z-10 -mt-4 -mb-4" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
