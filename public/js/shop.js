var choosed;
var menuBar;
$(document).ready(function() {
  $("#page").load("/public/parts/menubar.html", function() {
    menuBar = $("#page .menu-bar");
    let elements = menuBar.children("li");
    elements.click(function() {
      selectMenuItem($(this));
    });
    selectMenuItem(elements.first());
  });
});

function selectMenuItem(item) {
  if (choosed) {
    choosed.removeClass("bar-selected");
  }
  item.addClass("bar-selected");
  choosed = item;
}


