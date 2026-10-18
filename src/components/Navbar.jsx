import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const WHATSAPP_NUMBER = "6287897477529";

const whatsappMessage =
  "Halo Syakila Store, saya ingin meminta informasi dan penawaran harga produk.";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk", href: "#produk" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsMenuOpen(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <a
          href="#beranda"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Syakila Store - Beranda"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-extrabold text-primary-foreground">
            <img
              src={`${process.env.PUBLIC_URL}/images/syakila_store_logo.png`}
              alt="Logo Syakila Store"
              className="block dark:hidden"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/syakila_store_logo_white.png`}
              alt="Logo Syakila Store"
              className="hidden dark:block"
            />
          </span>

          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-tight text-content">
              Syakila Store
            </span>
            <span className="mt-0.5 text-[10px] font-medium tracking-wide text-content-secondary">
              Satu Mitra, Beragam Kebutuhan
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-content-secondary transition-colors hover:text-content"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-content-secondary transition-colors hover:bg-surface-muted hover:text-content focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            aria-label={
              theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"
            }
            title={theme === "dark" ? "Mode terang" : "Mode gelap"}
          >
            {theme === "dark" ? <FiSun size={19} /> : <FiMoon size={19} />}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            Minta Penawaran <FiArrowUpRight size={17} />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-content-secondary transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            aria-label={
              theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"
            }
          >
            {theme === "dark" ? <FiSun size={19} /> : <FiMoon size={19} />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-content transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            aria-label={
              isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background px-4 pb-5 pt-3 sm:px-6 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-content-secondary transition-colors hover:bg-surface-muted hover:text-content"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Minta Penawaran <FiArrowUpRight size={17} />
          </a>
        </div>
      )}
    </header>
  );
}
