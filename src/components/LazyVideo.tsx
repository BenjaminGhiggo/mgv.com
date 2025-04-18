import { useEffect, useRef } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
}

export default function LazyVideo({ src, className = '' }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.src = src;
            videoRef.current.load();
            videoRef.current.play();
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1,
      }
    );

    observerRef.current.observe(videoRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
    />
  );
}