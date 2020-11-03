const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var division = [];
var plinko1 = [], plinko2 = [], plinko3 = [], plinko4 = [];
var particle;

var gameState = "play";

var score = 0;
var count = 0;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  for(var i=0; i<=480; i=i+80)
  {
    division.push (new Division(i, 610, 10, 380));
  }

  for(var j =40; j<=width; j=j+50)
  {
    plinko1.push(new Plinko(j, 50));
  }

  for(var j = 15; j<=width-10; j=j+50)
  {
    plinko2.push(new Plinko(j, 150));
  }

  for(var j =40; j<=width; j=j+50)
  {
    plinko3.push(new Plinko(j, 250));
  }

  for(var j = 15; j<=width-10; j=j+50)
  {
    plinko4.push(new Plinko(j, 350));
  }

  ground = new Ground(240, 790, 480, 20);
}

function draw() {
  background(0);  

  Engine.update(engine);

  stroke("yellow");
  strokeWeight(8);
  line(0, 395, 480, 395);

  textSize(25);
  noStroke();
  fill("white")
  text(500, 20, 500);
  text(300, 100, 500);
  text(100, 180, 500);
  text(100, 260, 500);
  text(300, 340, 500);
  text(500, 420, 500);

  for(var y=0; y<plinko1.length; y++)
  {
    plinko1[y].display();
  }

  for(var y=0; y<plinko2.length; y++)
  {
    plinko2[y].display();
  }

  for(var y=0; y<plinko3.length; y++)
  {
    plinko3[y].display();
  }

  for(var y=0; y<plinko4.length; y++)
  {
    plinko4[y].display();
  }

  ground.display();

   for(var x=0; x<division.length; x=x+1)
   {
     division[x].display();
   }


   particle = new Particle(mouseX, 10);

   particle.display();

}

function mousePressed()
{
  console.log("Mouse event")
  if(gameState !=="end")
  {
    count++;
  }
}