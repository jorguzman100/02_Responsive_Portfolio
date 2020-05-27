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
  $(".introCard").show();
  $(".projectCard").hide();

  // With HTML changed: projectCard is an overlay of introCard
  $(".introCard").on("mouseenter", (event) => {
    /* console.log("data-index: ", event.target.getAttribute("data-index")); */
    Object.values($(".projectCard")).forEach((projectCard) => {
      if (
        $(projectCard).attr("data-index") ===
        event.target.getAttribute("data-index")
      ) {
        /* console.log("data-index", $(projectCard).attr("data-index")); */
        /* $(projectCard).show(); */
        $(projectCard).fadeIn(500);
      }
    });
  });

  $(".projectCard").on("mouseleave", (event) => {
    /* console.log("data-index: ", event.target.getAttribute("data-index")); */
    Object.values($(".projectCard")).forEach((projectCard) => {
      if (
        $(projectCard).attr("data-index") ===
        event.target.getAttribute("data-index")
      ) {
        /* console.log("data-index", $(projectCard).attr("data-index")); */
        $(".projectCard").fadeOut(200);
      }
    });
  });

  let likes = [];
  function getLocalStorageLikes() {
    console.log("getLocalStorageLikes()");
    let likes = JSON.parse(localStorage.getItem("likes"));
    return likes;
  }

  /* $(".card-img-overlay .like").parent().hide();
  $(".card-img-overlay .liked").parent().hide(); */

  /* $(".card-img-overlay .like").parent().attr("class", "hide");
  $(".card-img-overlay .liked").parent().attr("class", "hide"); */

  /* $(".aLike").hide(); */
  $(".aLiked").hide();

  displayLikes();

  function displayLikes() {
    console.log("displayLikes()");
    likes = getLocalStorageLikes();
    console.log("likes: ", likes);
    if (likes != null) {
      likes.forEach((likeIndex) => {
        document.querySelectorAll(".aLike").forEach((a, index) => {
          if (likeIndex === index.toString()) {
            console.log("Matched: " + likeIndex + " = " + index);
            let liked = "#liked" + likeIndex;
            $(liked).show();
            a.style.display = "none";
            console.log("a: ", a);
          }
        });
      });
    }
  }

  $(".like").on("click", (event) => {
    $(event.target).parent().hide();
    let liked = "#liked" + $(event.target).parent().parent().attr("data-index");
    $(liked).show();
    if (likes === null) {
      likes = [];
    }
    likes.push($(event.target).parent().parent().attr("data-index"));
    likesStr = JSON.stringify(likes);
    localStorage.setItem("likes", likesStr);
    console.log("likes: ", likes);
    // displayLikes();
  });

  $(".liked").on("click", (event) => {
    $(event.target).parent().hide();
    let like = "#like" + $(event.target).parent().parent().attr("data-index");
    let liked = "#liked" + $(event.target).parent().parent().attr("data-index");
    $(like).show();
    $(liked).hide();
    if (likes === null) {
      likes = [];
    }
    let arrayIndex = likes.indexOf(
      $(event.target).parent().parent().attr("data-index")
    );
    console.log("arrayIndex: ", arrayIndex);
    likes.splice(arrayIndex, 1);
    likesStr = JSON.stringify(likes);
    localStorage.setItem("likes", likesStr);
    console.log("likes: ", likes);
    // displayLikes();
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
