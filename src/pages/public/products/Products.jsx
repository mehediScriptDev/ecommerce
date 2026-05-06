import { useState } from "react";
import Container from "../../../layout/Container";
import ProductCard from "./components/ProductCard";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import EmptyState from "./components/EmptyState";
import { PRODUCTS } from "./constants";

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Products() {
  const [condition, setCondition] = useState("All");
  const [series, setSeries] = useState("All");
  const [storage, setStorage] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [priceRange, setPriceRange] = useState(2000);
  const [sortBy, setSortBy] = useState("Featured");
  const [page, setPage] = useState(1);

  const filtered = PRODUCTS.filter((p) => {
    if (condition !== "All" && p.condition !== condition) return false;
    if (series !== "All" && p.series !== series) return false;
    if (storage && p.storageOpt !== storage) return false;
    if (p.price > priceRange) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <Container>
        <div className="py-10">
          {/* ── Header ── */}
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h1 className="title-custom ">
                Shop All Phones
              </h1>
              <p className="subtitle-custom mt-1">
                Explore our full collection of new and certified pre-owned
                devices.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-[#64748B]">
                Showing{" "}
                <strong className="text-gray-700">{filtered.length}</strong> of{" "}
                <strong className="text-gray-700">142</strong> products
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                {[
                  "Featured",
                  "Price: Low to High",
                  "Price: High to Low",
                  "Newest",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-8">
            {/* ── Filter ── */}
            <Filter
              condition={condition}
              setCondition={setCondition}
              series={series}
              setSeries={setSeries}
              storage={storage}
              setStorage={setStorage}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              activeColor={activeColor}
              setActiveColor={setActiveColor}
            />

            {/* ── Product Grid ── */}
            <div className="flex-1">
              {filtered.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}

              {/* ── Pagination ── */}
              {filtered.length > 0 && (
                <Pagination
                  currentPage={page}
                  totalPages={8}
                  onPageChange={setPage}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
