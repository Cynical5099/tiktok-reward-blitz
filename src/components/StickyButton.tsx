import { ArrowRight } from "lucide-react";

const CTA_LINK = "https://glctrk.org/aff_c?offer_id=1242&aff_id=21664&source=TT";

const StickyButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg shadow-sticky z-50">
      <a
        href={CTA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="tiktok-button-sticky flex items-center justify-center gap-2"
      >
        Start Now
        <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  );
};

export default StickyButton;
