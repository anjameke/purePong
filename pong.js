var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// set ball variables
var x = canvas.width / 2;
var y = canvas.height - 30;
var ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, 2 * MATH.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    // TODO: stuff
    drawBall();
    
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);