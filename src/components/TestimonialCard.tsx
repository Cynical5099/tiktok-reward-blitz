import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  { name: "Alex", message: "Quick and simple. Got my reward email a few days later." },
  { name: "Jordan", message: "Actually legit! Completed everything in 20 mins." },
  { name: "Taylor", message: "Was skeptical but it worked. Reward came through." },
  { name: "Morgan", message: "Super easy tasks. Definitely worth it." },
  { name: "Casey", message: "Fast process, real rewards. Impressed!" },
  { name: "Riley", message: "Did this on my lunch break. No issues at all." },
  { name: "Sam", message: "Better than expected. Tasks were straightforward." },
  { name: "Jamie", message: "Legit program. Got exactly what was promised." },
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="tiktok-card">
      <div className={`flex items-start gap-3 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--tiktok-red))] to-[hsl(var(--tiktok-cyan))] flex items-center justify-center flex-shrink-0">
          <span className="font-bold text-sm text-primary-foreground">{current.name[0]}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-foreground">{current.name}</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[hsl(var(--tiktok-red))] fill-current" />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            "{current.message}"
          </p>
        </div>
      </div>
      {/* Progress dots */}
      <div className="flex justify-center gap-1 mt-4">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-[hsl(var(--tiktok-red))] w-4' : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;