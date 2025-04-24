import {
  IoHomeOutline,
  IoSearchOutline,
  IoCartOutline,
  IoLogInOutline,
} from "react-icons/io5"; // Importing icons
import { IoMdClose } from "react-icons/io";
import { DEFAULT_AVATAR } from "../../Utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLogout } from "../../Hooks/useLogout";

function MobileNavbar({ showMobileNavbar, setShowMobileNavbar }) {
  const user = useSelector((store) => store.user);
  const cartItems = useSelector((store) => store.cart);

  let itemsLength = cartItems?.items ? cartItems?.items?.length : 0;
  if (cartItems && !cartItems.authorized) {
    itemsLength = 0;
  }

  const { pathname } = useLocation();
  const [registerBtn, setRegisterBtn] = useState("");

  const navigate = useNavigate();
  const logout = useLogout();

  const handleLogout = () => {
    if (registerBtn === "logout") {
      logout(setShowMobileNavbar);
    } else {
      navigate("/auth");
      setShowMobileNavbar(false);
    }
  };

  useEffect(() => {
    setRegisterBtn(user ? "logout" : "SignIn");
  }, [user]);

  return (
    <section
      id="mobileNavbar"
      onClick={(e) =>
        e.target.id === "mobileNavbar" && setShowMobileNavbar(false)
      }
      // sm:hidden fixed top-0 left-0 w-full h-screen bg-black/60 z-[99999] transition-opacity duration-300
      className={`sm:hidden fixed top-0 left-0 w-full h-screen bg-black/60 z-[99999] transition-opacity duration-300 ${
        showMobileNavbar
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 right-0 w-[250px] h-full bg-slate-100/85 backdrop-blur-md  z-[999999] transition-transform duration-300 ease-in-out shadow-lg ${
          showMobileNavbar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="flex justify-end mt-4 mr-4">
          <IoMdClose
            onClick={() => setShowMobileNavbar(false)}
            className="text-3xl ml-1"
          />
        </button>

        <img
          src={DEFAULT_AVATAR}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto my-6 border-4 border-slate-700"
        />

        <nav className="flex flex-col gap-2 px-6">
          <Link
            to="/"
            onClick={() => setShowMobileNavbar(false)}
            className={`py-2 font-medium flex items-center ${
              pathname === "/" && "text-orange-700"
            }`}
          >
            <IoHomeOutline className="mr-3 text-xl" /> Home
          </Link>
          <Link
            to="/search"
            onClick={() => setShowMobileNavbar(false)}
            className={`py-2 font-medium flex items-center ${
              pathname === "/search" && "text-orange-700"
            }`}
          >
            <IoSearchOutline className="mr-3 text-xl" /> Search
          </Link>
          <Link
            to="/cart"
            onClick={() => setShowMobileNavbar(false)}
            className={`relative py-2 font-medium flex items-center ${
              pathname === "/cart" && "text-orange-700"
            }`}
          >
            {itemsLength > 0 && (
              <span className="absolute top-1 right-29 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow">
                {itemsLength}
              </span>
            )}
            <IoCartOutline className="mr-3 text-xl" /> Cart
          </Link>
          <button
            onClick={handleLogout}
            className={`py-2 font-medium flex items-center ${
              pathname === "/auth" && "text-orange-700"
            }`}
          >
            <IoLogInOutline className="mr-3 text-xl" /> {registerBtn}
          </button>
        </nav>
      </div>
    </section>
  );
}

export default MobileNavbar;
