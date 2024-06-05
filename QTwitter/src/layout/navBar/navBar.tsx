import React from 'react';

interface NavItemProps {
  label: string;
  href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return (
    <a href={href} className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white">
      {label}
    </a>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between p-4">
      <div className="flex">
        <NavItem label="پروفایل" />
        <NavItem label="جستجو" />
        <NavItem label="توییت" />
      </div>
      <NavItem label="فید" />
    </nav>
  );
};

export default Navbar;
