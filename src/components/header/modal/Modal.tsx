import { Link } from "react-router-dom";
import { headerNavLinks } from "../../../data/Data";

const Modal = () => {
  return (
    <div className="w-[100vh] h-[100vh] px-8 py-4">
      <div className="flex flex-col gap-y-6">
        {headerNavLinks.map((link) => (
          <Link
            to={link.path}
            key={link.path}
            className="transition-all duration-200 font-medium"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Modal;
