import { useEffect, useRef } from "react";
import Typed from "typed.js";
import VacancyInfo from "./vacancyInfo/VacancyInfo";
import { useGetVacanciesQuery } from "../../services/todo";
import { Vacancy } from "../../interfaces";

const CareersPage = () => {
  const { data, isLoading } = useGetVacanciesQuery();
  const careersText = useRef(null);
  const displayedCategories = new Set();

  useEffect(() => {
    const typed = new Typed(careersText.current, {
      strings: ["Join Todojo"],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="mt-[175px]">
      <p>&#47;&#47; Careers</p>
      <span className="font-bold text-[68px]" ref={careersText}></span>
      <div>
        <hr className="mt-4 border-black" />
        <p className="mt-4 text-[13px]">
          JOIN US IN BUILDING A FUTURE TOGETHER, WHERE INNOVATION MEETS
          COLLABORATION, <br /> AND EVERY CAREER PATH IS A JOURNEY OF GROWTH AND
          SUCCESS.
        </p>
        <hr className="mt-16 border-black" />
      </div>
      <div className="mt-20">
        <hr className="mt-4 border-black" />
        <div className="mt-2">
          {isLoading ? (
            <p className="text-3xl">Loading...</p>
          ) : (
            data?.map((vacancy: Vacancy) => {
              if (!displayedCategories.has(vacancy.category)) {
                displayedCategories.add(vacancy.category);
                return (
                  <div key={vacancy.category}>
                    <div className="flex gap-x-4 items-center mb-3">
                      <p>&#123; {vacancy.position} &#125;</p>
                      <h2 className="font-bold text-[36px]">
                        {vacancy.category.toUpperCase()}
                      </h2>
                    </div>
                    <hr className="mb-6 border-black" />
                    <VacancyInfo vacancy={vacancy} />
                  </div>
                );
              } else {
                return <VacancyInfo key={vacancy.id} vacancy={vacancy} />;
              }
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
