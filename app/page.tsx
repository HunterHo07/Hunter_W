import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { CarouselHeader } from './CarouselHeader/page';
import { ItemCards } from './ItemCards/page';

export default function HomePage() {
  return (
    <>
      <CarouselHeader />
      <ColorSchemeToggle />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <ItemCards key={i} />
        ))}
      </div>
    </>
  );
}