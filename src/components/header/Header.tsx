import Logo from "../common/logo/Logo";
import "../../todojo.css";
import { headerNavLinks } from "../../data/Data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { DarkMode, LightMode, Search } from "@mui/icons-material";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <header className="shadow-lg fixed z-50 top-0 w-full max-w-full bg-white">
      <div className="max-w-[1600px] m-auto max-w-8xl p-8 w-full flex items-center justify-between">
        <Logo />
        <div className="flex gap-x-10">
          {headerNavLinks.map((link) => (
            <Link
              to={link.path}
              key={link.path}
              className="transition-all duration-200 hover:font-bold"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-x-3">
          <IconButton className="min-w-[48px] min-h-[48px]" aria-label="search task">
            <Search />
          </IconButton>
          <IconButton className="min-w-[48px] min-h-[48px]" onClick={handleDarkModeChange} aria-label="dark mode">
            {isDarkMode && <LightMode />}
            {!isDarkMode && <DarkMode />}
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
