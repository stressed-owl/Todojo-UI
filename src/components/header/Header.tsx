import { Link } from "react-router-dom";
import { headerNavLinks } from "../../data/Data";
import "../../todojo.css";
import Logo from "../common/logo/Logo";

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
