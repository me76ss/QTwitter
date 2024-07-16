import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return (
    <Link to={href}>
      <div className="flex items-center rounded-lg px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white">
        {label}
      </div>
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between p-4">
      <div className="flex">
        <NavItem href="/signup" label="Profile" />
        <NavItem href="/home" label="Search" />
        <NavItem href="/home" label="Tweet" />
      </div>
      <NavItem href="/home" label="Feed" />
    </nav>
  );
};

export default Navbar;
