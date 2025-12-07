import { LucideIcon } from "lucide-react";

interface TrustIndicatorProps {
  icon: LucideIcon;
  label: string;
}

const TrustIndicator = ({ icon: Icon, label }: TrustIndicatorProps) => {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <div className="trust-icon">
        <Icon className="w-4 h-4 text-[hsl(var(--tiktok-red))]" />
      </div>
      <span className="text-xs font-medium text-muted-foreground text-center">{label}</span>
    </div>
  );
};

export default TrustIndicator;