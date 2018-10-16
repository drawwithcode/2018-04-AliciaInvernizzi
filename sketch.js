
//SETUP
function setup() {
createCanvas(windowWidth,windowHeight);
angleMode(DEGREES);
}





//VARIABLES
var lightArc1 = {};
var lightArc2 = {};
var lightArc3 = {};

var underBall1 = {};
var underBall2 = {};
var underBall3 = {};





//DRAW
function draw() {
  background('#363159');

  push();
  rectMode(CENTER);
  noStroke();
  fill('#57564A');
  rect(windowWidth/2,windowHeight/2-300,20,200);

  fill('#EFECCA');
  rect(windowWidth/2,windowHeight/2,180,500);

  fill('#57564A');
  rect(windowWidth/2,windowHeight/2-250,200,30);
  rect(windowWidth/2,windowHeight/2+250,200,30);
  pop();

  var underBall1 = new Ball (windowWidth/2,windowHeight/2,120);
  var underBall2 = new Ball (windowWidth/2,windowHeight/2+150,120);
  var underBall3 = new Ball (windowWidth/2,windowHeight/2-150,120);

  var lightArc1 = new Light (windowWidth/2+20,windowHeight/2-20);
  var lightArc2 = new Light (windowWidth/2+20,windowHeight/2+130);
  var lightArc3 = new Light (windowWidth/2+20,windowHeight/2-170);


  underBall1.rollover1(mouseX, mouseY);
  underBall2.rollover2(mouseX, mouseY);
  underBall3.rollover3(mouseX, mouseY);

  lightArc1.rolloverArc1(mouseX,mouseY);
  lightArc2.rolloverArc1(mouseX,mouseY);
  lightArc3.rolloverArc1(mouseX,mouseY);


  underBall1.display();
  underBall2.display();
  underBall3.display();

  lightArc1.display();
  lightArc2.display();
  lightArc3.display();
}








//BALL GRAY AND COLORS
function Ball (_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = 'gray';
  this.stroke = noStroke();

  this.display = function() {
      fill(this.color);
      ellipse(this.x,this.y,this.diameter);
    }

    this.rollover1 = function(_px, _py)  {
      var d = dist(_px,_py, this.x, this.y);
      if(d < this.diameter){
        k = 1;
        this.color = '#FCB97D';
      }else{
        this.color = 'gray';
      }
    }


    this.rollover2 = function(_px, _py)  {
      var d = dist(_px,_py, this.x, this.y+50);
      if(d < this.diameter){
        this.color = '#A9CBB7';
      }else{
        this.color = 'gray';
      }
    }


    this.rollover3 = function(_px, _py)  {
      var d = dist(_px,_py, this.x, this.y-50);
      if(d < this.diameter){
        this.color = '#F78571';
      }else{
        this.color = 'gray';
      }
    }
}







//ARC LIGHT
function Light (_x, _y) {
  this.x = _x;
  this.y = _y;
  this.width = 30;
  this.height = 30;
  this.start = 270;
  this.end = 0;
  this.stroke = '#EFECCA';
  this.strokeWeight = strokeWeight(4);


  this.display = function() {
      stroke(this.stroke);
      noFill();
      arc(this.x,this.y,this.width,this.height,this.start,this.end);
    }

  this.rolloverArc1 = function(_px, _py)  {
      var d = dist(_px,_py, this.x, this.y);
      if(d < this.diameter){
        this.stroke = '#EFECCA';
      }else{
        this.stroke = 'gray';
      }
    }


    this.rolloverArc2 = function(_px, _py)  {
        var d = dist(_px,_py, this.x, this.y);
        if(d < this.diameter){
          this.stroke = '#EFECCA';
        }else{
          this.stroke = 'gray';
        }
      }


      this.rolloverArc3 = function(_px, _py)  {
          var d = dist(_px,_py, this.x, this.y);
          if(d < this.diameter){
            this.stroke = '#EFECCA';
          }else{
            this.stroke = 'gray';
          }
        }
}



function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
