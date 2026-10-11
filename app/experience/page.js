"use client";

import { useState } from "react";

const data = [
  {
    kat: "Experience",
    judul: "Pemain Futsal, SMK Negeri 3 Kota Bengkulu",
    waktu: "2021 - 2023",
    poin: [
      "Juara 3 futsal tingkat kota, 2022.",
      "Juara 2 futsal tingkat kota, 2023.",
    ],
  },
  {
    kat: "Pendidikan",
    judul: "Politeknik Negeri Sriwijaya, Palembang",
    waktu: "2024 - sekarang",
    poin: ["D-IV Manajemen Informatika", "IPK 3,74 / 4,00 (sampai semester 4)"],
  },
  {
    kat: "Pendidikan",
    judul: "SMK Negeri 3 Kota Bengkulu",
    waktu: "2021 - 2024",
    poin: ["Teknik Jaringan Komputer dan Telekomunikasi (TJKT)"],
  },
];

const css = `
.xp-sec {
  --xp-text: #f3ece4;
  --xp-muted: #a89c8f;
  --xp-accent: #c9a27a;
  --xp-line: rgba(255, 255, 255, 0.16);

  max-width: 1000px;
  margin: 0 auto;
  padding: 110px 24px 80px;
  background: transparent;
  color: var(--xp-text);
}

:where(.xp-sec) :where(h1, h2, h3, p, ul, li) {
  margin: 0;
  padding: 0;
  list-style: none;
}

:where(.xp-sec) :where(*, *::before, *::after) {
  box-sizing: border-box;
}

.xp-rv {
  opacity: 0;
  transform: translateY(14px);
  animation: xp-in 0.7s ease forwards;
  animation-delay: calc(var(--d, 0) * 1s);
}

@keyframes xp-in {
  to { opacity: 1; transform: none; }
}

@keyframes xp-draw {
  to { transform: scaleX(1); }
}

.xp-h1 {
  margin-bottom: 64px;
  font-size: clamp(2.2rem, 5vw, 3.25rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.xp-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 72px;
  align-items: start;
}

/* ===== Daftar di kiri ===== */
.xp-list {
  border-left: 1px solid var(--xp-line);
}

.xp-gt {
  padding: 32px 0 6px 26px;
  font-size: 15px;
  font-weight: 600;
  color: var(--xp-accent);
}

.xp-item {
  position: relative;
  display: block;
  width: 100%;
  padding: 20px 0 20px 26px;
  font: inherit;
  text-align: left;
  color: inherit;
  background: none;
  border: 0;
  cursor: pointer;
}

.xp-item::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1px;
  width: 2px;
  background: var(--xp-accent);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.xp-item[aria-pressed="true"]::before {
  transform: scaleY(1);
}

.xp-it-when {
  display: block;
  margin-bottom: 4px;
  font-size: 13px;
  color: var(--xp-muted);
  transition: color 0.3s;
}

.xp-it-title {
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--xp-muted);
  transition: color 0.3s, transform 0.3s;
}

.xp-item:hover .xp-it-title {
  color: var(--xp-text);
}

.xp-item[aria-pressed="true"] .xp-it-title {
  color: var(--xp-text);
  transform: translateX(4px);
}

.xp-item[aria-pressed="true"] .xp-it-when {
  color: var(--xp-accent);
}

.xp-item:focus-visible {
  outline: 2px solid var(--xp-accent);
  outline-offset: -2px;
  border-radius: 4px;
}

/* ===== Panel di kanan ===== */
.xp-panel {
  position: sticky;
  top: 120px;
  min-height: 300px;
}

.xp-pa {
  opacity: 0;
  transform: translateY(14px);
  animation: xp-in 0.6s ease forwards;
  animation-delay: calc(var(--k, 0) * 0.08s);
}

.xp-cat {
  margin-bottom: 14px;
  font-size: 14px;
  color: var(--xp-accent);
}

.xp-period {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.05;
}

.xp-pl {
  height: 1px;
  margin: 28px 0;
  background: var(--xp-line);
  transform: scaleX(0);
  transform-origin: left;
  animation: xp-draw 0.8s ease forwards;
  animation-delay: 0.25s;
}

.xp-ptitle {
  margin-bottom: 18px;
  font-size: clamp(1.25rem, 2.6vw, 1.6rem);
  font-weight: 600;
  line-height: 1.3;
}

.xp-points {
  display: grid;
  gap: 12px;
}

.xp-points li {
  position: relative;
  padding-left: 28px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--xp-muted);
}

.xp-points li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.85em;
  width: 14px;
  height: 1px;
  background: var(--xp-accent);
}

.xp-count {
  margin-top: 40px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.08em;
  color: var(--xp-muted);
}

@media (max-width: 800px) {
  .xp-sec { padding: 96px 16px 56px; }
  .xp-grid { grid-template-columns: 1fr; gap: 40px; }
  .xp-panel { position: static; min-height: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .xp-rv, .xp-pa { opacity: 1; transform: none; animation: none; }
  .xp-pl { transform: none; animation: none; }
  .xp-item::before, .xp-it-title { transition: none; }
}
`;

export default function Experience() {
  const [a, setA] = useState(0);
  const it = data[a];

  return (
    <section className="xp-sec">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <h1 className="xp-h1 xp-rv" style={{ "--d": 0 }}>
        Experience
      </h1>

      <div className="xp-grid xp-rv" style={{ "--d": 0.2 }}>
        <div className="xp-list">
          {data.map((d, i) => (
            <div key={d.judul}>
              {i > 0 && d.kat !== data[i - 1].kat && (
                <p className="xp-gt">{d.kat}</p>
              )}
              <button
                type="button"
                className="xp-item"
                aria-pressed={a === i}
                onClick={() => setA(i)}
              >
                <span className="xp-it-when">{d.waktu}</span>
                <span className="xp-it-title">{d.judul}</span>
              </button>
            </div>
          ))}
        </div>

        <div className="xp-panel" aria-live="polite">
          <div key={a}>
            <p className="xp-cat xp-pa" style={{ "--k": 0 }}>
              {it.kat}
            </p>
            <p className="xp-period xp-pa" style={{ "--k": 1 }}>
              {it.waktu}
            </p>
            <div className="xp-pl" />
            <h2 className="xp-ptitle xp-pa" style={{ "--k": 3 }}>
              {it.judul}
            </h2>
            <ul className="xp-points">
              {it.poin.map((p, j) => (
                <li key={p} className="xp-pa" style={{ "--k": 4 + j }}>
                  {p}
                </li>
              ))}
            </ul>
            <p className="xp-count xp-pa" style={{ "--k": 6 }}>
              {String(a + 1).padStart(2, "0")} /{" "}
              {String(data.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
