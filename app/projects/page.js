import TLink from "@/components/TLink";

const PROJECTS = [
  {
    year: "2026",
    title: "Proyek Perkuliahan: Database",
    points: [
      "Merancang sistem informasi penjualan tiket event dengan database Oracle.",
      "Membuat database transaksi dengan procedure, function, dan trigger.",
      "Mengelola data penjualan tiket, stok tiket, dan total pembayaran.",
    ],
    tags: ["Oracle", "SQL", "Trigger"],
    link: "", // isi dengan link GitHub kalau ada, contoh: "https://github.com/abrorrrr09/nama-repo"
  },
  {
    year: "2025",
    title: "Analisis dan Perancangan Sistem",
    points: [
      "Menganalisis kebutuhan sistem dari studi kasus yang diberikan.",
      "Membuat Use Case, Activity Diagram, Class Diagram, dan ERD.",
      "Menyusun rancangan sebagai dasar pengembangan sistem informasi.",
    ],
    tags: ["UML", "ERD", "Use Case"],
    link: "",
  },
];

const css = `
.pj { max-width: 960px; margin: 0 auto; padding: 56px 0 40px; }
@keyframes pj-in { from { opacity: 0; transform: translateY(24px); filter: blur(6px); } to { opacity: 1; transform: none; filter: blur(0); } }
.pj-a { animation: pj-in .9s cubic-bezier(.2, .8, .2, 1) both; animation-delay: calc(var(--d, 0) * 1s + .5s); }

.pj-label { margin: 0 0 28px; font-size: 12px; letter-spacing: .35em; color: #8f7f6d; }
.pj-h { margin: 0 0 56px; font-size: clamp(2rem, 5.6vw, 3.8rem); line-height: 1.15; font-weight: 600; letter-spacing: -.025em; color: #f4ede4; }
.pj-h span { color: #7d6f60; }

.pj-list { margin: 0; padding: 0; list-style: none; border-top: 1px solid #c9a37a33; }
.pj-row { position: relative; display: grid; grid-template-columns: 150px 1fr 90px; gap: 12px 28px; align-items: start;
  padding: 36px 16px; border-bottom: 1px solid #c9a37a22;
  transition: padding-left .4s cubic-bezier(.2, .8, .2, 1), background .4s ease; }
.pj-row::before { content: ""; position: absolute; left: 0; bottom: -1px; height: 1px; width: 0; background: #c9a37a;
  transition: width .6s cubic-bezier(.2, .8, .2, 1); }
.pj-row:hover { padding-left: 28px; background: linear-gradient(90deg, #c9a37a14, transparent 70%); }
.pj-row:hover::before { width: 100%; }

.pj-n { font-size: clamp(3.4rem, 8vw, 5.6rem); font-weight: 800; line-height: .9; letter-spacing: -.04em; color: transparent;
  -webkit-text-stroke: 1px #c9a37a77; transition: color .4s ease, -webkit-text-stroke-color .4s ease; }
.pj-row:hover .pj-n { color: #c9a37a; -webkit-text-stroke-color: #c9a37a; }

.pj-t { margin: 0 0 16px; font-size: clamp(1.3rem, 2.8vw, 1.8rem); font-weight: 600; color: #f4ede4; }
.pj-pts { margin: 0 0 20px; padding: 0; list-style: none; display: grid; gap: 8px; }
.pj-pts li { position: relative; padding-left: 22px; color: #b8aa9a; }
.pj-pts li::before { content: ""; position: absolute; left: 0; top: .8em; width: 12px; height: 1px; background: #c9a37a; }
.pj-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.pj-tags b { font-size: 12.5px; font-weight: 600; padding: 3px 12px; border-radius: 999px; border: 1px solid #c9a37a55; color: #c9a37a; }
.pj-code { display: inline-block; margin-top: 18px; color: #f4ede4; border-bottom: 1px solid #c9a37a; padding-bottom: 2px; transition: color .3s ease; }
.pj-code:hover { color: #c9a37a; }
.pj-y { text-align: right; color: #c9a37a; font-weight: 700; padding-top: 6px; }

/* ===== BLOK AJAKAN DI BAWAH ===== */
.pj-cta { position: relative; margin-top: 72px; padding: 56px 44px 48px; border-radius: 24px; overflow: hidden;
  border: 1px solid #c9a37a33; background: linear-gradient(160deg, #ffffff0d, #ffffff02); }
.pj-cta::before { content: ""; position: absolute; right: -12%; top: -70%; width: 65%; height: 170%; pointer-events: none;
  background: radial-gradient(circle, #c9a37a33, transparent 65%); }
.pj-cta::after { content: ""; position: absolute; left: 44px; right: 44px; top: 0; height: 2px; pointer-events: none;
  background: linear-gradient(90deg, transparent, #c9a37a, transparent); }
.pj-cta > * { position: relative; z-index: 1; }

.pj-ghost { position: absolute !important; right: 32px; top: auto; bottom: 150px; transform: none; z-index: 0 !important;
  pointer-events: none; font-size: clamp(4rem, 15vw, 9rem); font-weight: 800; line-height: 1; letter-spacing: -.05em;
  color: transparent; -webkit-text-stroke: 1px #c9a37a44; transition: -webkit-text-stroke-color .5s ease; user-select: none; }
.pj-cta:hover .pj-ghost { -webkit-text-stroke-color: #c9a37a77; }

.pj-avail { display: flex; align-items: center; gap: 12px; margin: 0 0 26px; font-size: 12px; letter-spacing: .35em; color: #b8aa9a; }
.pj-avail i { width: 8px; height: 8px; border-radius: 50%; background: #e9b872; animation: pj-ping 1.8s infinite; }
@keyframes pj-ping { 0% { box-shadow: 0 0 0 0 #e9b87299; } 100% { box-shadow: 0 0 0 10px #e9b87200; } }

.pj-cta h2 { margin: 0 0 22px; font-size: clamp(2.4rem, 7.4vw, 5rem); line-height: 1.02; font-weight: 700; letter-spacing: -.04em; color: #f4ede4; }
.pj-cta h2 em { display: block; font-style: normal; line-height: 1.25; padding-bottom: .12em; margin-bottom: -.2em;
  background: linear-gradient(100deg, #fbebd2 0%, #c9a37a 50%, #8b6a47 100%); background-size: 200% auto;
  -webkit-background-clip: text; background-clip: text; color: transparent; animation: pj-shine 5s linear infinite; }
@keyframes pj-shine { to { background-position: -200% center; } }
.pj-sub { margin: 0 0 34px; max-width: 46ch; color: #b8aa9a; font-size: 1.05rem; }

.pj-btns { display: flex; flex-wrap: wrap; gap: 14px; }
.pj-btn { position: relative; display: inline-flex; align-items: center; gap: 16px; padding: 10px 10px 10px 26px;
  border-radius: 999px; border: 1px solid #c9a37a; font-weight: 600; font-size: 1rem; overflow: hidden;
  transition: transform .3s ease, background .3s ease, box-shadow .3s ease; }
.pj-btn:hover { transform: translateY(-3px); }
.pj-btn.main { background: #c9a37a; color: #1a120b; }
.pj-btn.main:hover { box-shadow: 0 12px 34px -8px #c9a37acc; }
.pj-btn.main::before { content: ""; position: absolute; top: 0; bottom: 0; left: -60%; width: 40%;
  background: linear-gradient(100deg, transparent, #ffffff66, transparent); transform: skewX(-20deg); }
.pj-btn.main:hover::before { left: 130%; transition: left .8s ease; }
.pj-btn.ghost { color: #f4ede4; background: transparent; }
.pj-btn.ghost:hover { background: #c9a37a1f; }
.pj-ar { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; font-size: 1.05rem;
  transition: transform .35s cubic-bezier(.2, .8, .2, 1); }
.pj-btn.main .pj-ar { background: #1a120b; color: #c9a37a; }
.pj-btn.ghost .pj-ar { border: 1px solid #c9a37a; color: #c9a37a; }
.pj-btn.main:hover .pj-ar { transform: rotate(-45deg); }
.pj-btn.ghost:hover .pj-ar { transform: translateY(3px); }

.pj-mailrow { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 22px; margin-top: 48px; padding-top: 26px;
  border-top: 1px solid #c9a37a2a; }
.pj-mailrow small { font-size: 15px; font-weight: 600; letter-spacing: .3em; color: #c9a37a; }
.pj-mailrow span { font-size: clamp(1.05rem, 3vw, 1.6rem); font-weight: 500; color: #f4ede4; overflow-wrap: anywhere;
  transition: color .3s ease; }
.pj-mailrow b { color: #c9a37a; font-size: 1.3rem; transition: transform .35s cubic-bezier(.2, .8, .2, 1); }
.pj-mailrow:hover span { color: #c9a37a; }
.pj-mailrow:hover b { transform: translate(5px, -5px); }

@media (max-width: 760px) {
  .pj { padding-top: 32px; }
  .pj-row { grid-template-columns: 1fr; padding: 28px 8px; }
  .pj-y { text-align: left; order: -1; }
  .pj-n { font-size: 3rem; }
  .pj-cta { padding: 40px 22px 36px; margin-top: 56px; }
  .pj-cta::after { left: 22px; right: 22px; }
  .pj-btn { width: 100%; justify-content: space-between; }
  .pj-avail { letter-spacing: .2em; }
  .pj-ghost { bottom: 190px; right: 16px; }
}
`;

