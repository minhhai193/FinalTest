$(function () {
  $(".open-button").click(function () {
    document.getElementsByClassName("open-button")[0].style.display = "none";
    document.getElementsByClassName("close-button")[0].style.display = "block";
    document.getElementsByClassName("menu-mobile-list")[0].style.height = "100%";
  });
});

$(function () {
  $(".close-menu").click(function () {
    document.getElementsByClassName("open-button")[0].style.display = "block";
    document.getElementsByClassName("close-button")[0].style.display = "none";
    document.getElementsByClassName("menu-mobile-list")[0].style.height = "0";
  });
});

