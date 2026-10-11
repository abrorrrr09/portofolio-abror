import "./globals.css";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Muhammad Abror Rifada - Portfolio",
  description:
    "Portofolio Muhammad Abror Rifada, mahasiswa D-IV Manajemen Informatika Polsri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <PageTransition>
          <Loader />
          <Header />
          <main>{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
