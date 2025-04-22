import React from 'react'
import Spinner from '../../Shared/Spinner';

const QuantityPayload = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-[999]">
      <Spinner text="text-orange-400" />
      <span className="ml-4 text-white text-xl font-semibold">
        Updating Cart...
      </span>
    </div>
  );
};

export default QuantityPayload
