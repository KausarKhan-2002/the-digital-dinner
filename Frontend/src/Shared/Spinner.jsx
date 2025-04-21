import React from 'react';
import { ImSpinner9 } from "react-icons/im";

const Spinner = ({ icon: Icon = ImSpinner9, activity = "animate-spin", size = "lg" }) => {
  return (
    <div className={`text-gray-200 ${activity} ${size ? size : "text-lg"}`}>
      <Icon />
    </div>
  );
};

export default Spinner;
