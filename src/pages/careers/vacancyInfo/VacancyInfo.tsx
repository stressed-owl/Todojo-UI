import React from "react";
import { Vacancy } from "../../../interfaces";

interface VacancyInfoProps {
  vacancy: Vacancy;
}

const VacancyInfo = ({ vacancy }: VacancyInfoProps) => {
  return (
    <a href="#">
      <div className="flex py-2 items-center justify-between sm:flex-col">
        <div className="flex flex-col">
          <p className="font-semibold">{vacancy.job.toUpperCase()}</p>
          <p>{vacancy.city.toUpperCase()}</p>
        </div>
        <div className="flex max-w-[1000px] w-full justify-between sm:flex-col sm:mt-2">
          <p className="max-w-[450px] sm:text-start">{vacancy.requirements}</p>
          <p className="max-w-[400px] sm:text-start">{vacancy.responsibilities}</p>
        </div>
      </div>
      <hr className="mb-2 border-black" />
    </a>
  );
};

export default VacancyInfo;
