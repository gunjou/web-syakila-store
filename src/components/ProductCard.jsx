import { FiArrowUpRight } from "react-icons/fi";

const WHATSAPP_NUMBER = "6287897477529";

export default function ProductCard({ product }) {
  const whatsappMessage = `Halo Syakila Store, saya ingin menanyakan informasi dan harga untuk produk ${product.name}.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-brand">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Tanyakan produk ${product.name} melalui WhatsApp`}
        className="relative block overflow-hidden bg-surface-muted"
      >
        <img
          src={`${process.env.PUBLIC_URL}${product.image}`}
          alt={product.name}
          loading="lazy"
          className="aspect-[1/1] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <span className="text-[10px] font-semibold text-content-brand sm:text-xs">
          {product.categoryLabel}
        </span>

        <h3 className="mt-1.5 line-clamp-2 text-sm font-bold leading-5 text-content sm:text-base">
          {product.name}
        </h3>

        <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-5 text-content-secondary sm:text-sm">
          {product.description}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Tanya harga ${product.name} melalui WhatsApp`}
          className="mt-3 inline-flex min-h-9 items-center justify-center gap-1.5 rounded-lg bg-primary px-2.5 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:text-sm"
        >
          Tanya Harga <FiArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}
