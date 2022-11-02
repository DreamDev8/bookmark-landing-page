const toggleBtn = document.querySelector(".nav-toggle");
const img = document.querySelector(".nav-toggle img");
const menuToggle = document.querySelector(".menu-toggle");
const logo = document.querySelector(".logo");

//toggle mobile nav button and drop down mobile menu
toggleBtn.addEventListener("click", function () {
  if (img.getAttribute("src") === "./images/icon-hamburger.svg") {
    img.setAttribute("src", "./images/icon-close.svg");
    toggleBtn.style.zIndex = "100";
    toggleBtn.style.backgroundColor = "hsla(229, 31%, 21%, 95%)";
  } else {
    img.setAttribute("src", "./images/icon-hamburger.svg");
    toggleBtn.style.backgroundColor = "hsl(0, 100%, 100%)";
  }
  menuToggle.classList.toggle("drop-down-menu");

  if (logo.getAttribute("src") === "./images/logo-bookmark.svg") {
    logo.setAttribute("src", "./images/logo-light-bookmark.svg");
    logo.style.zIndex = "100";
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    menuToggle.classList.remove("drop-down-menu");
    img.setAttribute("src", "./images/icon-hamburger.svg");
    toggleBtn.style.backgroundColor = "hsl(0, 100%, 100%)";
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
});

// slider

const slider = document.querySelector(".slider");
const btns = document.querySelectorAll(".btn-slider");
const content = document.querySelectorAll(".content");

slider.addEventListener("click", function (e) {
  const btnId = e.target.dataset.id;

  if (btnId) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    content.forEach(function (singleContent) {
      singleContent.classList.remove("active");
    });

    const contentId = document.getElementById(btnId);
    contentId.classList.add("active");
  }
});

// q-a

const questionBtns = document.querySelectorAll(".question-btn");

questionBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("active");
  });
});

// input

const form = document.querySelector("form");
const input = document.querySelector(".input-form input");
const alert = document.querySelector(".error-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputValue = input.value;
  const formContainer = e.target.closest("form");
  const inputContainer = formContainer.querySelector(".input-form");

  if (!inputValue.includes("@") && inputValue !== "") {
    inputContainer.classList.add("active");
    alert.textContent = "Whoops, make sure it's an email";
    input.value = "";
    input.placeholder = "example@email/com";
    setTimeout(function () {
      inputContainer.classList.remove("active");
    }, 3000);
  } else if (inputValue === "") {
    inputContainer.classList.add("active");
    alert.textContent = "Please fill out this field";
    setTimeout(function () {
      inputContainer.classList.remove("active");
    }, 3000);
  }
});

//footer

const socials = document.querySelectorAll(".footer-social a");
const socialImgs = document.querySelectorAll(".footer-social img");

socials.forEach(function (social) {
  social.addEventListener("mouseover", function (e) {
    const imgId = e.target.dataset.id;
    if (imgId === "facebook") {
      e.target.setAttribute("src", "./images/icon-facebook-hover.svg");
    } else if (imgId === "twitter") {
      e.target.setAttribute("src", "./images/icon-twitter-hover.svg");
    }
  });
  social.addEventListener("mouseout", function (e) {
    const imgId = e.target.dataset.id;
    if (imgId === "facebook") {
      e.target.setAttribute("src", "./images/icon-facebook.svg");
    } else if (imgId === "twitter") {
      e.target.setAttribute("src", "./images/icon-twitter.svg");
    }
  });
});
