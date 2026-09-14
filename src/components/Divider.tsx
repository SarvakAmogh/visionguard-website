'use client';

interface DividerProps {
  className?: string;
  variant?: 'subtle' | 'muted';
}

export const Divider: React.FC<DividerProps> = ({
  className = '',
  variant = 'subtle',
}) => {
  const variantStyles = {
    subtle: 'bg-text-muted/20',
    muted: 'bg-text-muted/10',
  };

  return (
    <div className={`w-full h-px ${variantStyles[variant]} ${className}`} />
  );
};