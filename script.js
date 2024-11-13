let days1 = prompt("გთხოვთ შეიყვანოთ დღეების რაოდენობა");

while (Number(days1) != days1) {
  days1 = prompt("გთხოვთ შეიყვანოთ რიცხვი");
}
while (Number(days1) < 0) {
  days1 = prompt("გთხოვთ შეიყვანოთ დადებითი რიცხვი");
}
let hours1 = prompt("გთხოვთ შეიყვანოთ საათების რაოდენობა");
while (Number(hours1) != hours1) {
  hours1 = prompt("გთხოვთ შეიყვანოთ რიცხვი");
}
while (Number(hours1) < 0) {
  hours1 = prompt("გთხოვთ შეიყვანოთ დადებითი რიცხვი");
}
let minutes1 = prompt("გთხოვთ შეიყვანოთ წუთების რაოდენობა");
while (Number(minutes1) != minutes1) {
  minutes1 = prompt("გთხოვთ შეიყვანოთ რიცხვი");
}
while (Number(minutes1) < 0) {
  minutes1 = prompt("გთხოვთ შეიყვანოთ დადებითი რიცხვი");
}
let seconds1 = prompt("გთხოვთ შეიყვანოთ წამების რაოდენობა");
while (Number(seconds1) != seconds1) {
  seconds1 = prompt("გთხოვთ შეიყვანოთ რიცხვი");
}
while (Number(seconds1) < 0) {
  seconds1 = prompt("გთხოვთ შეიყვანოთ დადებითი რიცხვი");
}

let dgeebi = document.getElementById("days");
dgeebi.textContent = days1;

let saatebi = document.getElementById("hours");
saatebi.textContent = hours1;

let wutebi = document.getElementById("minutes");
wutebi.textContent = minutes1;

let wamebi = document.getElementById("seconds");
wamebi.textContent = seconds1;

let interval = setInterval(() => {
  if (seconds1 == 0 && minutes1 == 0 && hours1 == 0 && days1 == 0) {
    clearInterval(interval);
  }
  wamebi.textContent = seconds1;
  wutebi.textContent = minutes1;
  dgeebi.textContent = days1;
  saatebi.textContent = hours1;
  if (seconds1 == 0 && minutes1 != 0) {
    seconds1 = 60;
    minutes1--;
  }
  if (seconds1 == 0 && minutes1 == 0 && hours1 != 0) {
    seconds1 = 60;
    hours1--;
    minutes1 = 59;
  }
  if (seconds1 == 0 && minutes1 == 0 && hours1 == 0) {
    seconds1 = 60;
    days1--;
    minutes1 = 59;
    hours1 = 23;
  }
  seconds1--;
}, 1000);
