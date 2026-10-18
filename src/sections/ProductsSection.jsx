import { useMemo, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiPackage, FiSearch } from "react-icons/fi";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = [
  { label: "Semua", value: "semua" },
  { label: "Kesehatan", value: "kesehatan" },
  { label: "Pengemasan", value: "pengemasan" },
  { label: "Operasional", value: "operasional" },
];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");
  const carouselRef = useRef(null);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "semua" || product.category === activeCategory;
      const matchesSearch =
        !query ||
        `${product.name} ${product.categoryLabel} ${product.description}`
          .toLowerCase()
          .includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: direction * carouselRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="produk"
      className="scroll-mt-24 bg-background py-2 sm:py-4 lg:py-2"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-content-brand sm:text-sm">
              <FiPackage size={17} /> Katalog Produk
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-content sm:text-3xl lg:text-4xl">
              Produk Kami
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-content-secondary">
              Beragam pilihan barang dengan harga kompetitif untuk kebutuhan
              Anda.
            </p>
          </div>
          <a
            href="#kontak"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-content-brand transition-colors hover:text-content sm:inline-flex"
          >
            Minta Penawaran <FiArrowRight size={16} />
          </a>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="flex gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label="Filter kategori produk"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => {
                  setActiveCategory(category.value);
                  carouselRef.current?.scrollTo({
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                aria-pressed={activeCategory === category.value}
                className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors sm:text-sm ${activeCategory === category.value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-surface text-content-secondary hover:text-content"}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <label className="flex min-h-10 w-full items-center gap-2 rounded-xl border border-border bg-surface px-3 sm:max-w-xs">
            <FiSearch className="shrink-0 text-content-muted" size={17} />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                carouselRef.current?.scrollTo({ left: 0, behavior: "smooth" });
              }}
              placeholder="Cari produk..."
              aria-label="Cari produk"
              className="w-full bg-transparent py-2 text-sm text-content outline-none placeholder:text-content-muted"
            />
          </label>
        </div>

        <div className="mt-5 sm:mt-6">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4"
            aria-label="Daftar produk"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-[68%] shrink-0 snap-start sm:w-[42%] md:w-[30%] lg:w-[24%]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="rounded-xl border border-dashed border-border px-4 py-8 text-center">
              <p className="text-sm font-semibold text-content">
                Produk tidak ditemukan
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("semua");
                }}
                className="mt-2 text-sm font-semibold text-content-brand"
              >
                Reset filter
              </button>
            </div>
          )}
        </div>

        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="text-xs text-content-secondary">
            Geser untuk melihat produk lainnya
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              disabled={filteredProducts.length === 0}
              aria-label="Produk sebelumnya"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-content transition-colors hover:bg-surface-muted disabled:opacity-40"
            >
              <FiArrowLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              disabled={filteredProducts.length === 0}
              aria-label="Produk berikutnya"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-content transition-colors hover:bg-surface-muted disabled:opacity-40"
            >
              <FiArrowRight size={17} />
            </button>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4 sm:hidden">
          <p className="text-xs leading-5 text-content-secondary">
            Butuh produk lain yang belum tercantum?
          </p>
          <a
            href="#kontak"
            className="shrink-0 text-xs font-bold text-content-brand"
          >
            Hubungi kami ↗
          </a>
        </div>
      </div>
    </section>
  );
}
