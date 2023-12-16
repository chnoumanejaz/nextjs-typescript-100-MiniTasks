import { useCallback, useEffect, useState } from 'react';

export default function useScroll(threshold: number) {
  const [scrolled, Setscrolled] = useState<boolean>(false);

  const onScroll = useCallback(() => {
    Setscrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
