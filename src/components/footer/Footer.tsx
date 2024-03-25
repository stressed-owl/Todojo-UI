import Logo from "../common/logo/Logo";
import { footerMainLinks, footerSocialMediaLinks } from "../../data/Data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-[150px]">
      <div className="max-w-[1600px] m-auto p-8">

        <div>
          <h3 className="font-bold sm:text-[14px]">SOCIAL MEDIA</h3>
          <hr className="border-black mt-2"/>
          <div className="flex flex-col gap-y-2 mt-6">
          {footerSocialMediaLinks.map(link => (
            <Link to={link.path} key={link.name} target="true" className="transition-all duration-200 hover:font-bold">
                <p className="text-[14px] sm:text-[12px]">{link.name}</p>
            </Link>
          ))}
          </div>
        </div>

        <blockquote className="flex items-center justify-center">
          <div className="italic mt-5 sm:text-[14px]">
            <p>There's no light without dark.</p>
            <p className="flex items-center justify-center">There's no joy without pain.</p>
          </div>
        </blockquote>

        <div className="flex items-center justify-between mt-10 sm:flex-col sm:items-start sm:gap-5">
          <Logo />
          <div className="flex gap-x-20 lg:gap-x-3 sm:flex-col sm:gap-2">
            {footerMainLinks.map((link) => (
              <Link to={link.path} key={link.name} className="transition-all duration-200 hover:font-bold">
                <p className="text-[15px]">{link.name}</p>
              </Link>
            ))}
          </div>
          <p className="text-xl">&copy; 2024 Todojo</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
