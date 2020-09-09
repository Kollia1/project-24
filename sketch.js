
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper1,bucket1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	paper1=new Paper(50,650)


	side1=new Rectangle(280,655,10,100)
	side2=new Rectangle(390,675,200,10)
	side3=new Rectangle(500,655,10,100)
	ground = new Ground(400,690,800,20);
	Engine.run(engine);

	
  
}


function draw() {

  background(0);
  
  rectMode(CENTER)


  paper1.display()
  ground.display()
  side1.display();
  side2.display();
  side3.display();

 
}



function keyPressed() {
	if(keyCode===UP_ARROW){
		console.log("hello")
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150,y:-100})
		
		

	}

}