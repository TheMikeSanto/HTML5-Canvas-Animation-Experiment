ctx = {};
function draw(x,y){
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,800,600);

  var num = $("#num").slider("value");

  for(var i=0; i < num; i++) {
    var rgb = [randomNum(256), randomNum(256), randomNum(256)];
    var s   = "rgba(" + rgb.join() + ",1)";
    var x   = randomNum(800);
    var y   = randomNum(600);

    ctx.fillStyle = s;
    ctx.fillRect (x, y, 50, 50);
    ctx.restore();
  }
  if (x < 700) {
    x += 1;
  } else {
    x -= 1;
  }
  y +=1;
  var loopTimer = setTimeout('draw('+x+','+y+')',30);
}

function randomNum(precision) {
  return Math.floor(Math.random() * precision);
}

