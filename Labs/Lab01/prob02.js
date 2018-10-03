function isWeekend() {
  const todayDate = new Date();
  const day = todayDate.getDay(); // 0 - 6 ( 0 is Sunday)

  let dayType = checkObject[day] || checkObject.other;
  return dayType;
}

let checkObject = {
  0: "Weekend",
  other: "weekday"
};

console.log("Today is = " + isWeekend());
