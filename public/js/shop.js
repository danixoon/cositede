var choosed;
$(document).ready(function() {
  $("#page").load("/public/parts/menubar.html", function() {
    $("#page .menu-bar li").click(function() {
      let button = $(this);
      if (choosed) {
        choosed.removeClass("bar-hovered");
      }
      button.addClass("bar-hovered");
      choosed = button;
    });
  });
});
