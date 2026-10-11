"use client";
import TLink from "./TLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);
  const navRef = useRef(null);
  const target = hover ?? path;

  useEffect(() => {
    const measure = () => {
      const el = navRef.current?.querySelector(`[data-href="${target}"]`);
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    const t = setTimeout(() => setReady(true), 80);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [target]);

  return (
    <header className="header">
      <div className="who">
        <h4>{profile.name}</h4>
        <small>{profile.major}</small>
        <small>{profile.campus}</small>
      </div>
      <button
        className="burger"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        ☰
      </button>
      <nav
        ref={navRef}
        className={open ? "open" : ""}
        onMouseLeave={() => setHover(null)}
      >
        <span
          className={"pill" + (ready ? " ready" : "")}
          style={{ transform: `translateX(${pill.left}px)`, width: pill.width }}
        />
        {links.map(([label, href]) => (
          <TLink
            key={href}
            href={href}
            data-href={href}
            className={target === href ? "on" : ""}
            onMouseEnter={() => setHover(href)}
            onClick={() => setOpen(false)}
          >
            {label}
          </TLink>
        ))}
      </nav>
    </header>
  );
}
