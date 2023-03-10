const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var block1, block2, block3;
var paper;
var dustbin;
var slingshot;

function setup() {
  createCanvas(2000, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Block(969, 390, 1940, 20, "Brown");

  block1 = new Block(950, 300, 10, 150, "Green");
  block2 = new Block(1030, 370, 150, 10, "Green");
  block3 = new Block(1110, 300, 10, 150, "Green");

  dustbin = new Dustbin(1030, 300, 200, 160);
  paper = new Paper(200, 200);
  slingshot = new SlingShot(paper.body, { x: 200, y: 100 });
}

function draw() {
  background(255);

  Engine.update(engine);

  ground.display();

  block1.display();
  block2.display();
  block3.display();

  dustbin.display();

  slingshot.display();
  paper.display();
}

function mouseDragged() {
  Matter.Body.setPosition(paper.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(paper.body);
  }
}
