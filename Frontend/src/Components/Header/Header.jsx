import React, { useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileNavbar from "./MobileNavbar";

function Header() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  return (
    <header className="fixed w-full flex justify-between items-center px-10 sm:px-14 shadow-lg">

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
      <MobileNavbar showMobileNavbar={showMobileNavbar} setShowMobileNavbar={setShowMobileNavbar} />
    </header>
  );
}

export default Header;
