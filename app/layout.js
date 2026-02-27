import { Belleza } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const belleza = Belleza({
  variable: "--font-belleza",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Origen Restaurant Consulting",
  description: "Expert food safety and compliance consulting for restaurants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={belleza.variable}>
      <body className="antialiased">
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
