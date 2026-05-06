import React, { Suspense } from "react";
import Featured from "./sections/featured/Featured";
import Container from "../../../layout/Container";
import Highlights from "./sections/highlights/Highlights";

const Home = () => {
  return (
    <>
      
     
        <section>
          <Suspense fallback={<div>Loading...</div>}>
            <Featured />
          </Suspense>
        </section>
        <Highlights />
        
      
    </>
  );
};

export default Home;
