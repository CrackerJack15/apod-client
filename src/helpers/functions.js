import { format } from "date-fns";
import add from "date-fns/add";
import sub from "date-fns/sub";

// API
import { endpoint } from "../api/endpoint";

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function createDayURL(date, priority) {
  if (priority === 1) {
    const value = add(new Date(date), { days: 1 });
    return format(value, "yyMMdd");
  } else {
    const value = sub(new Date(date), { days: 1 });
    return format(value, "yyMMdd");
  }
}

function createYearsArray() {
  const startYear = 1995;
  let endYear = new Date(Date.now()).getFullYear();
  const array = [];

  while (endYear >= startYear) {
    array.push(endYear);
    endYear--;
  }

  return array;
}

function createRecommendedURL(array) {
  let baseURL = `${endpoint}/day/recommended?`;

  array.forEach((day) => {
    baseURL = baseURL.concat(`days=${format(day, "yyyy-MM-dd")}&`);
  });

  return baseURL;
}

function createRecommendedDates(date) {
  let count = 4;
  const dateObject = new Date(date);
  const items = [];

  while (count > 0) {
    const newDate =
      randomNumber(2) === 1
        ? add(dateObject, { days: randomNumber(10) })
        : sub(dateObject, { days: randomNumber(10) });

    if (dateObject.getTime() === newDate.getTime()) {
      continue;
    } else if (!items.includes(newDate)) {
      items.push(newDate);
      count--;
    } else {
      continue;
    }
  }

  return items;
}

export {
  randomNumber,
  createDayURL,
  createYearsArray,
  createRecommendedURL,
  createRecommendedDates,
};
