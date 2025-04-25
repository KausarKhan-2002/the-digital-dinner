import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "../../Hooks/useLogout";

function DesktopNavbar() {
  const user = useSelector((store) => store.user);
  const cartItems = useSelector((store) => store.cart);
  const [registerBtn, setRegisterBtn] = useState("");
  const { pathname } = useLocation();

  let itemsLength = cartItems?.items ? cartItems?.items?.length : 0;
  if (cartItems && !cartItems.authorized) {
    itemsLength = 0;
  }

  const getTitle = (fullName) => {
    if (!fullName.trim()) return "";
    const names = fullName.trim().toUpperCase().split(" ");
    const firstName = names[0][0];
    const lastName = names.length > 1 ? names[names.length - 1][0] : "";
    return firstName + lastName;
  };
  const title = user?.name && getTitle(user.name);

  const randomDarkColor = useMemo(() => {
    const colors = [
      "#991B1B", // Dark Red (Tailwind Red-700)
      "#047857", // Dark Green (Tailwind Green-700)
      "#1D4ED8", // Dark Blue (Tailwind Blue-700)
      "#7E22CE", // Dark Magenta (Tailwind Purple-700)
      "#BE185D", // Dark Pink (Tailwind Pink-700)
      "#1E3A8A", // Dark Navy (Tailwind Navy-700)
      "#78350F", // Dark Brown (Tailwind Amber-700)
      "#6B21A8", // Dark Purple (Extra)
      "#065F46", // Dark Teal (Tailwind Teal-700)
      "#701A75", // Dark Fuchsia (Tailwind Fuchsia-700)
    ];

    const ind = Math.floor(Math.random() * colors.length);

    return colors[ind];
  }, []);

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
      <nav className="flex items-center gap-8">
        <Link
          to="/"
          className={`font-medium px-1 py-4 inline-block ${
            pathname === "/" && "text-orange-400"
          } hover:text-orange-400`}
        >
          Home
        </Link>
        <Link
          to="/search"
          className={`font-medium px-1 py-4 inline-block ${
            pathname === "/search" && "text-orange-400"
          } hover:text-orange-400`}
        >
          Search
        </Link>
        <Link
          to="/cart"
          className={`relative font-medium px-1 py-4 inline-block ${
            pathname === "/cart" && "text-orange-400"
          } hover:text-orange-400`}
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
          className={`font-medium px-1 py-4 inline-block ${
            pathname === "/auth" && "text-orange-400"
          } hover:text-orange-400`}
        >
          {registerBtn}
        </button>
        <p
          style={{ background: `${randomDarkColor}` }}
          className={`rounded-full w-7 h-7 flex justify-center items-center text-white border border-slate-300`}
        >
          {title}
        </p>
      </nav>
    </div>
  );
}

export default DesktopNavbar;
