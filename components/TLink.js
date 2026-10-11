"use client";
import Link from "next/link";
import { useGo } from "./PageTransition";

export default function TLink({ href, children, onClick, ...rest }) {
  const go = useGo();
  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
        go(href);
      }}
    >
      {children}
    </Link>
  );
}
