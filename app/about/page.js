import TLink from "@/components/TLink";

const FOCUS = [
  {
    n: "01",
    title: "Database",
    text: "Merancang dan mengelola basis data transaksi, lengkap dengan procedure, function, dan trigger.",
    tags: ["Oracle", "MySQL", "SQL"],
  },
  {
    n: "02",
    title: "Analisis & Perancangan",
    text: "Menerjemahkan kebutuhan sistem menjadi rancangan yang jelas dan terstruktur.",
    tags: ["UML", "ERD", "DFD", "Use Case"],
  },
  {
    n: "03",
    title: "Pemrograman",
    text: "Membangun aplikasi dan antarmuka web yang berjalan dengan rapi.",
    tags: ["Java", "PHP", "Python", "JavaScript", "C++"],
  },
];

const JOURNEY = [
  {
    year: "2021",
    title: "SMK Negeri 3 Kota Bengkulu",
    text: "Mulai belajar jaringan komputer dan telekomunikasi (TJKT).",
  },
  {
    year: "2022 - 2023",
    title: "Futsal tingkat kota",
    text: "Juara 3 pada 2022 dan Juara 2 pada 2023.",
  },
  {
    year: "2024",
    title: "Politeknik Negeri Sriwijaya",
    text: "Masuk D-IV Manajemen Informatika di Palembang.",
  },
  {
    year: "2025",
    title: "Analisis dan perancangan sistem",
    text: "Proyek perancangan dengan Use Case, Activity, Class Diagram, dan ERD.",
  },
  {
    year: "2026",
    title: "Proyek database Oracle",
    text: "Sistem penjualan tiket event dengan procedure, function, dan trigger.",
  },
  {
    year: "Berikutnya",
    title: "Kerja praktik",
    text: "Target: PT Pupuk Sriwidjaja Palembang.",
    next: true,
  },
];

const TOOLS = [
  "Visual Studio Code",
  "XAMPP",
  "Microsoft Visual Studio",
  "Microsoft Office",
];
const SOFT = [
  "Kerja sama tim",
  "Komunikasi",
  "Problem solving",
  "Berpikir kritis",
  "Manajemen waktu",
  "Bertanggung jawab",
  "Adaptif",
];

const css = `
.ab { max-width: 1000px; margin: 0 auto; padding: 24px 0 40px; }
@keyframes ab-in { from { opacity: 0; transform: translateY(28px); filter: blur(8px); } to { opacity: 1; transform: none; filter: blur(0); } }
.ab-a { animation: ab-in .9s cubic-bezier(.2, .8, .2, 1) both; animation-delay: calc(var(--d, 0) * 1s + .5s); }

.ab-hero { display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; align-items: end; padding: 32px 0 56px; }
.ab-eyebrow { display: flex; align-items: center; gap: 12px; margin: 0 0 22px; font-size: 12px; letter-spacing: .35em; color: #b8aa9a; }
.ab-eyebrow::before { content: ""; width: 40px; height: 1px; background: #c9a37a; }
.ab-statement { margin: 0; font-family: ui-serif, Georgia, "Times New Roman", serif; font-style: italic; font-weight: 500;
  font-size: clamp(2rem, 5.4vw, 3.8rem); line-height: 1.15; letter-spacing: -.01em; }
.ab-statement em { font-style: italic; background: linear-gradient(100deg, #fbebd2, #c9a37a 60%, #8b6a47);
  -webkit-background-clip: text; background-clip: text; color: transparent; }
.ab-lead { max-width: 60ch; margin: 24px 0 0; color: #b8aa9a; }

.ab-facts { border: 1px solid #c9a37a33; border-radius: 18px; padding: 8px 22px; background: linear-gradient(160deg, #ffffff0f, #ffffff03); }
.ab-facts div { display: grid; grid-template-columns: 78px 1fr; gap: 10px; padding: 14px 0; border-bottom: 1px solid #c9a37a22; }
.ab-facts div:last-child { border-bottom: 0; }
.ab-facts dt { color: #8f7f6d; font-size: 13px; }
.ab-facts dd { margin: 0; font-weight: 600; }
.ab-dot { display: inline-block; width: 8px; height: 8px; margin-right: 8px; border-radius: 50%; background: #e9b872; animation: ab-ping 1.8s infinite; }
@keyframes ab-ping { 0% { box-shadow: 0 0 0 0 #e9b87299; } 100% { box-shadow: 0 0 0 10px #e9b87200; } }

.ab-head { display: flex; align-items: center; gap: 16px; margin: 56px 0 24px; }
.ab-head span { color: #c9a37a; font-size: 13px; letter-spacing: .3em; }
.ab-head h2 { margin: 0; font-size: clamp(1.4rem, 3.4vw, 2rem); }
.ab-head i { flex: 1; height: 1px; background: linear-gradient(90deg, #c9a37a66, transparent); }

.ab-focus { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.ab-card { position: relative; border: 1px solid #c9a37a33; border-radius: 16px; padding: 24px; background: #ffffff08;
  transition: transform .3s ease, border-color .3s ease, background .3s ease; }
.ab-card:hover { transform: translateY(-6px); border-color: #c9a37a; background: #c9a37a12; }
.ab-num { font-family: ui-serif, Georgia, serif; font-style: italic; font-size: 2.6rem; line-height: 1; color: transparent;
  -webkit-text-stroke: 1px #c9a37a; }
.ab-card h3 { margin: 14px 0 8px; font-size: 1.15rem; }
.ab-card p { margin: 0 0 16px; color: #b8aa9a; font-size: 15px; }
.ab-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.ab-tags b { font-size: 12.5px; font-weight: 600; padding: 3px 12px; border-radius: 999px; background: #c9a37a22; color: #c9a37a; }

.ab-tl { position: relative; margin: 0; padding: 0 0 0 30px; list-style: none; }
.ab-tl::before { content: ""; position: absolute; left: 6px; top: 8px; bottom: 8px; width: 1px;
  background: linear-gradient(180deg, #c9a37a, #c9a37a22); }
.ab-tl li { position: relative; display: grid; grid-template-columns: 130px 1fr; gap: 6px 24px; padding: 0 0 28px; }
.ab-tl li::before { content: ""; position: absolute; left: -30px; top: 7px; width: 13px; height: 13px; border-radius: 50%;
  background: #14100c; border: 2px solid #c9a37a; box-shadow: 0 0 12px #c9a37a77; }
.ab-tl li.next::before { background: #c9a37a; }
.ab-year { color: #c9a37a; font-weight: 700; padding-top: 2px; }
.ab-tl h4 { margin: 0 0 4px; font-size: 1.05rem; }
.ab-tl p { margin: 0; color: #b8aa9a; }

.ab-two { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.ab-box { border: 1px solid #c9a37a33; border-radius: 16px; padding: 24px; background: #ffffff08; }
.ab-box h3 { margin: 0 0 16px; font-size: 1.05rem; color: #c9a37a; }

.ab-cta { margin-top: 56px; padding: 36px; border-radius: 20px; text-align: center; border: 1px solid #c9a37a44;
  background: radial-gradient(ellipse at 50% 0%, #c9a37a2a, transparent 70%), #ffffff06; }
.ab-cta h3 { margin: 0 0 8px; font-family: ui-serif, Georgia, serif; font-style: italic; font-weight: 500; font-size: clamp(1.6rem, 4vw, 2.4rem); }
.ab-cta p { margin: 0 0 20px; color: #b8aa9a; }
.ab-btns { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; }

@media (max-width: 860px) {
  .ab-hero { grid-template-columns: 1fr; }
  .ab-focus, .ab-two { grid-template-columns: 1fr; }
  .ab-tl li { grid-template-columns: 1fr; }
}
`;

