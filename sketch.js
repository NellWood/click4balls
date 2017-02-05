function setup() {
  resizeCanvas(300,300);
}
// var ball = new Ball();
// var ball2 = new Ball();
// ball2.position.y = 50;
var balls = [];
function draw() {
  for(var i = 0; i < balls.length; i++) {
    balls [i].draw();
    balls[i].update();
  }
}
function mouseClicked() {
  //everytime we click we add a new ball
  var ball = new Ball();
  ball.position.x = mouseX;
  ball.position.y = mouseY;
  balls.push(ball);
}
//template
function Ball() {
  // this.x = 50;
  // this.y = 50; 
  this.position = new p5.Vector(5,5);
  this.vector = new p5.Vector(5,5);
  this.radius = 10;
   this.draw = function() {
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
  }

  this.update = function() {
    this.position.add(this.vector);
  }
}