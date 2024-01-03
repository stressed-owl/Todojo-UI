import React from "react";
import { Vacancy } from "../../../interfaces";

interface VacancyInfoProps {
  vacancy: Vacancy;
}

const VacancyInfo = ({ vacancy }: VacancyInfoProps) => {
  return (
    <a href="/ffdsfsd">
      <div className="flex py-2 items-center justify-between">
        <div className="flex flex-col">
          <p className="font-semibold">{vacancy.job.toUpperCase()}</p>
          <p>{vacancy.city.toUpperCase()}</p>
        </div>
          <div className="flex max-w-[1000px] w-full justify-between">
            <p className="max-w-[450px]">{vacancy.requirements}</p>
            <p className="max-w-[400px]">{vacancy.responsibilities}</p>
          </div>
      </div>
      <hr className="mb-2 border-black" />
    </a>
  );
};

export default VacancyInfo;
