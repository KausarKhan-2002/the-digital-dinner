import React from "react";

function CartShimmerUI() {
  const shimmerItems = Array(3).fill(0);

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8 py-6 animate-pulse">
      {shimmerItems.map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-gray-200 rounded-2xl p-4 shadow-md bg-white"
        >
          {/* Image */}
          <div className="flex justify-center sm:justify-start">
            <div className="w-28 h-28 sm:w-24 sm:h-24 bg-gray-200 rounded-xl" />
          </div>

          {/* Info */}
          <div className="flex flex-col sm:flex-1 justify-center items-center sm:items-start w-full text-center sm:text-left space-y-2">
            <div className="h-5 w-32 bg-gray-200 rounded-md" />
            <div className="h-4 w-20 bg-gray-200 rounded-md" />
            <div className="flex items-center gap-3 mt-3">
              <div className="w-8 h-8 bg-gray-200 rounded-lg" />
              <div className="w-8 h-6 bg-gray-200 rounded-md" />
              <div className="w-8 h-8 bg-gray-200 rounded-lg" />
            </div>
          </div>

          {/* Price + Delete */}
          <div className="flex flex-col items-center sm:items-end justify-between gap-3 min-w-[100px]">
            <div className="h-5 w-20 bg-gray-200 rounded-md" />
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartShimmerUI;
