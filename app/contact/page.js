"use client";
import { useEffect, useState } from "react";

const MAIL = "abirifada4@gmail.com";
const WA = "6285783565731";

const ROWS = [
  {
    key: "email",
    label: "EMAIL",
    value: MAIL,
    href: "mailto:" + MAIL,
    copy: MAIL,
  },
  {
    key: "wa",
    label: "WHATSAPP",
    value: "0857-8356-5731",
    href: "https://wa.me/" + WA,
    copy: "085783565731",
    external: true,
  },
  {
    key: "gh",
    label: "GITHUB",
    value: "github.com/abrorrrr09",
    href: "https://github.com/abrorrrr09",
    external: true,
  },
  {
    key: "loc",
    label: "LOKASI",
    value: "Palembang, Sumatera Selatan",
    sub: "Jl. Mayor Laut Wiratno No 136",
    href: "https://www.google.com/maps/search/Jl.+Mayor+Laut+Wiratno+No+136+Palembang",
    external: true,
  },
];

const css = `
.ct { max-width: 1000px; margin: 0 auto; padding: 56px 0 40px; }
@keyframes ct-in { from { opacity: 0; transform: translateY(24px); filter: blur(6px); } to { opacity: 1; transform: none; filter: blur(0); } }
.ct-a { animation: ct-in .9s cubic-bezier(.2, .8, .2, 1) both; animation-delay: calc(var(--d, 0) * 1s + .5s); }

.ct-top { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px 24px; margin-bottom: 28px; }
.ct-label { margin: 0; font-size: 12px; letter-spacing: .35em; color: #8f7f6d; }
.ct-status { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 28px; font-size: 12px; letter-spacing: .25em; color: #b8aa9a; }
.ct-live { display: inline-flex; align-items: center; gap: 12px; }
.ct-live i { width: 8px; height: 8px; border-radius: 50%; background: #e9b872; animation: ct-ping 1.8s infinite; }
@keyframes ct-ping { 0% { box-shadow: 0 0 0 0 #e9b87299; } 100% { box-shadow: 0 0 0 10px #e9b87200; } }
.ct-clock { color: #c9a37a; font-variant-numeric: tabular-nums; }

.ct-h { margin: 0 0 56px; max-width: 18ch; font-size: clamp(2.4rem, 7vw, 4.8rem); line-height: 1.08; font-weight: 700;
  letter-spacing: -.035em; color: #f4ede4; }
.ct-h span { display: block; margin-top: 14px; font-size: .42em; line-height: 1.3; font-weight: 500; letter-spacing: -.01em; color: #7d6f60; max-width: 26ch; }

.ct-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 56px; align-items: start; }

.ct-list { margin: 0; padding: 0; list-style: none; border-top: 1px solid #c9a37a33; }
.ct-row { position: relative; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #c9a37a22; }
.ct-row::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 0; pointer-events: none;
  background: linear-gradient(90deg, #c9a37a1f, transparent); transition: width .6s cubic-bezier(.2, .8, .2, 1); }
.ct-row:hover::before { width: 100%; }
.ct-row::after { content: ""; position: absolute; left: 0; bottom: -1px; height: 1px; width: 0; background: #c9a37a;
  transition: width .6s cubic-bezier(.2, .8, .2, 1); }
.ct-row:hover::after { width: 100%; }

.ct-main { position: relative; z-index: 1; flex: 1; min-width: 0; display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 26px 8px; transition: padding-left .4s cubic-bezier(.2, .8, .2, 1); }
.ct-row:hover .ct-main { padding-left: 20px; }
.ct-k { display: block; margin-bottom: 6px; font-size: 11px; letter-spacing: .35em; color: #8f7f6d; }
.ct-v { display: block; font-size: clamp(1.15rem, 3vw, 1.9rem); font-weight: 600; letter-spacing: -.01em; color: #f4ede4;
  overflow-wrap: anywhere; transition: color .3s ease; }
.ct-s { display: block; margin-top: 4px; font-size: 14px; color: #8f7f6d; }
.ct-row:hover .ct-v { color: #c9a37a; }
.ct-go { flex: none; display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; border: 1px solid #c9a37a55;
  color: #c9a37a; font-size: 1.05rem; transition: transform .4s cubic-bezier(.2, .8, .2, 1), background .3s ease, color .3s ease; }
.ct-row:hover .ct-go { transform: translate(4px, -4px); background: #c9a37a; color: #1a120b; }

.ct-copy { position: relative; z-index: 1; flex: none; margin-right: 6px; padding: 6px 14px; border-radius: 999px; border: 1px solid #c9a37a55;
  background: transparent; color: #c9a37a; font: inherit; font-size: 12px; letter-spacing: .1em; cursor: pointer;
  transition: background .3s ease, color .3s ease; }
.ct-copy:hover { background: #c9a37a22; }
.ct-copy.ok { background: #c9a37a; color: #1a120b; border-color: #c9a37a; }

.ct-card { position: relative; padding: 36px 30px 30px; border-radius: 22px; border: 1px solid #c9a37a33; overflow: hidden;
  background: linear-gradient(160deg, #ffffff0d, #ffffff02); }
.ct-card::before { content: ""; position: absolute; right: -25%; top: -45%; width: 80%; height: 90%; pointer-events: none;
  background: radial-gradient(circle, #c9a37a2e, transparent 65%); }
.ct-card::after { content: ""; position: absolute; left: 30px; right: 30px; top: 0; height: 2px; pointer-events: none;
  background: linear-gradient(90deg, transparent, #c9a37a, transparent); }
.ct-card > * { position: relative; z-index: 1; }
.ct-card h2 { margin: 0 0 26px; font-size: 1.5rem; font-weight: 600; color: #f4ede4; }
.ct-card h2 span { color: #7d6f60; }
.ct-field { display: block; margin-bottom: 22px; }
.ct-field small { display: block; margin-bottom: 4px; font-size: 11px; letter-spacing: .3em; color: #c9a37a; }
.ct-field input, .ct-field textarea { width: 100%; padding: 10px 0; background: transparent; border: 0; border-bottom: 1px solid #c9a37a55;
  color: #f4ede4; font: inherit; font-size: 1.05rem; outline: none; resize: none; transition: border-color .3s ease; }
.ct-field input::placeholder, .ct-field textarea::placeholder { color: #6f6254; }
.ct-field input:focus, .ct-field textarea:focus { border-bottom-color: #f4d9b0; }

.ct-btns { display: grid; gap: 12px; margin-top: 8px; }
.ct-btn { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 8px 8px 8px 24px;
  border-radius: 999px; border: 1px solid #c9a37a; font-weight: 600; overflow: hidden;
  transition: transform .3s ease, background .3s ease, box-shadow .3s ease, opacity .3s ease; }
.ct-btn:hover { transform: translateY(-3px); }
.ct-btn.main { background: #c9a37a; color: #1a120b; }
.ct-btn.main:hover { box-shadow: 0 12px 34px -8px #c9a37acc; }
.ct-btn.main::before { content: ""; position: absolute; top: 0; bottom: 0; left: -60%; width: 40%;
  background: linear-gradient(100deg, transparent, #ffffff66, transparent); transform: skewX(-20deg); }
.ct-btn.main:hover::before { left: 130%; transition: left .8s ease; }
.ct-btn.ghost { color: #f4ede4; }
.ct-btn.ghost:hover { background: #c9a37a1f; }
.ct-ar { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; transition: transform .35s cubic-bezier(.2, .8, .2, 1); }
.ct-btn.main .ct-ar { background: #1a120b; color: #c9a37a; }
.ct-btn.ghost .ct-ar { border: 1px solid #c9a37a; color: #c9a37a; }
.ct-btn:hover .ct-ar { transform: rotate(-45deg); }
.ct-btn.off { opacity: .35; pointer-events: none; }
.ct-hint { margin: 18px 0 0; font-size: 13px; color: #8f7f6d; }

@media (max-width: 860px) {
  .ct { padding-top: 32px; }
  .ct-grid { grid-template-columns: 1fr; gap: 40px; }
  .ct-card { padding: 30px 22px 24px; }
  .ct-card::after { left: 22px; right: 22px; }
}
@media (max-width: 480px) { .ct-status { letter-spacing: .15em; } .ct-go { display: none; } }
`;

