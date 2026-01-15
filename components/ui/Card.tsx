import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass";
}

export function Card({ children, className, variant = "default" }: CardProps) {
  const variants = {
    default:
      "bg-gsc-surface border border-gsc-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300",
    glass:
      "glass-effect rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300",
  };

  return <div className={cn(variants[variant], className)}>{children}</div>;
}
