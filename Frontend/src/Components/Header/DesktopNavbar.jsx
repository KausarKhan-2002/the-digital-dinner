import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "../../Hooks/useLogout";

function DesktopNavbar() {
  const user = useSelector((store) => store.user);
  const cartItems = useSelector((store) => store.cart);
  const [registerBtn, setRegisterBtn] = useState("");
  const {pathname} = useLocation()

  const itemsLength = cartItems ? cartItems.length : 0;

  const logout = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (registerBtn === "Logout") {
      logout(setRegisterBtn);
    } else {
      navigate("/auth");
    }
  };

  useEffect(() => {
    setRegisterBtn(user ? "Logout" : "SignIn");
  }, [user]);

  return (
    <div className="hidden sm:block">
      <nav className="flex gap-8">
        <Link
          to="/"
          className={`font-medium px-1 py-4 inline-block ${pathname === "/" && "text-orange-400"} hover:text-orange-400`}
        >
          Home
        </Link>
        <Link
          to="/search"
          className={`font-medium px-1 py-4 inline-block ${pathname === "/search" && "text-orange-400"} hover:text-orange-400`}
        >
          Search
        </Link>
        <Link
          to="/cart"
          className={`relative font-medium px-1 py-4 inline-block ${pathname === "/cart" && "text-orange-400"} hover:text-orange-400`}
        >
          {itemsLength > 0 && (
            <span className="absolute top-1 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow">
              {itemsLength}
            </span>
          )}
          Cart
        </Link>

        <button
          onClick={handleLogout}
          className={`font-medium px-1 py-4 inline-block ${pathname === "/auth" && "text-orange-400"} hover:text-orange-400`}
        >
          {registerBtn}
        </button>
      </nav>
    </div>
  );
}

export default DesktopNavbar;


