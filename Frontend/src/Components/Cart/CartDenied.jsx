import { useNavigate } from "react-router-dom";

const CartDenied = () => {
  const homeNav = useNavigate();

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="flex flex-col gap-3 items-center">
        <img
          className="w-44"
          src="https://img.freepik.com/premium-vector/top-view-food-white-background_1639-36388.jpg"
        />
        <h2 className="text-lg font-bold text-slate-600">Access Restricted</h2>
        <p className="text-slate-400">
        “Oops! You need to be logged in to see your cart. Signing in lets you keep track of items
        </p>
        <button
          onClick={() => homeNav("/auth")}
          className="bg-orange-600 font-bold text-white py-2 px-5 mt-5 hover:shadow-lg transition"
        >
          Please Login
        </button>
      </div>
    </div>
  );
};

export default CartDenied;
