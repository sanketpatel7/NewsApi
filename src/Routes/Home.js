import React from "react";
import Navbar from "../Component/Navbar";
import News from "../Component/News";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <News pagesize={12} />
      <Footer />
    </>
  );
};

export default Home;
