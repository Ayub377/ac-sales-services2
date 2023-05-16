// filter items on button click
/* $(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $(".isotope-row").isotope({ filter: filterValue });

  var grid = $(".masonry-row");
  var msnry;

  imagesLoaded(grid, "done", function () {
    msnry = new Masonry(grid, {
      percentPosition: true,
    });
  });
  var filterValue = $(this).attr("data-filter");
  $(".isotope-row").isotope({ filter: filterValue });
}); */

var grid = document.querySelector(".masonry-row");
var msnry;

imagesLoaded(grid, "done", function () {
  msnry = new Masonry(grid, {
    percentPosition: true,
  });
});
