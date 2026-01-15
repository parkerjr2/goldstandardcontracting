import Link from "next/link";
import { Card } from "./ui/Card";

interface CityCardProps {
  name: string;
  slug: string;
  state: string;
  isPrimary?: boolean;
}

export function CityCard({ name, slug, state, isPrimary }: CityCardProps) {
  return (
    <Link href={`/service-areas/${slug}`} className="group">
      <Card className="h-full hover:border-gsc-gold transition-all duration-300 transform hover:-translate-y-1">
        <div className="text-center">
          {isPrimary && (
            <div className="inline-block mb-2 px-3 py-1 bg-gsc-gold/20 border border-gsc-gold rounded-full text-xs font-semibold text-gsc-gold">
              Primary Area
            </div>
          )}
          <h3 className="text-xl font-bold mb-1 text-gsc-text group-hover:text-gsc-gold transition-colors duration-200">
            {name}, {state}
          </h3>
          <p className="text-sm text-gsc-muted mb-3">Roofing & Exterior Services</p>
          <div className="text-gsc-gold font-semibold text-sm flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
            View Services →
          </div>
        </div>
      </Card>
    </Link>
  );
}
