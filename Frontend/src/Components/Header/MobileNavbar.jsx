import {
  IoHomeOutline,
  IoSearchOutline,
  IoCartOutline,
  IoLogInOutline,
} from "react-icons/io5"; // Importing icons
import { IoMdClose } from "react-icons/io";
import { DEFAULT_AVATAR } from "../../Utils/constants";
import { Link, useLocation } from "react-router-dom";

function MobileNavbar({ showMobileNavbar, setShowMobileNavbar }) {
  const {pathname} = useLocation()
  
  return (
    <section
      id="mobileNavbar"
      onClick={(e) =>
        e.target.id === "mobileNavbar" && setShowMobileNavbar(false)
      }
      className={`sm:hidden fixed top-0 left-0 w-full h-screen bg-black/60 z-[99999] transition-opacity duration-300 ${
        showMobileNavbar
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 right-0 w-[250px] h-full bg-slate-100/70 backdrop-blur-md  z-[999999] transition-transform duration-300 ease-in-out shadow-lg ${
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
            className={`py-2 font-medium flex items-center ${pathname === "/" && "text-orange-700"}`}
          >
            <IoHomeOutline className="mr-3 text-xl" /> Home
          </Link>
          <Link
            to="/search"
            onClick={() => setShowMobileNavbar(false)}
            className={`py-2 font-medium flex items-center ${pathname === "/search" && "text-orange-700"}`}
          >
            <IoSearchOutline className="mr-3 text-xl" /> Search
          </Link>
          <Link
            to="/cart"
            onClick={() => setShowMobileNavbar(false)}
            className={`py-2 font-medium flex items-center ${pathname === "/cart" && "text-orange-700"}`}
          >
            <IoCartOutline className="mr-3 text-xl" /> Cart
          </Link>
          <Link
            to="/auth"
            onClick={() => setShowMobileNavbar(false)}
            className={`py-2 font-medium flex items-center ${pathname === "/auth" && "text-orange-700"}`}
          >
            <IoLogInOutline className="mr-3 text-xl" /> Sign In
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default MobileNavbar;
