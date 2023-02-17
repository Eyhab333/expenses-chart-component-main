// it's an ugly code but I will refactor it

let mon = document.querySelector(".mon");
let tue = document.querySelector(".tue");
let wed = document.querySelector(".wed");
let thu = document.querySelector(".thu");
let fri = document.querySelector(".fri");
let sat = document.querySelector(".sat");
let sun = document.querySelector(".sun");

let rectangles = document.querySelectorAll(".rectangle");
let bars = document.querySelectorAll(".bar");

let amounts = document.querySelectorAll(".amount");
window.onload = function () {
  amounts.forEach((element) => {
    element.style.display = "none";
  });
};

let charts = document.querySelector(".charts");

// it's an ugly code but I will refactor it

charts.addEventListener("mouseenter", () => {
  mon.addEventListener("mouseenter", () => {
    mon.previousElementSibling.style.display = "flex";
  });
  mon.addEventListener("mouseout", () => {
    mon.previousElementSibling.style.display = "none";
  });

  tue.addEventListener("mouseenter", () => {
    tue.previousElementSibling.style.display = "flex";
  });
  tue.addEventListener("mouseout", () => {
    tue.previousElementSibling.style.display = "none";
  });

  wed.addEventListener("mouseenter", () => {
    wed.previousElementSibling.style.display = "flex";
  });
  wed.addEventListener("mouseout", () => {
    wed.previousElementSibling.style.display = "none";
  });

  thu.addEventListener("mouseenter", () => {
    thu.previousElementSibling.style.display = "flex";
  });
  thu.addEventListener("mouseout", () => {
    thu.previousElementSibling.style.display = "none";
  });

  fri.addEventListener("mouseenter", () => {
    fri.previousElementSibling.style.display = "flex";
  });
  fri.addEventListener("mouseout", () => {
    fri.previousElementSibling.style.display = "none";
  });

  sat.addEventListener("mouseenter", () => {
    sat.previousElementSibling.style.display = "flex";
  });
  sat.addEventListener("mouseout", () => {
    sat.previousElementSibling.style.display = "none";
  });

  sun.addEventListener("mouseenter", () => {
    sun.previousElementSibling.style.display = "flex";
  });
  sun.addEventListener("mouseout", () => {
    sun.previousElementSibling.style.display = "none";
  });
});
