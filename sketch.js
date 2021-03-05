const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1, b2, b3, b4, b5, b6, b7, b8, b9;
var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16;
var g1, g2;
var hexagon;
var sling;
function setup() {

  createCanvas(900,400);
  engine = Engine.create();
	world = engine.world;
  //bottom layer
  b1 = new greenBox(740, 130)
  b2 = new greenBox(770, 130)
  b3 = new greenBox(800, 130)
  b4 = new greenBox(830, 130)
  b5 = new greenBox(860, 130)
  //middle layer
  b6 = new pinkBox(770, 90)
  b7 = new pinkBox(800, 90)
  b8 = new pinkBox(830, 90)
  //top layer
  b9 = new blueBox(800, 50)

    //bottom layer
    a1 = new greenBox(450, 340)
    a2 = new greenBox(480, 340)
    a3 = new greenBox(510, 340)
    a4 = new greenBox(540, 340)
    a5 = new greenBox(570, 340)
    a6 = new greenBox(600, 340)
    a7 = new greenBox(630, 340)
    //3rd layer
    a8 = new pinkBox(480, 300)
    a9 = new pinkBox(510, 300)
    a10 = new pinkBox(540, 300)
    a11 = new pinkBox(570, 300)
    a12 = new pinkBox(600, 300)
    //2nd layer
    a13 = new blueBox(510, 260)
    a14 = new blueBox(540, 260)
    a15 = new blueBox(570, 260)
    //top layer
    a16 = new greyBox(540, 220)

    //ground 1
    g1 = new Ground(790, 180, 190, 20)

    //ground 2
    g2 = new Ground(530, 390, 250, 20)
    hexagon = new Hexagon(100, 200, 40, 40)

    sling = new SlingShot(hexagon.body, {x: 100, y: 200})
  Engine.run(engine);
}

function draw() {
  background("black");  
  textSize(23);
  fill("white");
  text("Drag the Hexagonal Stone and Release it, to lauch it towards the blocks", 55, 30)
  g2.display();
  g1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  a7.display();
  a8.display();
  a9.display();
  a10.display();
  a11.display();
  a12.display();
  a13.display();
  a14.display();
  a15.display();
  a16.display();
  sling.display();
  hexagon.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling.fly();
}
