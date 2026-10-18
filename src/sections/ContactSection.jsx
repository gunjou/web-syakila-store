import {
  FiArrowUpRight,
  FiMessageCircle,
  FiPackage,
  FiTag,
} from "react-icons/fi";

const WHATSAPP_NUMBER = "6287897477529";

const whatsappMessage = encodeURIComponent(
  "Halo Syakila Store, saya ingin bertanya mengenai produk dan penawaran harga. Mohon informasinya, terima kasih.",
);

const contactBenefits = [
  {
    icon: FiPackage,
    title: "Tanyakan Kebutuhan",
    description: "Sampaikan jenis barang dan jumlah yang Anda butuhkan.",
  },
  {
    icon: FiTag,
    title: "Minta Penawaran Harga",
    description: "Hubungi kami untuk mendiskusikan harga dan kebutuhan Anda.",
  },
];

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section
      id="kontak"
      className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-muted p-5 sm:p-8 lg:p-12">
          <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-primary/10 sm:h-64 sm:w-64" />
          <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-secondary/40 sm:h-52 sm:w-52" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-content-brand">
                <FiMessageCircle size={18} />
                Hubungi Syakila Store
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-content sm:text-4xl lg:text-5xl">
                Punya Kebutuhan Barang? Kami Siap Membantu.
              </h2>

              <p className="mt-4 text-sm leading-7 text-content-secondary sm:text-base sm:leading-8">
                Dari kebutuhan koperasi hingga operasional usaha, diskusikan
                kebutuhan Anda bersama Syakila Store. Hubungi kami untuk
                menanyakan produk, ketersediaan barang, dan penawaran harga yang
                kompetitif.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus sm:mt-7 sm:w-auto"
              >
                <FiMessageCircle size={19} />
                Chat via WhatsApp
                <FiArrowUpRight size={17} />
              </a>

              <p className="mt-3 text-xs leading-5 text-content-muted">
                Klik tombol di atas untuk memulai percakapan dengan tim kami.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactBenefits.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl border border-border bg-surface p-4 sm:p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-content-brand">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-content sm:text-base">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-content-secondary sm:text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
