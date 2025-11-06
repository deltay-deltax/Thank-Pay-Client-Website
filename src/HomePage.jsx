import React from "react";
import "./assets/styles/global.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import FeaturesSection from "./components/FeaturesSection";
import FoundersSection from "./components/FoundersSection";
import InvestorsSection from "./components/InvestorsSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="page-root">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <FoundersSection />
        <InvestorsSection />
      </main>
      <Footer />
    </div>
  );
}
