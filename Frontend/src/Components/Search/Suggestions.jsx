import React, { useEffect, useState } from "react";
import SuggestionCards from "./SuggestionCards";
import { SUGGESTIONS_IMG_URL } from "../../Utils/constants";
import { useSuggestions } from "../../Hooks/useSuggestions";
import SuggestionShimmerUI from "../ShimmerUI/SuggestionShimmerUI";

const Suggestions = ({ text }) => {
  const [data, setData] = useState([]);
  const [suggestionCardId, setSuggestionCardId] = useState(false);

  const suggestions = useSuggestions()

  useEffect(() => {
    // fetchSuggestionsData();
    suggestions(setData, text)
  }, []);

  if (data.length == 0) return <SuggestionShimmerUI />;

  return (
    <div className="">
      <div
        className={`flex flex-col gap-4 mt-5 ${
          suggestionCardId && "hidden"
        }`}
      >
        {data &&
          data.map((item) => (
            <div
              onClick={() => setSuggestionCardId(item.text)}
              key={item.cloudinaryId}
              className="flex items-center gap-5 hover:bg-slate-100 py-4 cursor-pointer"
            >
              <img
                className="w-16 rounded-lg"
                src={SUGGESTIONS_IMG_URL + item.cloudinaryId}
              />

              <div>
                <h2 className="text-slate-800 ">{item.text}</h2>
                <p className="text-sm text-slate-700">{item.tagToDisplay}</p>
              </div>
            </div>
          ))}
      </div>

      {suggestionCardId && <SuggestionCards cardId={suggestionCardId} />}
    </div>
  );
};

export default Suggestions;