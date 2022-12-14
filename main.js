// ****************************************************************
// ****************************************************************

// || M E D I A:
const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const navListEl = document.querySelector("#sideNav").querySelectorAll("li");
const inputs = document.querySelectorAll(".inputs");
const year = document.getElementById("year");
const leftElements = document.querySelectorAll(".leftEl");
const rightElements = document.querySelectorAll(".rightEl");
const pictures = document.querySelectorAll(".picture");
const moveUpEl = document.querySelectorAll(".moveUpEl");

const thisYear = new Date().getFullYear();
sideNav.style.right = "-255px";

// || C O N T R O L L E R:
menuBtn.onclick = function () {
  moveNavBar();
};

navListEl.forEach((each) => {
  each.addEventListener("click", () => {
    moveNavBar();
  });
});

inputs.forEach((each) => {
  each.addEventListener("focus", () => {
    each.style.boxShadow = "0 0 5px #f67c92";
    each.style.transition = "all 0.15s";
  });
  each.addEventListener("blur", () => {
    each.style.boxShadow = "0 0 0 white";
    each.style.transition = "all 0.15s";
  });
});

window.addEventListener("scroll", animateElements);

// || V I E W:
const moveNavBar = () => {
  if (sideNav.style.right === "-255px") {
    sideNav.style.right = "0";
  } else {
    sideNav.style.right = "-255px";
  }
};

year.textContent = thisYear;

function animateElements() {
  const windowHeight = window.innerHeight;

  //Left Elements:
  for (let i = 0; i < leftElements.length; i++) {
    const elTop = leftElements[i].getBoundingClientRect().top;

    if (elTop < windowHeight) {
      leftElements[i].classList.add("leftEl_animated");
    } else {
      leftElements[i].classList.remove("leftEl_animated");
    }
  }

  //Right Elements:
  for (let a = 0; a < rightElements.length; a++) {
    const elTop = rightElements[a].getBoundingClientRect().top;

    if (elTop < windowHeight) {
      rightElements[a].classList.add("rightEl_animated");
    } else {
      rightElements[a].classList.remove("rightEl_animated");
    }
  }

  //Pictures:
  for (let p = 0; p < pictures.length; p++) {
    const elTop = pictures[p].getBoundingClientRect().top;

    if (elTop < windowHeight) {
      pictures[p].classList.add("pictures_animated");
    } else {
      pictures[p].classList.remove("pictures_animated");
    }
  }

  //Move Up Animation:
  for (let m = 0; m < moveUpEl.length; m++) {
    const elTop = moveUpEl[m].getBoundingClientRect().top;

    if (elTop < windowHeight) {
      moveUpEl[m].classList.add("moveUpEl_animated");
    } else {
      moveUpEl[m].classList.remove("moveUpEl_animated");
    }
  }
}
