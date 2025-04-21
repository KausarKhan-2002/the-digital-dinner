import React from "react";

const Card = () => {
  return (
    <section className="card">
      <div className="bg-slate-100 w-[80px] h-[80px] rounded-full" />
      <div className="bg-slate-100 w-20 h-3 mt-2" />
    </section>
  );
};

const CuisinesShimmerUI = () => {
  return (
    <div className="mt-7">
      <h2 className="bg-slate-100 w-32 h-3 my-3" />
      <div className="flex gap-5 justify-center items-center overflow-hidden">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CuisinesShimmerUI;
