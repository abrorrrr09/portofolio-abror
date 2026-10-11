"use client";
import { useEffect, useState } from "react";

const NAME = "MUHAMMAD ABROR RIFADA";

const EMBERS = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 37 + 8) % 100,
  delay: (i * 0.9) % 7,
  dur: 9 + ((i * 1.3) % 6),
  size: 2 + (i % 3),
  dx: ((i % 5) - 2) * 18,
}));

const css = `
.cx { position: fixed; inset: 0; z-index: 9999; overflow: hidden; cursor: pointer; color: #f4ede4;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif; }
.cx.open { pointer-events: none; }

.cx-half { position: absolute; top: 0; bottom: 0; width: 50.2%; background-size: 200% 100%;
  background-image: linear-gradient(135deg, #000 0%, #130e09 45%, #3a2a1a 100%);
  transition: transform 1s cubic-bezier(.76, 0, .24, 1) .55s; }
.cx-half.l { left: 0; background-position: left; }
.cx-half.r { right: 0; background-position: right; }
.cx.open .cx-half.l { transform: translateX(-101%); }
.cx.open .cx-half.r { transform: translateX(101%); }

.cx-seam { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; margin-left: -1px; z-index: 3; opacity: 0;
  background: linear-gradient(180deg, transparent, #f4d9b0 20%, #f4d9b0 80%, transparent);
  box-shadow: 0 0 24px 6px #c9a37acc; }
.cx.open .cx-seam { animation: cx-seam 1.3s ease forwards; }
@keyframes cx-seam { 0% { opacity: 0; transform: scaleY(.2); } 25% { opacity: 1; transform: scaleY(1); } 70% { opacity: 1; } 100% { opacity: 0; } }

.cx-ui { position: absolute; inset: 0; z-index: 2; transition: opacity .5s ease, filter .5s ease, transform .7s ease; }
.cx.open .cx-ui { opacity: 0; filter: blur(8px); transform: scale(1.06); }

.cx-glow { position: absolute; left: 50%; top: 50%; width: 80vmax; height: 50vmax; margin: -25vmax 0 0 -40vmax;
  border-radius: 50%; background: radial-gradient(circle, #8b6a4755, transparent 62%); animation: cx-breathe 6s ease-in-out infinite; }
@keyframes cx-breathe { 50% { transform: scale(1.15); opacity: .7; } }
.cx-vig { position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, transparent 45%, #000000bb 100%); }

.cx-ember { position: absolute; bottom: -12px; border-radius: 50%; background: #f4d9b0; opacity: 0;
  box-shadow: 0 0 10px 2px #c9a37a99; animation: cx-rise linear infinite; }
@keyframes cx-rise { 0% { transform: translate(0, 0); opacity: 0; } 15% { opacity: .9; } 85% { opacity: .45; }
  100% { transform: translate(var(--dx), -105vh); opacity: 0; } }

.cx-small { position: absolute; font-size: 11px; letter-spacing: .3em; color: #8f7f6d; animation: cx-fade 1.2s ease .3s both; }
.cx-tl { top: 28px; left: 32px; }
.cx-tr { top: 28px; right: 32px; }
.cx-bl { bottom: 48px; left: 32px; }
@keyframes cx-fade { from { opacity: 0; } }

.cx-center { position: absolute; inset: 0; display: grid; place-content: center; justify-items: center; text-align: center; padding: 0 12px; }
.cx-block { position: relative; padding: 40px 44px; }
.cx-c { position: absolute; width: 22px; height: 22px; border: 1.5px solid #c9a37a; opacity: 0;
  animation: cx-corner 1.2s cubic-bezier(.2, .8, .2, 1) .3s forwards; }
.cx-c.tl { top: 0; left: 0; border-right: 0; border-bottom: 0; }
.cx-c.tr { top: 0; right: 0; border-left: 0; border-bottom: 0; }
.cx-c.bl { bottom: 0; left: 0; border-right: 0; border-top: 0; }
.cx-c.br { bottom: 0; right: 0; border-left: 0; border-top: 0; }
@keyframes cx-corner { from { opacity: 0; transform: scale(2.2); } to { opacity: .85; transform: scale(1); } }

.cx-namewrap { position: relative; }
.cx-nm { display: flex; justify-content: center; white-space: nowrap; perspective: 700px;
  font-family: ui-serif, Georgia, "Times New Roman", serif; font-style: italic; font-weight: 500;
  font-size: clamp(1.2rem, 6.4vw, 5.4rem); line-height: 1.3; letter-spacing: .02em; }
.cx-sp { display: inline-block; width: .32em; }
.cx-ch { display: inline-block; transform-origin: 50% 100%; opacity: 0; padding: 0 .02em;
  background-image: linear-gradient(180deg, #fff3dc 5%, #d9b88e 55%, #a07c52 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: cx-land .95s cubic-bezier(.2, .9, .2, 1) calc(.5s + var(--n) * .055s) forwards,
             cx-glint .9s ease calc(2.6s + var(--n) * .05s); }
@keyframes cx-land {
  from { opacity: 0; transform: translateY(45%) rotateX(-95deg) scale(1.3); filter: blur(12px) drop-shadow(0 0 22px #fff3dc); }
  60% { opacity: 1; filter: blur(0) drop-shadow(0 0 24px #fff3dc); }
  to { opacity: 1; transform: none; filter: blur(0) drop-shadow(0 0 10px #c9a37a66); }
}
@keyframes cx-glint {
  0%, 100% { filter: brightness(1) drop-shadow(0 0 10px #c9a37a66); }
  50% { filter: brightness(1.7) drop-shadow(0 0 28px #fff3dc); }
}

.cx-flare { position: absolute; left: 50%; top: 50%; height: 2px; width: min(960px, 92vw); opacity: 0; pointer-events: none;
  transform: translate(-50%, -50%) scaleX(0); background: linear-gradient(90deg, transparent, #fff3dc, transparent);
  box-shadow: 0 0 30px 6px #c9a37a99; animation: cx-flare 1.7s ease-out 1.7s both; }
@keyframes cx-flare {
  0% { transform: translate(-50%, -50%) scaleX(0); opacity: 0; }
  30% { opacity: 1; }
  100% { transform: translate(-50%, -50%) scaleX(1); opacity: 0; }
}

.cx-rule { height: 1px; width: min(560px, 70vw); margin: 18px auto 14px; transform-origin: center;
  background: linear-gradient(90deg, transparent, #c9a37a, transparent); animation: cx-grow 1.4s ease 1.9s both; }
@keyframes cx-grow { from { transform: scaleX(0); } }
.cx-sub { font-size: 12px; letter-spacing: .3em; color: #b8a58f; animation: cx-fade 1.2s ease 2.5s both; }

/* ===== PENGHITUNG 0 - 100% ===== */
.cx-count { position: absolute; right: 32px; bottom: 36px; display: grid; justify-items: end; gap: 4px;
  animation: cx-fade 1s ease .6s both; }
.cx-label { font-size: 11px; letter-spacing: .3em; color: #8f7f6d; }
.cx-num { font-size: clamp(3rem, 9vw, 7rem); font-weight: 200; line-height: 1; letter-spacing: -.03em;
  font-variant-numeric: tabular-nums;
  background: linear-gradient(180deg, #fbebd2, #c9a37a 65%, #8b6a47);
  -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(0 0 18px #c9a37a55); }
.cx-num small { font-size: .28em; margin-left: 6px; vertical-align: top; letter-spacing: 0; }

.cx-line { position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: #c9a37a22; }
.cx-line span { display: block; position: relative; height: 100%; transition: width .06s linear;
  background: linear-gradient(90deg, #6b4f35, #f4d9b0); box-shadow: 0 0 14px #c9a37a; }
.cx-line span::after { content: ""; position: absolute; right: -2px; top: -5px; width: 4px; height: 13px; border-radius: 2px;
  background: #fff3dc; box-shadow: 0 0 16px 5px #c9a37a; }

@media (max-width: 600px) {
  .cx-tl, .cx-tr { top: 20px; } .cx-tl { left: 20px; } .cx-tr { right: 20px; }
  .cx-bl { left: 20px; bottom: 40px; } .cx-count { right: 20px; bottom: 28px; }
  .cx-block { padding: 30px 14px; } .cx-sub { font-size: 10px; letter-spacing: .2em; }
}
`;

