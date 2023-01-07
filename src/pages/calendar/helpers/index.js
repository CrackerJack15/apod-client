import format from "date-fns/format";
import getISODay from "date-fns/getISODay";

function createDate(searchParams) {
  let month, year;

  if (!searchParams.get("month") || !searchParams.get("year")) {
    month = format(new window.Date(), "MM");
    year = format(new window.Date(), "yyyy");
  } else {
    month = searchParams.get("month");
    year = searchParams.get("year");
  }

  return { month, year };
}

function createMonthMatrix(data) {
  const matrix = [];
  const dayOfTheWeek = getISODay(new Date(data[0].date));

  let count = 1;
  while (count < dayOfTheWeek) {
    data.unshift(null);
    count++;
  }

  let count2 = 0;
  while (count2 < 42) {
    matrix.push(data.slice(count2, count2 + 7));
    count2 = count2 + 7;
  }

  return matrix;
}

export { createDate, createMonthMatrix };
