import React, { useState } from "react";
import { CONDITIONS, SERIES_LIST, STORAGES, COLORS_LIST } from "../constants";

// ── Sidebar Filters ───────────────────────────────────────────────────────────
function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-100 pb-4 mb-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full mb-3"
      >
        <span className="text-[14px] font-semibold tracking-widest uppercase text-[#151A2A]">
          {title}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${open ? "" : "-rotate-90"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      {open && children}
    </div>
  );
}

const RadioGroup = ({ name, options, value, onChange }) => (
  <div className="space-y-2">
    {options.map((opt) => (
      <label key={opt} className="flex items-center gap-2 cursor-pointer group">
        <input
          type="radio"
          name={name}
          checked={value === opt}
          onChange={() => onChange(opt)}
          className="products-filter-radio"
        />
        <span className={`text-[14px] leading-5 ${value === opt ? "text-custom font-medium" : "text-gray-500"}`}>
          {opt}
        </span>
      </label>
    ))}
  </div>
);

const Filter = ({
  condition,
  setCondition,
  series,
  setSeries,
  storage,
  setStorage,
  priceRange,
  setPriceRange,
  activeColor,
  setActiveColor,
  onApply,
}) => {
  const apply = () => {
    if (onApply) onApply();
  };

  return (
    <div>
      <aside className="w-full lg:w-52 lg:shrink-0">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg lg:text-xl font-semibold text-[#151A2A]">
            Filters
          </h2>
          <button
            onClick={() => {
              setCondition("All");
              setSeries("All");
              setStorage(null);
              setActiveColor(null);
              setPriceRange(2000);
              apply();
            }}
            className="text-xs text-custom hover:underline"
          >
            Clear All
          </button>
        </div>

        {/* Condition */}
        <FilterSection title="Condition">
          <RadioGroup
            name="condition"
            options={CONDITIONS}
            value={condition}
            onChange={(value) => {
              setCondition(value);
              apply();
            }}
          />
        </FilterSection>

        {/* Series */}
        <FilterSection title="Series">
          <RadioGroup
            name="series"
            options={SERIES_LIST}
            value={series}
            onChange={(value) => {
              setSeries(value);
              apply();
            }}
          />
        </FilterSection>

        {/* Price Range */}
        <FilterSection title="Price Range">
          <input
            type="range"
            min={0}
            max={2000}
            step={50}
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            onMouseUp={apply}
            onTouchEnd={apply}
            className="products-price-range w-full"
          />
          <div className="flex justify-between mt-2 gap-2">
            {[
              { label: "Min", val: "$0" },
              { label: "Max", val: `$${priceRange}` },
            ].map(({ label, val }) => (
              <div key={label} className="flex-1">
                <p className="text-[14px] text-gray-400 mb-1">{label}</p>
                <div className="border border-gray-200 rounded-lg px-2 py-1 text-[14px] text-gray-700 bg-white">
                  {val}
                </div>
              </div>
            ))}
          </div>
        </FilterSection>

        {/* Storage */}
        <FilterSection title="Storage">
          <div className="grid grid-cols-2 gap-2">
            {STORAGES.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setStorage(storage === s ? null : s);
                  apply();
                }}
                className={`py-1.5 rounded-lg text-[14px] leading-5 font-medium border transition-all
                      ${
                        storage === s
                          ? "bg-custom border-custom text-white"
                          : "bg-white border-gray-200 text-gray-600 hover:border-custom"
                      }`}
              >
                {s}
              </button>
            ))}
          </div>
        </FilterSection>

        {/* Color */}
        <FilterSection title="Color">
          <div className="flex flex-wrap gap-2">
            {COLORS_LIST.map((c) => (
              <button
                key={c.hex}
                title={c.label}
                onClick={() => {
                  setActiveColor(activeColor === c.hex ? null : c.hex);
                  apply();
                }}
                className={`w-6 h-6 rounded-full border-2 transition-all
                      ${activeColor === c.hex ? "border-custom scale-110" : "border-transparent hover:scale-105"}`}
                style={{
                  backgroundColor: c.hex,
                  boxShadow:
                    c.hex === "#f0ede8" ? "inset 0 0 0 1px #e5e7eb" : "none",
                }}
              />
            ))}
          </div>
        </FilterSection>
      </aside>
    </div>
  );
};

export default Filter;
