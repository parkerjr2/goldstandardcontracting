"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gsc-border rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center bg-gsc-surface hover:bg-gsc-surface/80 transition-colors duration-200"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-lg">{item.question}</span>
            <span
              className={cn(
                "text-gsc-gold text-2xl transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            >
              ▼
            </span>
          </button>
          <div
            className={cn(
              "px-6 bg-gsc-bg transition-all duration-300 overflow-hidden",
              openIndex === index ? "py-4 max-h-96" : "max-h-0 py-0"
            )}
          >
            <p className="text-gsc-muted">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
