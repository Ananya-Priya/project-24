
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1,dustbin2,dustbin3;
var paper

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,390,1200,20);

	dustbin1=new Dustbin(1000,373,200,5);

	dustbin2=new Dustbin(903,339,5,50);

	dustbin3=new Dustbin(1097,339,5,50)

	paper=new Paper(100,100,20)

	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  
  
 
}

function keyPressed(){

	if (keyCode=== UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});
		console.log(paper.body.position.x)
		console.log(paper.body.position.y)
	}
}



