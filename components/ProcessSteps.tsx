import { PROCESS_STEPS } from "@/lib/constants";
import { Card } from "./ui/Card";

export function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {PROCESS_STEPS.map((step) => (
        <Card key={step.number} className="text-center relative">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gsc-gold text-gsc-bg text-2xl font-bold mb-4">
            {step.number}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gsc-text">
            {step.title}
          </h3>
          <p className="text-sm text-gsc-muted">{step.description}</p>
          {step.number < PROCESS_STEPS.length && (
            <div className="hidden lg:block absolute top-1/4 -right-3 text-gsc-gold text-2xl">
              →
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
