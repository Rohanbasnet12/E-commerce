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
          <div
            className="box-wrapper w-full h-full flex items-center justify-center flex-col gap-4 p-4"
            style={{ background: "rgba(0, 0, 0, .4)" }}
          >
            <p className="description text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt, pariatur.
            </p>
            <button className="border p-3 text-black bg-slate-200 font-medium">
              Discover More
            </button>
          </div>
        </div>
        <div className="box">
          <div
            className="box-wrapper w-full h-full flex items-center justify-center flex-col gap-4 p-4"
            style={{ background: "rgba(0, 0, 0, .4)" }}
          >
            <p className="description text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt, pariatur.
            </p>
            <button className="border p-3 text-black bg-slate-200 font-medium">
              Discover More
            </button>
          </div>
        </div>
        <div className="box">
          <div
            className="box-wrapper w-full h-full flex items-center justify-center flex-col gap-4 p-4"
            style={{ background: "rgba(0, 0, 0, .4)" }}
          >
            <p className="description text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt, pariatur.
            </p>
            <button className="border p-3 text-black bg-slate-200 font-medium">
              Discover More
            </button>
          </div>
        </div>
        <div className="box">
          <div
            className="box-wrapper w-full h-full flex items-center justify-center flex-col gap-4 p-4"
            style={{ background: "rgba(0, 0, 0, .4)" }}
          >
            <p className="description text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt, pariatur.
            </p>
            <button className="border p-3 text-black bg-slate-200 font-medium">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
