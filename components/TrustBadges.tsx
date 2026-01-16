interface TrustBadgesProps {
  points: Array<{ text: string }>;
}

export function TrustBadges({ points }: TrustBadgesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {points.map((point, index) => (
        <div
          key={index}
          className="flex items-start space-x-3 p-4 bg-gsc-surface/50 border border-gsc-border rounded-lg"
        >
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gsc-gold/20 flex items-center justify-center">
              <span className="text-gsc-gold font-bold text-lg">✓</span>
            </div>
          </div>
          <p className="text-gsc-text font-medium">{point.text}</p>
        </div>
      ))}
    </div>
  );
}
