import React from "react";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import ProblemSection1 from "./components/ProblemSection1";
import ProblemSection2 from "./components/ProblemSection2";
import ProblemSection3 from "./components/ProblemSection3";
import FeaturesSection from "./components/FeaturesSection";
import InvestorsSection from "./components/InvestorsSection";
import FoundersSection from "./components/FoundersSection";
import AboutUs from "./components/aboutUs";
function App() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <ProblemSection2 />
      <ProblemSection1 />
      <ProblemSection3 />
      <FeaturesSection />
      <InvestorsSection />
      <FoundersSection />
      <AboutUs />
    </div>
  );
}

export default App;
