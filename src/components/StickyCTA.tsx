'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const StickyCTA = () => {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero-cta');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const href = 'https://calendar.app.google/uYHrdAiAqTZCC6qv9';

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      const el = document.getElementById('hero-cta');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={`${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'} fixed inset-x-0 bottom-0 z-40 md:inset-auto md:right-6 md:bottom-6 md:w-auto transition-opacity pb-[env(safe-area-inset-bottom)]`}
    >
      <Link
        href={href}
        onClick={handleClick}
        className="block w-full md:w-auto text-center btn-primary rounded-none md:rounded-full py-4 md:py-2 md:px-4"
        target={pathname === '/' ? undefined : '_blank'}
        rel="noopener noreferrer"
        id="sticky-cta"
      >
        Get Your Free Automation Assessment
      </Link>
    </div>
  );
};

export default StickyCTA;
