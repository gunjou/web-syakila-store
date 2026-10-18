import { FiArrowUpRight, FiMessageCircle, FiPackage } from "react-icons/fi";

const WHATSAPP_NUMBER = "6287897477529";

const whatsappMessage =
  "Halo Syakila Store, saya ingin mengetahui informasi mengenai produk dan layanan yang tersedia.";

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section id="beranda" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 pb-20 sm:px-6 sm:py-16 md:gap-8 md:py-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-10 lg:pb-20">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-content-secondary sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Mitra Penyediaan Barang
          </div>

          <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-content sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            Satu Mitra untuk{" "}
            <span className="text-content-brand">Beragam Kebutuhan</span> Bisnis
            Anda.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-content-secondary sm:mt-6 sm:text-lg sm:leading-8">
            Kami membantu koperasi, pelaku usaha, dan pelanggan umum memenuhi
            kebutuhan barang dengan pilihan fleksibel, harga kompetitif, dan
            pelayanan yang ramah.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a
              href="#produk"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Lihat Produk <FiArrowUpRight size={18} />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-content transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              <FiMessageCircle size={18} /> Hubungi Kami
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5 sm:mt-10 sm:pt-6">
            <div className="flex items-center gap-2 text-sm text-content-secondary">
              <FiPackage className="shrink-0 text-content-brand" size={19} />
              Beragam kebutuhan barang
            </div>

            <div className="flex items-center gap-2 text-sm text-content-secondary">
              <span className="h-2 w-2 shrink-0 rounded-full bg-secondary" />
              Harga kompetitif
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -right-3 top-3 h-24 w-24 rounded-full bg-secondary/40 blur-2xl sm:-right-5 sm:h-32 sm:w-32" />
          <div className="absolute -bottom-4 left-0 h-28 w-28 rounded-full bg-primary/20 blur-2xl sm:-bottom-6 sm:h-40 sm:w-40" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface-muted p-3 sm:rounded-[2rem] sm:p-4">
            <div className="relative aspect-[1.5/1] overflow-hidden rounded-2xl bg-surface sm:aspect-[1.2/0.7]">
              <img
                src={`${process.env.PUBLIC_URL}/images/hero/hero-main.png`}
                alt="Pilihan produk penyediaan barang Syakila Store"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />

              <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/30 bg-surface/20 p-3 shadow-lg backdrop-blur-sm sm:inset-x-4 sm:bottom-4 sm:p-4">
                <p className="text-xs font-medium text-content-secondary sm:text-sm">
                  Syakila Store
                </p>
                <p className="mt-1 text-base font-bold text-content sm:text-lg">
                  Satu Mitra, Beragam Kebutuhan.
                </p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-4">
              <div className="overflow-hidden rounded-xl border border-border bg-surface">
                <img
                  src={`${process.env.PUBLIC_URL}/images/hero/hero-masker.png`}
                  alt="Produk masker"
                  className="aspect-[1.5/1] w-full object-cover"
                  loading="lazy"
                />
                <p className="px-3 py-2.5 text-xs font-semibold text-content sm:text-sm">
                  Perlengkapan Kesehatan
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-border bg-surface">
                <img
                  src={`${process.env.PUBLIC_URL}/images/hero/hero-gloves.jpg`}
                  alt="Produk sarung tangan nitril"
                  className="aspect-[1.5/1] w-full object-cover"
                  loading="lazy"
                />
                <p className="px-3 py-2.5 text-xs font-semibold text-content sm:text-sm">
                  Kebutuhan Operasional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
