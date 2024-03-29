import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { communityNavLinks } from "../../data";
import CommunityCard from "./communityCard/CommunityCard";

const CommunityPage = () => {
  const communityText = useRef(null);

  useEffect(() => {
    const typed = new Typed(communityText.current, {
      strings: ["Community"],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="mt-[175px] sm:flex sm:flex-col sm:items-center">
      <p>&#47;&#47; Social Media</p>
      <span className="font-bold text-[54px] lg:text-[26px]" ref={communityText}></span>
      <div>
        <hr className="mt-4 border-black" />
        <p className="mt-4 text-[13px] sm:text-center">
          BE A PART OF OUR GLOBAL COMMUNITY <br/> BY PARTICIPATING IN OPEN DISCUSSIONS.
        </p>
        <hr className="mt-16 border-black" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[1px] mt-12">
        {communityNavLinks.map((link) => (
          <CommunityCard link={link} />
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
