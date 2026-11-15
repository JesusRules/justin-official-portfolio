import { useEffect, useState } from 'react';

// Keep visited content mounted, but stop its rendering work outside the viewport.
export function useSectionActivity(ref) {
  const [inViewport, setInViewport] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(() => !document.hidden);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting && entry.intersectionRatio > 0;
      setInViewport(visible);
      if (visible) setHasBeenVisible(true);
    }, { threshold: 0.01 });
    if (ref.current) observer.observe(ref.current);
    const onVisibilityChange = () => setTabVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [ref]);

  return { isVisible: inViewport && tabVisible, hasBeenVisible };
}
