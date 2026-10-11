export default function Card({ title, year, points, tags }) {
  return (
    <article className="card">
      <div className="row"><h3>{title}</h3><span>{year}</span></div>
      <ul>{points.map((p) => <li key={p}>{p}</li>)}</ul>
      {tags && <div className="tags">{tags.map((t) => <b key={t}>{t}</b>)}</div>}
    </article>
  );
}
