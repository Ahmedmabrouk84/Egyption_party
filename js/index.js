/// <reference types="../@types/jquery" />
"use strict";

// const { data } = require("../@types/jquery");

// ============== saidbar ===================

// =========== scroll ===========

$(".navbar-nav  a").on("click", function (e) {
  const aHref = e.target.getAttribute("href");
  console.log("hello");
  const sectionY = $(aHref).offset().top;
  $("body,html").animate({ scrollTop: sectionY }, 2000);
});

$(".flag-ico").on("click", function () {
  $(".outer-side").animate({ width: "toggle" });
});

$(".content").on("click", function (e) {
  console.log(e.target);
});
//  ========
// .slideToggle(800);

$(".header").on("click", function () {
  $(".content").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

$(".content").slideUp(500);



$(".my-nav .nav-item").on("click", function (e) {
  $(this).addClass("active");
  $(".my-nav .nav-item .active").removeClass("active");
  $(this).siblings().removeClass("active");
});

// ==================================

let counterDat = new Date("Dec 31,2024 23:59:59").getTime();

let counetr = setInterval(() => {
  let datNow = new Date().getTime();
  let dateInfo = counterDat - datNow;

  let day = Math.floor(dateInfo / (1000 * 60 * 60 * 24));

  document.querySelector(".day").innerHTML = day < 10 ? `0${day}` : day;
  let hours = Math.floor((dateInfo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor((dateInfo % (1000 * 60 * 60)) / (1000 * 60));

  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  let seconds = Math.floor((dateInfo % (1000 * 60)) / 1000);

  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateInfo <= 0) {
    clearInterval();
    alert("Our Egyption Party is startes Now");
  }
}, 1000);

console.log(counterDat);

// ====================== elements =======================

const INPUTS = document.querySelectorAll(".input");
const FORM = document.getElementById("form");
const btnSubmit = document.getElementById("btnSubmit");
let userList = [];
// ==================== Events   ======================

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  setFormInput();
  clearForm();
});

// >>>>>>>>>>>>>>>>>>>>>   FUNCTIONS  <<<<<<<<<<<<<<<<<<<<<

// ===================== setFormInput =====================

function setFormInput() {
  if (
    validationInputs(INPUTS[0]) &&
    validationInputs(INPUTS[1]) &&
    validationInputs(INPUTS[2])
  ) {
    let user = {
      name: INPUTS[0].value,
      email: INPUTS[1].value,
      message: INPUTS[2].value,
    };
    userList.push(user);
    console.log(userList);
    // btnSubmit.removeAttribute("disabled");
  }
}

// ===================== clearForm =====================
function clearForm() {
  for (let i = 0; i < INPUTS.length; i++) {
    INPUTS[i].value = null;
    INPUTS[i].classList.remove("is-valid");
  }
}

// ===================== registerForm =====================
function validationInputs(element) {
  let input = element.value;
  const regex = {
    Name: /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/,
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: /^\w{3,100}(\s+\w+)*$/gi,
  };

  if (regex[element.id].test(input)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}

// ======================= inputsLoopValidation ====================
function setInputsValidation() {
  for (let i = 0; i < INPUTS.length; i++) {
    INPUTS[i].addEventListener("input", function () {
      validationInputs(INPUTS[i]);
      if (INPUTS[4].value === INPUTS[5].value) {
        setFormInput();
      }
    });
  }
}
setInputsValidation();
