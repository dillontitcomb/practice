$(document).ready(function() {

// HIDE, SHOW, TOGGLE
// **While CSS has the hidden element as display: none and HTML has divs with hidden/unhidden classes:

$(document).ready(function() {
  $(".exampleclass").click(function() {
    $("#exampleid-showing").toggle();
    $("#exampleid-hidden").toggle();
  });
});