export default function Contact() {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Jakarta",
        })
          .format(new Date())
          .replace(".", ":"),
      );
    tick();
    const t = setInterval(tick, 20000);
    return () => clearInterval(t);
  }, []);

  const copy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1600);
    } catch (e) {}
  };

  const ready = msg.trim().length > 0;
  const who = name.trim();
  const body = `Halo Abror, saya ${who || "pengunjung portofolio kamu"}.\n\n${msg.trim()}`;
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(body)}`;
  const mailLink = `mailto:${MAIL}?subject=${encodeURIComponent("Halo dari portofolio" + (who ? " - " + who : ""))}&body=${encodeURIComponent(body)}`;

  return (
    <section className="ct">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="ct-top ct-a" style={{ "--d": 0 }}>
        <p className="ct-label">CONTACT</p>
        <div className="ct-status">
          <span className="ct-live">
            <i />
            TERSEDIA UNTUK KERJA PRAKTIK
          </span>
          <span className="ct-clock">
            PALEMBANG{time ? " · " + time + " WIB" : ""}
          </span>
        </div>
      </div>

      <h1 className="ct-h ct-a" style={{ "--d": 0.1 }}>
        Ayo ngobrol.
        <span>Ceritakan ide, tawaran, atau pertanyaanmu.</span>
      </h1>

      <div className="ct-grid">
        <ul className="ct-list">
          {ROWS.map((r, i) => (
            <li
              key={r.key}
              className="ct-row ct-a"
              style={{ "--d": 0.25 + i * 0.1 }}
            >
              <a
                className="ct-main"
                href={r.href}
                {...(r.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span>
                  <small className="ct-k">{r.label}</small>
                  <span className="ct-v">{r.value}</span>
                  {r.sub && <span className="ct-s">{r.sub}</span>}
                </span>
                <b className="ct-go">↗</b>
              </a>
              {r.copy && (
                <button
                  type="button"
                  className={"ct-copy" + (copied === r.key ? " ok" : "")}
                  onClick={() => copy(r.key, r.copy)}
                >
                  {copied === r.key ? "Tersalin ✓" : "Salin"}
                </button>
              )}
            </li>
          ))}
        </ul>

        <form
          className="ct-card ct-a"
          style={{ "--d": 0.4 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <h2>
            Tulis pesan <span>singkat.</span>
          </h2>
          <label className="ct-field">
            <small>NAMA</small>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama kamu"
              autoComplete="name"
            />
          </label>
          <label className="ct-field">
            <small>PESAN</small>
            <textarea
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Tulis pesanmu di sini..."
            />
          </label>
          <div className="ct-btns">
            <a
              className={"ct-btn main" + (ready ? "" : " off")}
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!ready}
            >
              Kirim lewat WhatsApp <span className="ct-ar">→</span>
            </a>
            <a
              className={"ct-btn ghost" + (ready ? "" : " off")}
              href={mailLink}
              aria-disabled={!ready}
            >
              Kirim lewat Email <span className="ct-ar">→</span>
            </a>
          </div>
          <p className="ct-hint">
            Pesan akan terbuka di WhatsApp atau aplikasi emailmu, tinggal tekan
            kirim.
          </p>
        </form>
      </div>
    </section>
  );
}
