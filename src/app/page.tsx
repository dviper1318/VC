"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketMapsSection from "@/components/MarketMapsSection";
import SubmitForm from "@/components/SubmitForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <MarketMapsSection />
      <SubmitForm />
      <Footer />
    </main>
  );
}
