import { Suspense, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { preloadImage } from '../utils/imageReady';

export default function DeferredSection({ component: Component, myRef, loadRef, canPrepare, backdrop, label, ...props }) {
  const contentRef = useRef(null);
  const [preparing, setPreparing] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [backdropReady, setBackdropReady] = useState(false);
  const ready = contentReady && backdropReady;
  const readyRef = useRef(false);
  const waiting = useRef([]);
  const onReady = useCallback((value = true) => setContentReady(value), []);

  useImperativeHandle(loadRef, () => ({
    prepare: () => {
      setPreparing(true);
      if (readyRef.current) return Promise.resolve();
      return new Promise(resolve => waiting.current.push(resolve));
    },
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) setPreparing(true);
    }, {
      root: myRef.current.parentElement,
      rootMargin: canPrepare ? `${window.innerHeight}px 0px` : '0px',
      threshold: 0.01,
    });
    observer.observe(myRef.current);
    return () => observer.disconnect();
  }, [myRef, canPrepare]);

  useEffect(() => {
    if (!preparing) return;
    let cancelled = false;
    preloadImage(backdrop).then(() => { if (!cancelled) setBackdropReady(true); });
    return () => { cancelled = true; };
  }, [preparing, backdrop]);

  useEffect(() => {
    readyRef.current = ready;
    if (ready) waiting.current.splice(0).forEach(resolve => resolve());
  }, [ready]);

  // Static wrappers preserve offsetTop relative to App. visibility keeps layout
  // measurable so images and canvases can prepare without showing partial content.
  return (
    <div ref={myRef} data-section={label} data-ready={ready} style={{
      width: '100%', height: '100vh', scrollSnapAlign: 'start',
      backgroundImage: preparing && !ready ? `url("${backdrop}")` : undefined,
      backgroundSize: 'cover', backgroundPosition: 'center',
    }}>
      {preparing && (
        <div data-section-content aria-hidden={!ready} style={{
          width: '100%', height: '100%', visibility: ready ? 'visible' : 'hidden',
        }}>
          <Suspense fallback={null}>
            <Component {...props} myRef={contentRef} onReady={onReady} />
          </Suspense>
        </div>
      )}
    </div>
  );
}
