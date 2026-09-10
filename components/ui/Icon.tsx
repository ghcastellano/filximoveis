import {
  Search,
  Home,
  Calculator,
  Landmark,
  type LucideIcon,
} from 'lucide-react';

const MAP: Record<string, LucideIcon> = {
  search: Search,
  home: Home,
  calculator: Calculator,
  landmark: Landmark,
};

export default function Icon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = MAP[name] ?? Home;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
