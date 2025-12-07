import { Gift, ArrowRight, CheckCircle, Mail } from "lucide-react";

const RewardCycleIllustration = () => {
  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Rotating arrows circle */}
      <div className="absolute inset-0 animate-rotate-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(160, 60%, 45%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(170, 55%, 40%)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="url(#arrowGradient)"
            strokeWidth="2"
            strokeDasharray="20 10"
          />
        </svg>
      </div>

      {/* Floating icons around the center */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-12 h-12 rounded-full bg-tiktok-green-light flex items-center justify-center">
          <Mail className="w-6 h-6 text-tiktok-green" />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-12 h-12 rounded-full bg-tiktok-green-light flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-tiktok-green" />
        </div>
      </div>

      <div className="absolute top-1/2 left-4 -translate-y-1/2 animate-float" style={{ animationDelay: "0.5s" }}>
        <div className="w-10 h-10 rounded-full bg-tiktok-green-light flex items-center justify-center">
          <ArrowRight className="w-5 h-5 text-tiktok-green rotate-180" />
        </div>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="w-10 h-10 rounded-full bg-tiktok-green-light flex items-center justify-center">
          <ArrowRight className="w-5 h-5 text-tiktok-green" />
        </div>
      </div>

      {/* Center reward icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-tiktok-green to-primary shadow-button flex items-center justify-center animate-pulse-soft">
          <Gift className="w-12 h-12 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
};

export default RewardCycleIllustration;
