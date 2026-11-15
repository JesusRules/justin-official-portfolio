import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

// Share the assets' Suspense boundary. Warm up camera, controls and GPU uploads
// behind the cover before allowing the section to become visible.
export default function SceneReady({ onReady }) {
  const renderedFrames = useRef(0);
  const callbackFrame = useRef(0);
  const invalidate = useThree(state => state.invalidate);

  useEffect(() => {
    renderedFrames.current = 0;
    invalidate();
    return () => cancelAnimationFrame(callbackFrame.current);
  }, [invalidate, onReady]);

  useFrame(() => {
    if (renderedFrames.current >= 2) return;
    renderedFrames.current += 1;
    if (renderedFrames.current === 2) {
      callbackFrame.current = requestAnimationFrame(() => onReady(true));
    } else {
      invalidate();
    }
  });

  return null;
}
