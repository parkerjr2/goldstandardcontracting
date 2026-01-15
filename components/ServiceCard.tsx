import Link from "next/link";
import { Card } from "./ui/Card";

interface ServiceCardProps {
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
}

export function ServiceCard({
  name,
  slug,
  icon,
  shortDescription,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="group">
      <Card className="h-full hover:border-gsc-gold transition-all duration-300 transform hover:-translate-y-1">
        <div className="text-center">
          <div className="text-6xl mb-4">{icon}</div>
          <h3 className="text-2xl font-bold mb-3 text-gsc-text group-hover:text-gsc-gold transition-colors duration-200">
            {name}
          </h3>
          <p className="text-gsc-muted">{shortDescription}</p>
          <div className="mt-4 text-gsc-gold font-semibold flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
            Learn More →
          </div>
        </div>
      </Card>
    </Link>
  );
}
