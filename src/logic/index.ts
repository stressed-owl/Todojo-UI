import { months } from "../data";

export const formatTime = () => {
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  let hour = date.getHours();
  const minute = date.getMinutes();

  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;

  const formattedTime = `${day} ${month} ${hour}:${
    minute < 10 ? "0" + minute : minute
  } ${ampm}`;

  return formattedTime;
};
