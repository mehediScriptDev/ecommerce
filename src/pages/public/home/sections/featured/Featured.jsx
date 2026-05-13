import React, { use } from "react";
import Container from "../../../../../layout/Container";
import { Link } from "react-router";
import Card from "./components/Card";
import { usePageTransition } from "../../../../../components/transitions";

const allfeatured = fetch("/data/featured.json").then((res) => res.json());
const Featured = () => {
  const data = use(allfeatured);
  const { transitionTo } = usePageTransition();
  console.log(data);

  return (
    <Container>
      <div className="py-10 w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
          <div>
            <h1 className="title-custom">Featured Deals</h1>
            <p className="subtitle-custom xl:text-lg mt-1">
              Our handpicked selection for this week.
            </p>
          </div>
          <div>
            
            <button
              onClick={() => transitionTo("/products")}
              className="text-sm hover:scale-95 cursor-pointer text-custom flex items-center justify-center"
            >
              View All Products →
            </button>
          </div>
        </div>

        {/* cards */}
        <div className="mt-10 w-full grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Featured;
