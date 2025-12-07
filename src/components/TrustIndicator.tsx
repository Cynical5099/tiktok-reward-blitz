import { LucideIcon } from "lucide-react";

interface TrustIndicatorProps {
  icon: LucideIcon;
  label: string;
}

const TrustIndicator = ({ icon: Icon, label }: TrustIndicatorProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="trust-icon">
        <Icon className="w-5 h-5 text-tiktok-green" />
      </div>
      <span className="text-xs font-medium text-muted-foreground text-center">{label}</span>
    </div>
  );
};

export default TrustIndicator;
