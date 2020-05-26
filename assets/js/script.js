$(document).ready(() => {
  /* ******************** Global ******************** */

  /* ---------- The Header ---------- */

  /* ---------- Main content ---------- */

  /* --------- The Page Footer --------- */

  /* ******************** Home Page ******************** */

  /* ---------- The Header ---------- */

  /* ---------- Main content ---------- */

  /* --------- The Page Footer --------- */

  /* ******************** Portfolio Page ******************** */

  /* ---------- The Header ---------- */

  // Shows the portfolio section accoding to the type of project dropdown options.
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
  $(".introCard").hide();
  $(".projectCard").hide();
  $(".introCard").fadeIn(1000);
  $(".card-img-overlay .liked").hide();

  $(".introCard").on("mouseenter", (event) => {
    console.log("data-index: ", event.target.getAttribute("data-index"));

    Object.values($(".introCard")).forEach((introCard) => {
      if (
        $(introCard).attr("data-index") ===
        event.target.getAttribute("data-index")
      ) {
        console.log("data-index", $(introCard).attr("data-index"));
        $(introCard).fadeOut(200);
      }
    });
    Object.values($(".projectCard")).forEach((projectCard) => {
      if (
        $(projectCard).attr("data-index") ===
        event.target.getAttribute("data-index")
      ) {
        console.log("data-index", $(projectCard).attr("data-index"));
        setTimeout(() => {
          $(projectCard).fadeIn(200);
        }, 200);
      }
    });
  });

  $(".projectCard").on("mouseleave", (event) => {
    console.log("data-index: ", event.target.getAttribute("data-index"));

    Object.values($(".introCard")).forEach((introCard) => {
      if (
        $(introCard).attr("data-index") ===
        event.target.getAttribute("data-index")
      ) {
        console.log("data-index", $(introCard).attr("data-index"));
        setTimeout(() => {
          $(introCard).fadeIn(200);
        }, 200);
      }
    });
    Object.values($(".projectCard")).forEach((projectCard) => {
      if (
        $(projectCard).attr("data-index") ===
        event.target.getAttribute("data-index")
      ) {
        console.log("data-index", $(projectCard).attr("data-index"));
        $(projectCard).fadeOut(200);
      }
    });
  });

  /* --------- The Page Footer --------- */

  /* ****************** Future Projects Page ****************** */

  /* ---------- The Header ---------- */

  /* ---------- Main content ---------- */

  /* --------- The Page Footer --------- */

  /* ******************** Contact Page ******************** */

  /* ---------- The Header ---------- */

  /* ---------- Main content ---------- */

  /* --------- The Page Footer --------- */
});
