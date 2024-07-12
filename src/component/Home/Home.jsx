import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div
      id="home"
      className="flex items-center w-full"
      style={{ padding: "35px 28px" }}
    >
      <div className="homeLeft-section w-1/2">
        <h1 className="text-[14vw]">Sage</h1>
        <p className="text-3xl">Shop Your Vision, Live Your Creation</p>
        <button
          id="purchase-btn"
          className="mt-24 text-l font-bold rounded-full py-2 px-4"
        >
          Purchase Now!
        </button>
      </div>
      <div className="homeRight-section w-1/2 grid grid-cols-2 gap-8">
        <div className="box">
          <img src="../images/kids.jfif" alt="" />
        </div>
        <div className="box">
          <img src="../images/kids.jfif" alt="" />
        </div>
        <div className="box">
          <img src="../images/kids.jfif" alt="" />
        </div>
        <div className="box">
          <img src="../images/kids.jfif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