export default function About() {
  return (
    <section className="ab">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="ab-hero">
        <div className="ab-a" style={{ "--d": 0 }}>
          <p className="ab-eyebrow">TENTANG SAYA</p>
          <h1 className="ab-statement">
            Saya merancang sistem yang rapi, dari diagram sampai{" "}
            <em>database</em>.
          </h1>
          <p className="ab-lead">
            Saya mahasiswa D-IV Manajemen Informatika di Politeknik Negeri
            Sriwijaya. Saya terbiasa bekerja sendiri maupun dalam tim, dan lewat
            kerja praktik di PT Pupuk Sriwidjaja Palembang saya ingin menerapkan
            ilmu kuliah langsung di lingkungan industri.
          </p>
        </div>

        <dl className="ab-facts ab-a" style={{ "--d": 0.2 }}>
          <div>
            <dt>Nama</dt>
            <dd>Muhammad Abror Rifada</dd>
          </div>
          <div>
            <dt>Studi</dt>
            <dd>D-IV Manajemen Informatika</dd>
          </div>
          <div>
            <dt>Kampus</dt>
            <dd>Politeknik Negeri Sriwijaya</dd>
          </div>
          <div>
            <dt>Lokasi</dt>
            <dd>Palembang, Sumatera Selatan</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>
              <span className="ab-dot" />
              Terbuka untuk kerja praktik
            </dd>
          </div>
        </dl>
      </div>

      <div className="ab-head ab-a" style={{ "--d": 0.3 }}>
        <span>01</span>
        <h2>Bidang fokus</h2>
        <i />
      </div>
      <div className="ab-focus">
        {FOCUS.map((f, i) => (
          <article
            key={f.n}
            className="ab-card ab-a"
            style={{ "--d": 0.35 + i * 0.1 }}
          >
            <div className="ab-num">{f.n}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
            <div className="ab-tags">
              {f.tags.map((t) => (
                <b key={t}>{t}</b>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="ab-head ab-a" style={{ "--d": 0.4 }}>
        <span>02</span>
        <h2>Perjalanan</h2>
        <i />
      </div>
      <ol className="ab-tl">
        {JOURNEY.map((j, i) => (
          <li
            key={j.year}
            className={(j.next ? "next " : "") + "ab-a"}
            style={{ "--d": 0.45 + i * 0.08 }}
          >
            <span className="ab-year">{j.year}</span>
            <div>
              <h4>{j.title}</h4>
              <p>{j.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="ab-head ab-a" style={{ "--d": 0.5 }}>
        <span>03</span>
        <h2>Alat dan cara kerja</h2>
        <i />
      </div>
      <div className="ab-two">
        <div className="ab-box ab-a" style={{ "--d": 0.55 }}>
          <h3>Tools</h3>
          <div className="ab-tags">
            {TOOLS.map((t) => (
              <b key={t}>{t}</b>
            ))}
          </div>
        </div>
        <div className="ab-box ab-a" style={{ "--d": 0.65 }}>
          <h3>Soft skill</h3>
          <div className="ab-tags">
            {SOFT.map((t) => (
              <b key={t}>{t}</b>
            ))}
          </div>
        </div>
      </div>

      <div className="ab-cta ab-a" style={{ "--d": 0.7 }}>
        <h3>Tertarik berkolaborasi?</h3>
        <p>Saya terbuka untuk kerja praktik, magang, dan proyek bersama.</p>
        <div className="ab-btns">
          <TLink href="/contact" className="btn primary">
            Hubungi Saya
          </TLink>
          <a
            href="/cv.pdf"
            download="CV-Muhammad-Abror-Rifada.pdf"
            className="btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
