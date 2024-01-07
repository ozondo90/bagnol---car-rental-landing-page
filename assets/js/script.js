//Toogle mobil menu
const breadcumbTag = document.querySelector(
  "header .nav-bar .mobil-nav-breadcumb"
);
breadcumbTag.addEventListener("click", (e) => {
  const targetElemnt = e.currentTarget;
  targetElemnt.classList.toggle("active");
  const mobilNavTag = document.querySelector("header .mobil-nav");
  if (targetElemnt.classList.contains("active")) {
    mobilNavTag.style.display = "block";
  } else {
    mobilNavTag.style.display = "none";
  }
});

// Toggle step for mobil and desktop content version
const stepTag = document.querySelectorAll(".how-it-work-main > ul > li");
const allDescriptionTag = document.querySelectorAll(
  ".how-it-work-main > ul > li small.description"
);

const allStepDetailsTag = document.querySelectorAll(
  ".how-it-work-main > ul > li .step-details"
);

function removeDisplay(tab) {
  tab.forEach((item) => {
    item.style.display = "none";
  });
}

stepTag.forEach((step) => {
  step.addEventListener("click", (e) => {
    if (window.innerWidth < 800) {
      removeDisplay(allDescriptionTag);
      removeDisplay(allStepDetailsTag);
      const descriptionTag = e.currentTarget.querySelector("small.description");
      const stepDetailsTag = e.currentTarget.querySelector(".step-details");

      if (getComputedStyle(descriptionTag).display === "none") {
        descriptionTag.style.display = "block";
      }

      if (getComputedStyle(stepDetailsTag).display === "none") {
        stepDetailsTag.style.display = "block";
      }
    } else {
    }
  });
});
