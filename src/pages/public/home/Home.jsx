import React, { Suspense } from "react";
import Featured from "./sections/featured/Featured";
import Container from "../../../layout/Container";
import Highlights from "./sections/highlights/Highlights";
import Hero from "./sections/Hero/Hero";
import Promotion from "../promotion/Promotion";
import Cta from "./sections/Cta/Cta";

const Home = () => {
  return (
    <>
      
     
        <section>
          <Hero/>
          <Suspense fallback={<div>Loading...</div>}>
            <Featured />
          </Suspense>
        </section>
        <Promotion/>
        <Highlights />
        <Cta/>
        
      
    </>
  );
};

export default Home;
