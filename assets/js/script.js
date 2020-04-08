/* ================================= 
                Home
==================================== */

/* ================================= 
                Portfolio
==================================== */

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

/* for (let a = 0; a < dropdownElement.length; a++) {
  dropdownElement[a].addEventListener("click", () => {
    alert("a-clicked");
    window.scrollTo(0, 0);
  });
} */

/* ================================= 
                Contact
==================================== */
