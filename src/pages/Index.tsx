import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ProblemSection } from '@/components/ProblemSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { DiscountSection } from '@/components/DiscountSection';
import { TeamSection } from '@/components/TeamSection';
import { RiskFreeSection } from '@/components/RiskFreeSection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <ProblemSection />
        <BenefitsSection />
        <SocialProofSection />
        <FeaturesSection />
        <ProcessSection />
        <DiscountSection />
        <TeamSection />
        <RiskFreeSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
