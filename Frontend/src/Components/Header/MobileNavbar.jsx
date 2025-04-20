import {
  IoHomeOutline,
  IoSearchOutline,
  IoCartOutline,
  IoLogInOutline,
} from "react-icons/io5"; // Importing icons
import { IoMdClose } from "react-icons/io";
import { DEFAULT_AVATAR } from "../../Utils/constants";
import { Link } from "react-router-dom";

function MobileNavbar({ showMobileNavbar, setShowMobileNavbar }) {
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
        className={`fixed top-0 right-0 w-[250px] h-full bg-slate-800 z-[999999] text-white transition-transform duration-300 ease-in-out shadow-lg ${
          showMobileNavbar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="flex justify-end mt-4 mr-4">
          <IoMdClose
            onClick={() => setShowMobileNavbar(false)}
            className="text-3xl text-slate-400 hover:text-white cursor-pointer"
          />
        </button>

        <img
          src={DEFAULT_AVATAR}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto my-6 border-4 border-slate-700"
        />

        <nav className="flex flex-col gap-2 text-lg px-6">
          <Link
            onClick={() => setShowMobileNavbar(false)}
            className="py-2 font-medium hover:text-orange-400 flex items-center"
          >
            <IoHomeOutline className="mr-3 text-xl" /> Home
          </Link>
          <Link
            onClick={() => setShowMobileNavbar(false)}
            className="py-2 font-medium hover:text-orange-400 flex items-center"
          >
            <IoSearchOutline className="mr-3 text-xl" /> Search
          </Link>
          <Link
            onClick={() => setShowMobileNavbar(false)}
            className="py-2 font-medium hover:text-orange-400 flex items-center"
          >
            <IoCartOutline className="mr-3 text-xl" /> Cart
          </Link>
          <Link
            onClick={() => setShowMobileNavbar(false)}
            className="py-2 font-medium hover:text-orange-400 flex items-center"
          >
            <IoLogInOutline className="mr-3 text-xl" /> Sign In
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default MobileNavbar;