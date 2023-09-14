import { Link } from "react-router-dom";
import logo from "../../../assets/icons/todojo-64px.png";

const Logo = () => {
  return (
    <Link to="/" className="no-underline">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Todojo logo" />
        <p className=" text-4xl text-black font-semibold">Todojo</p>
      </div>
    </Link>
  );
};

export default Logo;
