import {
  FiArrowUpRight,
  FiCheckCircle,
  FiPackage,
  FiShare,
  FiTag,
} from "react-icons/fi";

const advantages = [
  {
    icon: FiPackage,
    title: "Pilihan Fleksibel",
    description:
      "Membantu memenuhi beragam kebutuhan barang sesuai permintaan pelanggan.",
  },
  {
    icon: FiTag,
    title: "Harga Kompetitif",
    description:
      "Mengutamakan penawaran yang sesuai dengan kebutuhan dan anggaran.",
  },
  {
    icon: FiShare,
    title: "Pelayanan Bersahabat",
    description:
      "Komunikasi yang responsif untuk mendukung kebutuhan pelanggan.",
  },
];

export default function AboutSection() {
  const WHATSAPP_NUMBER = "6287897477529";
  const whatsappMessage =
    "Halo Syakila Store, saya ingin mengetahui informasi layanan Anda.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  return (
    <section
      id="tentang-kami"
      className="scroll-mt-24 overflow-hidden bg-surface-muted py-4 sm:py-16 lg:py-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:gap-10 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -left-3 -top-3 h-20 w-20 rounded-2xl bg-secondary/50 sm:-left-4 sm:-top-4 sm:h-24 sm:w-24" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-2.5 shadow-sm sm:rounded-3xl sm:p-3">
            <img
              src={`${process.env.PUBLIC_URL}/images/about/syakila-store-supplies.png`}
              alt="Beragam barang untuk kebutuhan bisnis dan operasional"
              loading="lazy"
              className="aspect-[1/1] w-full rounded-xl object-cover sm:rounded-2xl"
            />
            <div className="flex items-center gap-3 p-3 sm:p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-content-brand">
                <FiCheckCircle size={21} />
              </span>
              <div>
                <p className="text-sm font-bold text-content">
                  Satu Mitra, Beragam Kebutuhan
                </p>
                <p className="mt-0.5 text-xs leading-5 text-content-secondary">
                  Fleksibel untuk kebutuhan pelanggan yang beragam.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-content-brand">
            <FiShare size={18} /> Tentang Syakila Store
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-content sm:text-4xl lg:text-5xl">
            Mitra Penyediaan Barang yang Memahami Kebutuhan Anda.
          </h2>
          <p className="mt-4 text-sm leading-7 text-content-secondary sm:mt-5 sm:text-base sm:leading-8">
            Syakila Store hadir untuk membantu koperasi, pelaku usaha, dan
            konsumen umum memperoleh berbagai kebutuhan barang melalui layanan
            yang ramah, pilihan yang fleksibel, dan harga yang kompetitif.
          </p>
          <p className="mt-3 text-sm leading-7 text-content-secondary sm:text-base">
            Kami memahami bahwa setiap pelanggan memiliki kebutuhan yang
            berbeda. Karena itu, kami berupaya memberikan pelayanan yang mudah
            diakses serta membantu pelanggan menemukan pilihan barang yang
            sesuai.
          </p>

          <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {advantages.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-3 rounded-xl border border-border bg-surface p-3.5 sm:p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-content-brand">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-content">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-content-secondary sm:text-sm">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus sm:mt-8"
          >
            Kenali Layanan Kami <FiArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
