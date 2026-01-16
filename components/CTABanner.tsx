import { BUSINESS_INFO } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";
import { Button } from "./ui/Button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Ready to Get Started?",
  subtitle = "Contact us today for your free estimate",
}: CTABannerProps) {
  return (
    <div className="gold-gradient rounded-lg px-8 py-12 md:py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-bg">
        {title}
      </h2>
      <p className="text-lg md:text-xl mb-8 text-gsc-bg/90">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          href="/contact"
          variant="secondary"
          size="lg"
        >
          Get a Free Estimate
        </Button>
        <Button
          href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
          variant="outline"
          size="lg"
        >
          Call {BUSINESS_INFO.phone}
        </Button>
      </div>
    </div>
  );
}
