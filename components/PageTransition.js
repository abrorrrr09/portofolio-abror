"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Ctx = createContext(() => {});
export const useGo = () => useContext(Ctx);

const PAGES = [
  ["/", "Home"],
  ["/about", "About"],
  ["/experience", "Experience"],
  ["/projects", "Projects"],
  ["/contact", "Contact"],
];

export default function PageTransition({ children }) {
  const router = useRouter();
  const path = usePathname();
  const [state, setState] = useState("idle"); // idle -> in -> out -> idle
  const [target, setTarget] = useState(0);
  const busy = useRef(false);

  const go = (href) => {
    if (href === path || busy.current) return;
    const i = PAGES.findIndex(([h]) => h === href);
    busy.current = true;
    setTarget(i < 0 ? 0 : i);
    setState("in");
    setTimeout(() => router.push(href), 850);
  };

  useEffect(() => {
    if (!busy.current) return;
    const t1 = setTimeout(() => setState("out"), 250);
    const t2 = setTimeout(() => {
      setState("idle");
      busy.current = false;
    }, 1050);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [path]);

  return (
    <Ctx.Provider value={go}>
      {children}
      <div className={"tr " + state} aria-hidden="true">
        <span className="tr-small">
          {String(target + 1).padStart(2, "0")} /{" "}
          {String(PAGES.length).padStart(2, "0")}
        </span>
        <strong className="tr-name">{PAGES[target][1]}</strong>
        <i className="tr-line" />
      </div>
    </Ctx.Provider>
  );
}
