import { ArrowRight } from "lucide-react";

const CTA_LINK = "https://glctrk.org/aff_c?offer_id=1242&aff_id=21664&source=TT";

const StickyButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border z-50">
      <div className="max-w-lg mx-auto">
        <a
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="tiktok-button-sticky flex items-center justify-center gap-2"
        >
          Start Now
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default StickyButton;