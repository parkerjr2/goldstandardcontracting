import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className={cn("container-custom", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
