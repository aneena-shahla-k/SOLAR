import React from 'react'
import Hero from "../components/Home/Hero";
import ProblemSolution from '../components/Home/ProblemSolution';
import EnergySolutions from '../components/Home/EnergySolutions';
import RequirementSection from '../components/Home/RequirementSection';
import SolarBrands from '../components/Home/SolarBrands';
import EVChargingBrands from '../components/Home/EVChargingBrands';
import WhichChargingSolution from '../components/Home/WhichChargingSolution';
import HowItWorks from '../components/Home/HowItWorks';
import PossibilitiesSection from '../components/Home/PossibilitiesSection';
import WhyWorkWithUs from '../components/Home/WhyWorkWithUs';
import BeforeAfterSection from '../components/Home/BeforeAfterSection';
import FinalCTASection from '../components/Home/FinalCTASection';
import SolarCaseStudiesAndReviews from '../components/Home/ProjectsAndReviews';
// import EnergyStory from '../components/Home/EnergyStory';

export default function Home() {
  return (
    <div>
      <Hero/>
      <ProblemSolution/>
      {/* <EnergyStory/> */}
      <EnergySolutions/>
      <RequirementSection/>
      <SolarBrands/>
      <EVChargingBrands/>
      <WhichChargingSolution/>
      <HowItWorks/>
      <PossibilitiesSection/>
      <WhyWorkWithUs/>
      <BeforeAfterSection/>
      <SolarCaseStudiesAndReviews/>
      <FinalCTASection/>
    </div>
  )
}
