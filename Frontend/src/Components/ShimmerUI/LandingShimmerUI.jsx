import Spinner from "../../Shared/Spinner";
import { TbFidgetSpinner } from "react-icons/tb";

const LandingShimmerUI = () => {
  return (
    <div className="overflow-hidden fixed w-full left-0">
      <div className="bg-slate-900 flex flex-col gap-2 justify-center items-center h-[350px]">
        <Spinner icon={TbFidgetSpinner} size="text-4xl" />

        <h1 className="font-medium text-slate-200 text-2xl">
          Looking for a great food near you...
        </h1>
      </div>

      <div className="w-[40%] flex gap-20 items-center">
        <div id="sidebar" className="shadow-md flex flex-col gap-4">
        
            <div className="w-full h-12 bg-white" />
            <div className="flex items-center gap-5 bg-slate-100 p-2">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200" />
                <div className="w-32 h-5 bg-white " />
            </div>
            <div className="flex items-center gap-5 p-2">
                <div className="w-12 h-12 rounded-full bg-slate-100" />
                <div className="w-32 h-5 bg-slate-100 " />
            </div>
            <div className="flex items-center gap-5 p-2">
                <div className="w-12 h-12 rounded-full bg-slate-100" />
                <div className="w-32 h-5 bg-slate-100" />
            </div>
        </div>
        
        <div id="cards" className="flex flex-col gap-8">
            <div className="w-40 h-4 bg-slate-100 rounded-lg" />

            <div className="flex gap-8">
                <div className="bg-slate-100 w-[300px] h-[150px] rounded-xl" />
                <div className="bg-slate-100 w-[300px] h-[150px] rounded-xl" />
                <div className="bg-slate-100 w-[300px] h-[150px] rounded-xl" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingShimmerUI;