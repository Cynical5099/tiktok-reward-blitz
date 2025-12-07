import { Star } from "lucide-react";

const TestimonialCard = () => {
  return (
    <div className="tiktok-card">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--tiktok-red))] to-[hsl(var(--tiktok-cyan))] flex items-center justify-center flex-shrink-0">
          <span className="font-bold text-sm text-primary-foreground">A</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-foreground">Verified User</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[hsl(var(--tiktok-red))] fill-current" />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            "Quick and simple. Got my reward email a few days later."
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;