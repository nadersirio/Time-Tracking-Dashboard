function dayClick() {
  let day = document.getElementById("day");
  if (true) {
    console.log("day");
    day.disabled = true;
  }
  week.disabled = false;
  month.disabled = false;
  return;
}

function weekClick() {
  let week = document.getElementById("week");
  if (true) {
    console.log("week");
    week.disabled = true;
  }
  day.disabled = false;
  month.disabled = false;
  return;
}

function monthClick() {
  let month = document.getElementById("month");
  if (true) {
    console.log("month");
    month.disabled = true;
  }
  day.disabled = false;
  week.disabled = false;
  return;
}