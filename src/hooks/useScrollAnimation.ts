import { useEffect, useRef, useState } from "react";

export const useScrollProgress = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const calculate = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const center = windowHeight * 0.5;

      // Distancia desde el centro de la pantalla al centro del elemento
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = Math.abs(elementCenter - center);

      // Rango máximo: cuando el elemento está a una pantalla de distancia del centro
      const maxDistance = windowHeight;

      const raw = 1 - distanceFromCenter / maxDistance;
      const clamped = Math.min(1, Math.max(0, raw));

      setProgress(clamped);
    };

    window.addEventListener("scroll", calculate, { passive: true });
    return () => window.removeEventListener("scroll", calculate);
  }, []);

  return { ref, progress };
};