export default function Projects() {
  return (
    <section className="pj">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <p className="pj-label pj-a" style={{ "--d": 0 }}>
        PROJECTS
      </p>
      <h1 className="pj-h pj-a" style={{ "--d": 0.1 }}>
        Karya yang pernah saya kerjakan. <span>Semua dari bangku kuliah.</span>
      </h1>

      <ul className="pj-list">
        {PROJECTS.map((p, i) => (
          <li
            key={p.title}
            className="pj-row pj-a"
            style={{ "--d": 0.25 + i * 0.12 }}
          >
            <span className="pj-n">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="pj-t">{p.title}</h2>
              <ul className="pj-pts">
                {p.points.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="pj-tags">
                {p.tags.map((t) => (
                  <b key={t}>{t}</b>
                ))}
              </div>
              {p.link && (
                <a
                  className="pj-code"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat kode ↗
                </a>
              )}
            </div>
            <span className="pj-y">{p.year}</span>
          </li>
        ))}
      </ul>

      <div className="pj-cta pj-a" style={{ "--d": 0.6 }}>
        <span className="pj-ghost" aria-hidden="true">
          HALO
        </span>
        <p className="pj-avail">
          <i />
          TERSEDIA UNTUK KERJA PRAKTIK
        </p>
        <h2>
          Punya ide?<em>Mari wujudkan bersama.</em>
        </h2>
        <p className="pj-sub">
          Magang, kerja praktik, atau proyek bersama. Ceritakan idenya, saya
          bantu rancang sampai jadi.
        </p>
        <div className="pj-btns">
          <TLink href="/contact" className="pj-btn main">
            Mulai obrolan <span className="pj-ar">→</span>
          </TLink>
          <a
            href="/cv.pdf"
            download="CV-Muhammad-Abror-Rifada.pdf"
            className="pj-btn ghost"
          >
            Unduh CV <span className="pj-ar">↓</span>
          </a>
        </div>
        <a className="pj-mailrow" href="mailto:abirifada4@gmail.com">
          <small>EMAIL</small>
          <span>abirifada4@gmail.com</span>
          <b>↗</b>
        </a>
      </div>
    </section>
  );
}
