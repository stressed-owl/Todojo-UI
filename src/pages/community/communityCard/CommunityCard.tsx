import * as React from "react";
import { ExtendedNavLink } from "../../../interfaces";
import { ArrowOutward } from "@mui/icons-material";

interface CommunityCardProps {
  link: ExtendedNavLink;
}

const CommunityCard = ({ link }: CommunityCardProps) => {
  return (
    <div className="max-w-[683px] w-full h-[342px] h-full border-[1px] border-black rounded-[2px]">
      <div className="px-6 py-4 min-h-[100%]">
        <div className="flex flex-col justify-between h-[300px]">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[13px] text-black">&#47; {link.id}</span>
              <p className="mt-1 font-medium text-[26px] text-black">
                {link.name}
              </p>
            </div>
            <div className="max-w-[48px] max-h-[48px]">
              <img src={link.icon} alt="social media icon"/>
            </div>
          </div>
          <div>
            <a className="text-black flex items-center gap-x-2" href={link.path} target="_blank" rel="noreferrer">
              <p className="text-black text-[14px] font-bold">{link.linkText}</p>
              <ArrowOutward fontSize="small"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
