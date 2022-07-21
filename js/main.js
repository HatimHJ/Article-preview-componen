$(document).ready(function () {
  console.log();
  if ($("body").innerWidth() < 810) {
    $(".share-btn").click(() => {
      $("#author").toggleClass("hide");
      $("#socail").toggle();
      $("#socail").children().toggleClass("socail-links");
      $(".author-social__social, .share").toggleClass("bg-color");
    });
  } else {
    $(".share-btn").click(() => {
      $("#socail").toggleClass("share-desktop");
      $(".share").toggleClass("share-btn-desktop");
    });
  }
});
