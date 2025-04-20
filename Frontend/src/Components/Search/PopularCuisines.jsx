import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CUISINES_IMG_URL } from "../../Utils/constants";
import { useCuisines } from "../../Hooks/useCuisines";

const PopularCuisines = ({ setText }) => {
  const [data, setData] = useState([]);
  console.log("Popular");
  

  const injectId = (entityId) => {
    let arr = entityId.split("").slice(23);
    let title = "";

    for (let chr of arr) {
      if (chr != "%" && chr != "2" && chr != "0") title += chr;
      else if (chr == "0") title += " ";
    }

    setText(title);
  };

  const popularCuisines = useCuisines()

  useEffect(() => {
    popularCuisines(setData)
  }, []);

  if (data.length == 0) return "Loading";

//   console.log(data.gridElements.infoWithStyle.info);

  return (
    <div className="px-4 mt-5">
      <h2 className="text-lg text-slate-700 font-extrabold">
        {data.header.title}
      </h2>

      {/* Cuisines */}
      <div
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE and Edge
        }}
        className="cuisines flex gap-1 overflow-auto"
      >
        {data.gridElements.infoWithStyle.info.map((item) => (
          <Link key={item.id} className="flex-shrink-0 w-20">
            <img
              onClick={() => injectId(item.entityId)}
              src={CUISINES_IMG_URL + item.imageId}
              className="w-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCuisines;
