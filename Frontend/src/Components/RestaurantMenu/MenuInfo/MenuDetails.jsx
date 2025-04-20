import React from "react";

function MenuDetails({info}) {
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
  } = info;

  return (
    <section>
      <div>
        <h2 className="text-2xl font-extrabold my-8 text-slate-800">{name}</h2>

        <div className="">
          <div className="flex flex-col gap-2 p-5 bg-gradient-to-b from-white to-slate-200 rounded-lg">
            <h3 className="flex gap-4 font-bold">
              <span>
                {avgRating} ({totalRatingsString})
              </span>
              <span>{costForTwoMessage}</span>
            </h3>

            <a href="#" className="text-sm text-orange-500 font-bold underline">
              {cuisines.join(", ")}
            </a>

            <h3>Outlet &nbsp; {locality}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuDetails;
