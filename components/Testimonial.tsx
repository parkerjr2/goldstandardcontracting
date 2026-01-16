import { Card } from "./ui/Card";

interface TestimonialData {
  quote: string;
  author: string;
  title: string;
  rating: number;
}

interface TestimonialProps {
  testimonial: TestimonialData;
}

export function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <Card variant="glass" className="max-w-4xl mx-auto">
      <div className="text-center">
        <div className="text-gsc-gold text-6xl mb-4">&ldquo;</div>
        <blockquote className="text-xl md:text-2xl font-medium text-gsc-text mb-6 italic">
          {testimonial.quote}
        </blockquote>
        <div className="flex items-center justify-center">
          <div>
            <p className="font-bold text-gsc-text">{testimonial.author}</p>
            <p className="text-sm text-gsc-muted">{testimonial.title}</p>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-1">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <span key={i} className="text-gsc-gold text-2xl">
              ★
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
