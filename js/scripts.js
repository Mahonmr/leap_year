var leapYear = function(year) {
  if(isNaN(year) || year < 0 || year == " ") {
    return "invalid input";
  } else {
  return ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0));
  }
};
