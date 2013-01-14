ctx = {};
function draw(){
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,800,600);

  var numBoxes = $("#boxes").slider("value");
  var numColors= $("#colors").slider("value");
  var size     = $("#size").slider("value");
  var rate     = $("#rate").slider("value");
  var circles  = $("#circles").prop('checked');
  var squares  = $("#squares").prop('checked');

  for(var i=0; i < numBoxes/2; i++) {
    var rgb = [randomNum(numColors), randomNum(numColors), randomNum(numColors)];
    var s   = "rgba(" + rgb.join() + ",10)";

    ctx.fillStyle = s;

    if(circles) {
      var x   = randomNum(800);
      var y   = randomNum(600);
      //draw a circle
      ctx.beginPath();
      ctx.arc(x, y, size/2, 0, Math.PI*2, true); 
      ctx.closePath();
      ctx.fill();
    }
    if (squares) {
      var x   = randomNum(800);
      var y   = randomNum(600);
      ctx.fillRect (x, y, size, size);
    }
    ctx.restore();
  }

  var loopTimer = setTimeout('draw()', rate);
}

function randomNum(precision) {
  return Math.floor(Math.random() * precision);
}

