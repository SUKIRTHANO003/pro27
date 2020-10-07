
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1;
var support,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1010, 650);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(505,325,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
 
}



