import { Link } from "react-router-dom";
import logo from "../../../assets/icons/todojo-64px.png";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-4 lg:gap-3">
        <img src={logo} alt="Todojo logo" className="lg:w-[48px] lg:h-[48px]"/>
        <p className="text-4xl text-black font-semibold lg:text-[26px]">Todojo</p>
      </div>
    </Link>
  );
};

export default Logo;
