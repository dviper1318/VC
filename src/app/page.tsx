"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import MarketMapsSection from "@/components/MarketMapsSection";
import SubmitForm from "@/components/SubmitForm";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <StatsBand />
      <MarketMapsSection />
      <SubmitForm />
      <Footer />
    </main>
  );
}
