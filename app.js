$(function () {
  $("#toggleButton").on("click", function () {
    $("#myParagraph").toggle();
  });

  $("#colorButton").on("click", function () {
    $("#colorDiv").css({
      "background-color": "yellow",
    });
  });

  $("#addClassButton").on("click", function () {
    $("#classDiv").addClass("new-class");
  });

  $("#removeClassButton").on("click", function () {
    $("#classDiv").removeClass("new-class");
  });

  $("#fadeInButton").on("click", function () {
    $("#fadeDiv").fadeIn("new-class");
  });

  $("#fadeOutButton").on("click", function () {
    $("#fadeDiv").fadeOut("new-class");
  });

  $("#slideUpButton").on("click", function () {
    $("#slideDiv").slideUp("new-class");
  });

  $("#slideDownButton").on("click", function () {
    $("#slideDiv").slideDown("new-class");
  });
});
