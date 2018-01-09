$(document).ready(function() {
  $("li").click(function() {
    $(this).children().toggleClass("flashanswer");
  });
});
