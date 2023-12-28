import Logo from "../common/logo/Logo";
import "../../todojo.css";

const Header = () => {
  return (
    <header className="shadow-lg rounded-b-3xl">
      <div className="max-w-8xl p-8 w-full flex items-center justify-between">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
