import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 {profile.name}. Semua hak dilindungi.</p>
      <div>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={"mailto:" + profile.email}>Email</a>
      </div>
    </footer>
  );
}
