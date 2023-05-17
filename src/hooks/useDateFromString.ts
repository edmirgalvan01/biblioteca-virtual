import { MONTHS } from "../constants";

export const useDateFromString = (dateAsString: string) => {
  const parsedDate = Date.parse(dateAsString);
  const date = new Date(parsedDate);

  var day = date.getUTCDate();

  const month = date.getUTCMonth() + 1;
  const monthName = MONTHS[month as keyof typeof MONTHS];

  const year = date.getUTCFullYear();

  return { day, month: monthName, year };
};
