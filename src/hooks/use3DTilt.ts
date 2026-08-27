import { useRef, useEffect } from 'react';

interface TiltOptions {
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
  maxGlare?: number;
}

export function use3DTilt<T extends HTMLElement = HTMLDivElement>(options: TiltOptions = {}) {
  const {
    max = 10,
    perspective = 1000,
    scale = 1.02,
    speed = 400,
    glare = true,
    maxGlare = 0.25,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Create glare element if requested
    let glareElement: HTMLDivElement | null = null;
    if (glare) {
      glareElement = document.createElement('div');
      glareElement.className = 'absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden opacity-0 transition-opacity duration-300';
      const glareInner = document.createElement('div');
      glareInner.className = 'absolute w-[200%] h-[200%] -top-[50%] -left-[50%] bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none transform -rotate-45';
      glareElement.appendChild(glareInner);
      
      const computedPos = window.getComputedStyle(el).position;
      if (computedPos === 'static') {
        el.style.position = 'relative';
      }
      el.appendChild(glareElement);
    }

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -max;
      const rotateY = ((x - centerX) / centerX) * max;

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        el.style.transform = `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
        el.style.transition = `transform ${speed / 4}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;

        if (glareElement) {
          const glareOpacity = ((Math.abs(rotateX) + Math.abs(rotateY)) / (max * 2)) * maxGlare;
          glareElement.style.opacity = `${Math.min(glareOpacity, maxGlare)}`;
          const inner = glareElement.firstChild as HTMLElement;
          if (inner) {
            const posX = (x / rect.width) * 100;
            const posY = (y / rect.height) * 100;
            inner.style.transform = `translate(${posX - 50}%, ${posY - 50}%) rotate(-45deg)`;
          }
        }
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(animationFrameId);
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      el.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
      if (glareElement) {
        glareElement.style.opacity = '0';
      }
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (glareElement && el.contains(glareElement)) {
        el.removeChild(glareElement);
      }
    };
  }, [max, perspective, scale, speed, glare, maxGlare]);

  return ref;
}
