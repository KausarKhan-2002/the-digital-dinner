import React from "react";

const ShimmerCard = () => {
  return (
    <div className="card">
      <div className="w-full h-[150px] bg-slate-100 rounded-xl" />
      <div id="content" className="flex flex-col gap-3 mt-3">
        <h3 className="bg-slate-100 w-[80%] h-3" />
        <h3 className="bg-slate-100 w-[40%] h-3" />
        <h3 className="bg-slate-100 w-[50%] h-3" />
      </div>
    </div>
  );
};

const CollectionShimmerUI = () => {
  return (
    <div className="mt-10">
      <h2 className="w-52 h-8 bg-slate-100" />
      <p className="w-40 h-7 bg-slate-100 mt-3" />

      <div className="grid grid-cols-4 gap-x-9 gap-y-11 mt-10">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default CollectionShimmerUI;
