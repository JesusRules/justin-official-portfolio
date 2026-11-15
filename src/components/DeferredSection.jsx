import { Suspense, useRef } from 'react';
import { useSectionActivity } from '../hooks/useSectionActivity';

export default function DeferredSection({ component: Component, myRef, label, ...props }) {
  const contentRef = useRef(null);
  const { hasBeenVisible } = useSectionActivity(myRef);

  // Reserve the full section before loading so menu links and scroll snapping work.
  // Leave this wrapper unpositioned: section offsetTop values are relative to App.
  return (
    <div ref={myRef} style={{ width: '100%', height: '100vh', scrollSnapAlign: 'start' }}>
      {hasBeenVisible && (
        <Suspense fallback={<p role="status" style={{ margin: 0, padding: '5rem 2rem' }}>Loading {label}…</p>}>
          <Component {...props} myRef={contentRef} />
        </Suspense>
      )}
    </div>
  );
}
