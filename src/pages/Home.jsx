import React from "react";
import MainSlider from "../components/home/MainSlider";

const Home = () => {
  return (
    <div
      className="min-h-screen "
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <div className=" mx-auto">
        <MainSlider />
      </div>
    </div>
  );
};

export default Home;
