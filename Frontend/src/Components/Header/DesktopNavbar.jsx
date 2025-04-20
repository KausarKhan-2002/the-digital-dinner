import React from "react";
import { Link } from "react-router-dom";

function DesktopNavbar() {
  return (
    <div className="hidden sm:block">
      <nav className="flex gap-8">
        <Link
          to="/"
          className="font-medium px-1 py-4 inline-block hover:text-orange-400"
        >
          Home
        </Link>
        <Link
          to="/search"
          className="font-medium px-1 py-4 inline-block hover:text-orange-400"
        >
          Search
        </Link>
        <Link
          to="/cart"
          className="font-medium px-1 py-4 inline-block hover:text-orange-400"
        >
          Cart
        </Link>
        <Link
          to="/auth"
          className="font-medium px-1 py-4 inline-block hover:text-orange-400"
        >
          Sign In
        </Link>
      </nav>
    </div>
  );
}

export default DesktopNavbar;
