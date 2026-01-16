import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gsc-gold shadow-md hover:shadow-lg active:shadow-sm";

  const variants = {
    primary:
      "bg-gsc-gold text-gsc-bg hover:bg-gsc-gold-dark focus:ring-gsc-gold shadow-gsc-gold/20",
    secondary:
      "bg-gsc-surface text-gsc-text hover:bg-gsc-surface/80 border border-gsc-border",
    outline:
      "border-2 border-gsc-gold text-gsc-gold hover:bg-gsc-gold hover:text-gsc-bg shadow-none hover:shadow-md",
    dark:
      "bg-gsc-bg text-white hover:bg-gsc-surface focus:ring-gsc-gold border-2 border-gsc-bg hover:border-gsc-surface",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
