import React, { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileNavbar from "./MobileNavbar";
import { useCartItem } from "../../Hooks/useCartItem";

function Header() {

  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const cartItem = useCartItem();
  useEffect(() => {
    cartItem()
  } ,[])

  return (
    <header className="fixed w-full bg-white z-999 flex justify-between items-center px-14 md:px-17 lg:px-25 xl:px-32 shadow-lg">
      {/* Logo */}
      <div className="py-4">
        <span className="text-sm font-bold font-mono">The</span>
        <span className="text-orange-500 font-bold text-xl sm:text-2xl">
          Digital
        </span>
        <span className="text-sm font-bold font-mono">Dinner</span>
      </div>

      {/* Hemburgur for mobile navbar */}
      <button
        onClick={() => setShowMobileNavbar(true)}
        className="sm:hidden absolute right-10 text-lg inline-block px-2 py-4 cursor-pointer"
      >
        <FaBarsStaggered />
      </button>

      {/* Desktop navbar */}
      <DesktopNavbar />

      {/* Mobile navbar */}
      <MobileNavbar
        showMobileNavbar={showMobileNavbar}
        setShowMobileNavbar={setShowMobileNavbar}
      />
    </header>
  );
}

export default Header;
