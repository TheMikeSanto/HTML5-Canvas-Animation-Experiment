$(document).ready(function() {
  $("#boxes").slider({max: 150, min: 1, value: 25, orientation: "vertical"});
  $("#colors").slider({max: 255, min: 0, value: 256, orientation: "vertical"});
  $("#size").slider({max: 100, min: 5, value: 50, orientation: "vertical"});
  $("#rate").slider({max: 200, min: 30, value: 50, orientation: "vertical"});
  draw();
})