import { TESTIMONIAL } from "@/lib/constants";
import { Card } from "./ui/Card";

export function Testimonial() {
  return (
    <Card variant="glass" className="max-w-4xl mx-auto">
      <div className="text-center">
        <div className="text-gsc-gold text-6xl mb-4">&ldquo;</div>
        <blockquote className="text-xl md:text-2xl font-medium text-gsc-text mb-6 italic">
          {TESTIMONIAL.quote}
        </blockquote>
        <div className="flex items-center justify-center">
          <div>
            <p className="font-bold text-gsc-text">{TESTIMONIAL.author}</p>
            <p className="text-sm text-gsc-muted">{TESTIMONIAL.title}</p>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-gsc-gold text-2xl">
              ★
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
