import { Quote } from "lucide-react";

const TestimonialCard = () => {
  return (
    <div className="tiktok-card relative">
      <div className="absolute -top-3 left-6">
        <div className="w-8 h-8 rounded-full bg-tiktok-green flex items-center justify-center">
          <Quote className="w-4 h-4 text-primary-foreground" />
        </div>
      </div>
      <p className="text-foreground font-medium mt-4 mb-4 leading-relaxed">
        "Quick and simple. Finished my tasks and got my reward email a few days later."
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-tiktok-green-light flex items-center justify-center">
          <span className="font-bold text-tiktok-green">A</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Verified participant</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-tiktok-green fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
