import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "POINTS TABLE", path: "/points-table" },
    { label: "MATCH SCHEDULE", path: "/match-schedule" },
    { label: "TOP RUN SCORERS", path: "/top-run-scorers" },
  ];

  // NavLink styles for desktop and mobile
  const getNavLinkClass = ({ isActive }) =>
    `px-4 py-[18px] text-sm font-semibold tracking-wide transition-all duration-300 flex items-center
    ${isActive ? "text-[#FF3F86]" : "text-gray-100"}
    hover:text-[#FF3F86]`;

  const getMobileNavLinkClass = ({ isActive }) =>
    `block px-3 py-3 text-base font-medium transition-all duration-200 flex items-center
    ${isActive ? "text-[#FF3F86] pl-4" : "text-gray-100 hover:text-[#FF3F86] hover:pl-4"}`;

  return (
    <nav className="bg-[#001B3D] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="flex items-center h-[60px]">
          {/* Logo and Navigation Items */}
          <div className="flex items-center flex-1">
            <Link to="/" className="flex items-center pl-4">
              <img
                src="https://documents.iplt20.com//ipl/assets/images/ipl-logo-new-old.png"
                alt="IPL Logo"
                className="h-12 w-auto"
              />
            </Link>

            <div className="hidden md:flex ml-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={getNavLinkClass}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden pr-4 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-blue-800">
            <div className="px-2 py-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={getMobileNavLinkClass}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
