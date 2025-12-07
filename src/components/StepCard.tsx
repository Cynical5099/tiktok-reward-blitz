import { LucideIcon } from "lucide-react";

interface StepCardProps {
  number: number;
  icon: LucideIcon;
  heading: string;
  text: string;
  delay?: string;
}

const StepCard = ({ number, icon: Icon, heading, text, delay }: StepCardProps) => {
  return (
    <div 
      className={`tiktok-card flex items-start gap-4 ${delay || ''}`}
    >
      <div className="step-number flex-shrink-0">{number}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-4 h-4 text-[hsl(var(--tiktok-red))]" />
          <h3 className="text-base font-semibold text-foreground">{heading}</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default StepCard;