export default function Loader() {
  const [phase, setPhase] = useState("show"); // show -> open -> gone
  const [p, setP] = useState(0);

  // hitung 0 sampai 100
  useEffect(() => {
    if (phase !== "show") return;
    const t = setInterval(() => setP((v) => Math.min(v + 1, 100)), 48);
    return () => clearInterval(t);
  }, [phase]);

  // setelah 100%, buka layar
  useEffect(() => {
    if (phase === "show" && p >= 100) {
      const t = setTimeout(() => setPhase("open"), 500);
      return () => clearTimeout(t);
    }
  }, [p, phase]);

  useEffect(() => {
    if (phase !== "open") return;
    const t = setTimeout(() => setPhase("gone"), 1900);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  const skip = () => {
    if (phase === "show") setPhase("open");
  };

  return (
    <div className={"cx " + phase} onClick={skip}>
      <style>{css}</style>
      <div className="cx-half l" />
      <div className="cx-half r" />
      <div className="cx-seam" />

      <div className="cx-ui">
        <div className="cx-glow" />
        <div className="cx-vig" />
        {EMBERS.map((e, i) => (
          <i
            key={i}
            className="cx-ember"
            style={{
              left: e.left + "%",
              width: e.size,
              height: e.size,
              animationDelay: e.delay + "s",
              animationDuration: e.dur + "s",
              "--dx": e.dx + "px",
            }}
          />
        ))}

        <span className="cx-small cx-tl">PORTOFOLIO 2026</span>
        <span className="cx-small cx-tr">PALEMBANG, ID</span>
        <span className="cx-small cx-bl">KLIK UNTUK MELEWATI</span>

        <div className="cx-center">
          <div className="cx-block">
            <i className="cx-c tl" />
            <i className="cx-c tr" />
            <i className="cx-c bl" />
            <i className="cx-c br" />
            <div className="cx-namewrap">
              <i className="cx-flare" />
              <div className="cx-nm">
                {NAME.split("").map((c, i) =>
                  c === " " ? (
                    <span key={i} className="cx-sp" />
                  ) : (
                    <span key={i} className="cx-ch" style={{ "--n": i }}>
                      {c}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="cx-rule" />
            <div className="cx-sub">
              MAHASISWA MANAJEMEN INFORMATIKA · POLSRI
            </div>
          </div>
        </div>

        <div className="cx-count">
          <span className="cx-label">MEMUAT PORTOFOLIO</span>
          <div className="cx-num">
            {p}
            <small>%</small>
          </div>
        </div>
        <div className="cx-line">
          <span style={{ width: p + "%" }} />
        </div>
      </div>
    </div>
  );
}
