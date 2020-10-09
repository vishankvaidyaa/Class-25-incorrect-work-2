var paper;
var paperBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

    engine = Engine.create();
	world = engine.world;

	//Create a Ground 
	
	fill ("green");
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1 = new Dustbin(750,600,20,100);
	 paper1 = new Paper(650,633,200,20);

	 Engine.run(engine);
  
}

function draw() {
	Matter.Engine.update(Engine);
  rectMode(CENTER);
  background(0);
  box1.display();
  paper1.display();

  fill ("pink");

 // keyPressed1();

   // console.log(paper);
  drawSprites();
}

