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
      className={`tiktok-card flex gap-4 ${delay || ''}`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="step-number">{number}</div>
        <div className="w-0.5 flex-1 bg-border rounded-full" />
      </div>
      <div className="flex-1 pb-2">
        <div className="w-10 h-10 rounded-xl bg-tiktok-green-light flex items-center justify-center mb-3">
          <Icon className="w-5 h-5 text-tiktok-green" />
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2">{heading}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default StepCard;
