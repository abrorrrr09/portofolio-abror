"use client";
import { useEffect, useState } from "react";

export default function Roles({ words, every = 2400 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), every);
    return () => clearInterval(t);
  }, [words.length, every]);
  return (
    <div className="role-win">
      <span key={i} className="role-word">
        {words[i]}
      </span>
    </div>
  );
}
