document.getElementById("hamburger").addEventListener("click", function () {
  var menu = document.getElementById("menu");

  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

document.getElementById("showMoreBtn").addEventListener("click", function () {
  var hiddenCommentators = document.querySelectorAll(".speaker.hidden");

  hiddenCommentators.forEach(function (speaker) {
    speaker.classList.remove("hidden");
  });

  document.getElementById("viewless").classList.remove("hidden");
  this.classList.add("hidden");
});

document.getElementById("viewless").addEventListener("click", function () {
  var hiddenCommentators = document.getElementsByClassName("less");

  Array.from(hiddenCommentators).forEach(function (speaker) {
    speaker.classList.add("hidden");
  });

  this.classList.add("hidden");
  document.getElementById("showMoreBtn").classList.remove("hidden");
});
