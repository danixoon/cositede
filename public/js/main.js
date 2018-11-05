$(document).ready(function() {
  let selected = $(".active");

  // jQuery methods go here...
  $(".header-right")
    .children()
    .click(function() {
      let $this = $(this);
      selected.removeClass("active");
      $this.addClass("active");
      selected = $this;
    });

  // When the user scrolls the page, execute myFunction

  $(window).scroll(function() {
    let menu = $(".menu-container");
    let aTop = menu.height();
    if ($(this).scrollTop() >= aTop) {
      console.log("header just passed.");
      menu.css("postion", "sticky");
    }
  });
});
