import React from "react";

interface BurgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.MouseEventHandler<HTMLButtonElement>;
}

const BurgerMenu = ({ isMenuOpen, setIsMenuOpen }: BurgerMenuProps) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button className="hidden lg:block" onClick={setIsMenuOpen}>
      <div className="flex flex-col">
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen ? "rotate-45 translate-y-3" : ""
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${isMenuOpen ? "opacity-0" : ""}`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        />
      </div>
    </button>
  );
};

export default BurgerMenu;
