import { Card } from "./ui/Card";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {steps.map((step) => (
        <Card key={step.number} className="text-center relative">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gsc-gold text-gsc-bg text-2xl font-bold mb-4">
            {step.number}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gsc-text">
            {step.title}
          </h3>
          <p className="text-sm text-gsc-muted">{step.description}</p>
          {step.number < steps.length && (
            <div className="hidden lg:block absolute top-1/4 -right-3 text-gsc-gold text-2xl">
              →
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
