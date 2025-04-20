import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import PopularCuisines from "../Components/Search/PopularCuisines";
import Suggestions from "../Components/Search/Suggestions";

// Suggestions data
// https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=Burger%20King&trackingId=841a3d45-4b06-c77c-6894-70e93d407ba8&submitAction=ENTER&queryUniqueId=58e3502b-92af-d7ad-12f1-3f24c158fca7

const Search = () => {
  const [text, setText] = useState("");
  
  return (
    <div className="bg-white border">
      <div className="w-[60%] fixed top-[63px] left-[20%] pt-[37px] bg-white z-10">
        <div
          id="search"
          className="flex justify-between items-center border-[1.6px] border-slate-300 rounded-md px-2"
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-2 py-3 font-medium outline-none"
            type="text"
            placeholder="Search for restaurants or food"
          />
          {text.length > 0 ? (
            <IoMdClose
              onClick={() => setText("")}
              className="text-2xl text-slate-600 cursor-pointer"
            />
          ) : (
            <IoSearch className="text-xl text-slate-600" />
          )}
        </div>
      </div>

      <div className="pt-20 mx-auto px-40 mt-5">
        {/* Popular cuisines */}
        {text.length == 0 && <PopularCuisines setText={setText} />}

        {/* Suggestions */}
        {text.length > 1 && <Suggestions text={text} />}
      </div>
    </div>
  );
};

export default Search;
