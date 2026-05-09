import React, { Suspense } from "react";
import Featured from "./sections/featured/Featured";
import Container from "../../../layout/Container";
import Highlights from "./sections/highlights/Highlights";
import Hero from "./sections/Hero/Hero";

const Home = () => {
  return (
    <>
      
     
        <section>
          <Hero/>
          <Suspense fallback={<div>Loading...</div>}>
            <Featured />
          </Suspense>
        </section>
        <Highlights />
        
      
    </>
  );
};

export default Home;
