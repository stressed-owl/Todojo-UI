import { useState } from "react";
import { Link } from "react-router-dom";
import { headerNavLinks } from "../../data/Data";
import "../../todojo.css";
import Logo from "../common/logo/Logo";
import Modal from "./modal/Modal";
import BurgerMenu from "../common/buttons/burgerMenu/BurgerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen)
 
  return (
    <header className="shadow-lg fixed z-50 top-0 w-full max-w-full bg-white">
      <div className="max-w-[1600px] m-auto max-w-8xl p-8 w-full flex items-center justify-between">
        <Logo />
        <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={handleMenuClick}/>
        <div className="flex gap-x-10 lg:hidden">
          {headerNavLinks.map((link) => (
            <Link
              to={link.path}
              key={link.path}
              className="transition-all duration-200 hover:font-bold lg:hidden"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {isMenuOpen && <Modal />}
    </header>
  );
};

export default Header;
