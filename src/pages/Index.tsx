import { ArrowRight, Mail, ClipboardCheck, Gift, Users, Shield, Smartphone } from "lucide-react";
import RewardCycleIllustration from "@/components/RewardCycleIllustration";
import StepCard from "@/components/StepCard";
import TrustIndicator from "@/components/TrustIndicator";
import TestimonialCard from "@/components/TestimonialCard";
import StickyButton from "@/components/StickyButton";

const CTA_LINK = "https://glctrk.org/aff_c?offer_id=1242&aff_id=21664&source=TT";

const steps = [
  {
    number: 1,
    icon: Mail,
    heading: "Enter your email",
    text: "Access your reward dashboard. Email is used only for reward delivery updates.",
  },
  {
    number: 2,
    icon: ClipboardCheck,
    heading: "Complete the required tasks",
    text: "Finish the qualifying surveys and deals. The more you complete correctly, the better your reward will be.",
  },
  {
    number: 3,
    icon: Gift,
    heading: "Receive your reward",
    text: "After verification, your reward will be delivered to your email within 2–4 days.",
  },
];

const trustIndicators = [
  { icon: Users, label: "Trusted by thousands" },
  { icon: Shield, label: "Protected & secure" },
  { icon: Smartphone, label: "Mobile-first experience" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <section className="px-6 pt-12 pb-8">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-foreground leading-tight mb-4 animate-fade-up">
            Unlock Rewards With Simple Tasks
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 animate-fade-up-delay-1">
            Complete quick steps to claim your TikTok Shop reward. The more tasks you complete, the better your final reward will be.
          </p>

          {/* Reward Cycle Illustration */}
          <div className="mb-8 animate-fade-up-delay-2">
            <RewardCycleIllustration />
          </div>

          {/* Hero CTA Button */}
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="tiktok-button inline-flex items-center gap-2 animate-fade-up-delay-3"
          >
            Start Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-foreground text-center mb-6">
            How It Works
          </h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                {...step}
                delay={`animate-fade-up-delay-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center gap-8">
            {trustIndicators.map((indicator) => (
              <TrustIndicator key={indicator.label} {...indicator} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <TestimonialCard />
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <StickyButton />
    </div>
  );
};

export default Index;
