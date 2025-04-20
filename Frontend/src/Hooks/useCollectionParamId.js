import { useParams } from "react-router-dom";

export const useCollectionParamId = () => {
  let param = useParams();
  if (
    Number(param.id[param.id.length - 1]) ||
    Number(param.id[param.id.length - 1]) == 0
  ) {
    // TO seprate id and title if param.id only have id and title
    let resId = "";
    let resTitle = "";
    for (let chr of param.id) {
      if (Number(chr) || chr == 0) resId += chr;
      else resTitle += chr;
    }
    // console.log(resId);
    // console.log(resTitle.toLowerCase());
    resTitle = resTitle.toLowerCase().trim();
    resId = resId.trim();
    return { resId, resTitle }; // return id and title
  } else {
    // To filter only resId when param.id have url like string
    let resId = param.id.split("").slice(0, 5).join("");

    // To filter only resTitle when param.id have url like string
    let resTitle = "";
    for (let i = param.id.length - 1; i >= 0; i--) {
      if (param.id[i] == "=") break;
      else resTitle += param.id[i];
    }
    resTitle = resTitle.split("").reverse().join("").toLowerCase().trim();
    resId = resId.trim();
    return { resId, resTitle }; // return id and title
  }
};
