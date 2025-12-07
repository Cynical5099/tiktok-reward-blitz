import { ArrowRight, Mail, ClipboardCheck, Gift, Users, Shield, Smartphone, Play, Sparkles } from "lucide-react";
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
    text: "Access your reward dashboard. Email is used only for reward delivery.",
  },
  {
    number: 2,
    icon: ClipboardCheck,
    heading: "Complete tasks",
    text: "Finish qualifying surveys and deals. More tasks = better rewards.",
  },
  {
    number: 3,
    icon: Gift,
    heading: "Get rewarded",
    text: "Verification complete? Reward delivered within 2–4 days.",
  },
];

const trustIndicators = [
  { icon: Users, label: "Thousands joined" },
  { icon: Shield, label: "Secure & verified" },
  { icon: Smartphone, label: "Mobile-first" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* TikTok-style Header */}
      <header className="flex items-center justify-center py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[hsl(var(--tiktok-red))] flex items-center justify-center">
            <Play className="w-4 h-4 text-primary-foreground fill-current" />
          </div>
          <span className="font-bold text-lg text-foreground">TikTok Rewards</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-5 pt-10 pb-8">
        <div className="max-w-lg mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full mb-6 animate-fade-up">
            <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--tiktok-red))]" />
            <span className="text-xs font-medium text-muted-foreground">Limited Time Offer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-foreground leading-[1.1] mb-4 tracking-tight animate-fade-up-delay-1">
            Unlock Your <span className="gradient-text">Rewards</span>
          </h1>
          
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-sm mx-auto animate-fade-up-delay-2">
            Complete simple tasks and claim exclusive TikTok Shop rewards. Start now.
          </p>

          {/* Hero CTA Button */}
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="tiktok-button inline-flex items-center gap-2 animate-fade-up-delay-3 animate-pulse-glow"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="px-5 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center mb-8">
            How it works
          </h2>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                {...step}
                delay={`animate-slide-in-delay-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="px-5 py-8">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-between gap-4">
            {trustIndicators.map((indicator) => (
              <TrustIndicator key={indicator.label} {...indicator} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-5 py-8">
        <div className="max-w-lg mx-auto">
          <TestimonialCard />
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <StickyButton />
    </div>
  );
};

export default Index;