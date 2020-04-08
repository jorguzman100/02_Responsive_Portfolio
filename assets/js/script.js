/* ================================= 
    Global functionality
==================================== */

/* ================================= 
              Home Page
==================================== */

/* ---------- The Header ---------- */

/* ---------- Main content ---------- */

/* ------- Additional content ------- */

/* --------- The Page Footer --------- */

/* =================================
            Portfolio Page
==================================== */

/* ---------- The Header ---------- */

/* Shows the portfolio section accoding to the type of project dropdown options. */
const dropdownElement = document.getElementsByClassName("dropdown-item");
const typeOfProjectSection = document.getElementsByClassName("projectTypes");

for (let i = 0; i < dropdownElement.length; i++) {
  dropdownElement[i].addEventListener("mouseover", () => {
    for (h = 0; h < typeOfProjectSection.length; h++) {
      typeOfProjectSection[h].style.display = "block";
      window.scrollTo(0, 0);
    }
    for (let j = 0; j < typeOfProjectSection.length; j++) {
      if (typeOfProjectSection[j] !== typeOfProjectSection[i]) {
        typeOfProjectSection[j].style.display = "none";
      }
    }
  });
}

/* ---------- Main content ---------- */

/* ------- Additional content ------- */

/* --------- The Page Footer --------- */

/* =================================
            Contact Page
==================================== */

/* ---------- The Header ---------- */

/* ---------- Main content ---------- */

/* ------- Additional content ------- */

/* --------- The Page Footer --------- */
