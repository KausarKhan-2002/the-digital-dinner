import React from 'react';
import { ImSpinner9 } from "react-icons/im";

const Spinner = ({ icon: Icon = ImSpinner9, activity = "animate-spin", size = "lg", text="text-gray-200" }) => {
  return (
    <div className={`${text} ${activity} ${size ? size : "text-lg"}`}>
      <Icon />
    </div>
  );
};

export default Spinner;
