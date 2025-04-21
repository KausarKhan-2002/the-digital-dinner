import React from "react";

const MenuShimmerUI = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="w-full h-11 bg-slate-100" />
      <div className="w-32 h-8 bg-slate-100" />
      <section id="cards" className="flex gap-10">
        <div className="card">
          <div className="w-[300px] h-[200px] bg-slate-100" />
          <div id="content" className="flex items-end justify-between">
            <div className="flex flex-col gap-3 mt-3">
              <h2 className="bg-slate-100 w-32 h-4" />
              <h2 className="bg-slate-100 w-16 h-4" />
              <h2 className="bg-slate-100 w-20 h-4" />
            </div>
            <h2 className="bg-slate-100 w-12 h-7" />
          </div>
        </div>

        <div className="card">
          <div className="w-[300px] h-[200px] bg-slate-100" />
          <div id="content" className="flex items-end justify-between">
            <div className="flex flex-col gap-3 mt-3">
              <h2 className="bg-slate-100 w-32 h-3" />
              <h2 className="bg-slate-100 w-16 h-3" />
              <h2 className="bg-slate-100 w-20 h-3" />
            </div>
            <h2 className="bg-slate-100 w-12 h-7" />
          </div>
        </div>
        <div className="card">
          <div className="w-[300px] h-[200px] bg-slate-100" />
          <div id="content" className="flex items-end justify-between">
            <div className="flex flex-col gap-3 mt-3">
              <h2 className="bg-slate-100 w-32 h-3" />
              <h2 className="bg-slate-100 w-16 h-3" />
              <h2 className="bg-slate-100 w-20 h-3" />
            </div>
            <h2 className="bg-slate-100 w-12 h-7" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default MenuShimmerUI;
