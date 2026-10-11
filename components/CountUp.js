"use client";
import { useEffect, useState } from "react";

export default function CountUp({ to, decimals = 0, suffix = "" }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf, start;
    const tick = (t) => {
      start = start ?? t;
      const k = Math.min((t - start) / 1500, 1);
      setV(to * k);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{v.toFixed(decimals)}{suffix}</>;
}
