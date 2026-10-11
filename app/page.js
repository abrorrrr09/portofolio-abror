import TLink from "@/components/TLink";
import CountUp from "@/components/CountUp";
import "./home.css";

const roles = [
  "Web Developer",
  "Database Enthusiast",
  "System Analyst",
  "Mahasiswa Polsri",
];

const profil = [
  { k: "Studi", v: "D-IV Manajemen Informatika" },
  { k: "Kampus", v: "Politeknik Negeri Sriwijaya" },
  { k: "Fokus", v: "Database & Analisis Sistem" },
  { k: "Stack", v: "Oracle · MySQL · PHP · Java" },
  { k: "Lokasi", v: "Palembang, Sumatera Selatan" },
];

export default function Home() {
  return (
    <section className="hm-sec">
      <div className="hm-wrap">
        {/* Kiri */}
        <div className="hm-main">
          <p className="hm-eyebrow">
            <span className="hm-tick" aria-hidden="true" />
            <span className="hm-eyebrow-txt">PORTOFOLIO 2026</span>
          </p>

          <h1 className="hm-name" aria-label="Muhammad Abror Rifada">
            <span className="hm-mask hm-first" aria-hidden="true">
              <span className="hm-ln" style={{ "--i": 0 }}>
                MUHAMMAD
              </span>
            </span>
            <span className="hm-mask" aria-hidden="true">
              <span className="hm-ln" style={{ "--i": 1 }}>
                ABROR
              </span>
            </span>
            <span className="hm-mask" aria-hidden="true">
              <span className="hm-ln" style={{ "--i": 2 }}>
                RIFADA
              </span>
            </span>
          </h1>

          <p className="hm-role hm-rv" style={{ "--d": 0.8 }}>
            <span>Saya seorang</span>
            <span className="hm-sr">{roles.join(", ")}</span>
            <span className="hm-roll" aria-hidden="true">
              <span className="hm-roll-list">
                {[...roles, roles[0]].map((r, i) => (
                  <span key={i} className="hm-roll-item">
                    {r}
                  </span>
                ))}
              </span>
            </span>
          </p>

          <p className="hm-lead hm-rv" style={{ "--d": 0.95 }}>
            Mahasiswa Manajemen Informatika yang fokus pada pengembangan sistem,
            basis data Oracle dan MySQL, serta analisis dan perancangan sistem.
          </p>

          <div className="hm-actions hm-rv" style={{ "--d": 1.1 }}>
            <TLink href="/projects" className="hm-btn hm-btn-main">
              Lihat Proyek
            </TLink>
            <a
              href="/cv.pdf"
              download="CV-Muhammad-Abror-Rifada.pdf"
              className="hm-btn hm-btn-line"
            >
              Download CV
            </a>
            <TLink href="/contact" className="hm-btn hm-btn-line">
              Hubungi Saya
            </TLink>
          </div>
        </div>

        {/* Kanan: profil */}
        <aside className="hm-profil hm-rv" style={{ "--d": 0.6 }}>
          <div className="hm-ph">
            <span>PROFIL</span>
            <span className="hm-live">
              <span className="hm-dot" aria-hidden="true" />
              Terbuka untuk kerja praktik
            </span>
          </div>
          <dl className="hm-rows">
            {profil.map((p) => (
              <div key={p.k}>
                <dt>{p.k}</dt>
                <dd>{p.v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      {/* Angka */}
      <div className="hm-strip hm-rv" style={{ "--d": 1.3 }}>
        <div>
          <b>
            <CountUp to={3.74} decimals={2} /> <small>/ 4.00</small>
          </b>
          <span>IPK</span>
        </div>
        <div>
          <b>
            <CountUp to={2} />
          </b>
          <span>Proyek utama</span>
        </div>
        <div>
          <b>
            Juara <CountUp to={2} />
          </b>
          <span>Futsal tingkat kota</span>
        </div>
      </div>
    </section>
  );
}
