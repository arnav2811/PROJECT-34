
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var topSlab;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  topSlab = new Roof()
  bobObject1 = new Bob(260, 200)
  bobObject2 = new Bob(280, 200)
  bobObject3 = new Bob(300, 200)
  bobObject4 = new Bob(320, 200)
  bobObject5 = new Bob(340, 200)
  rope1 = new Rope(bobObject1.bodies, topSlab.bodies, -60, 30)
  rope2 = new Rope(bobObject2.bodies, topSlab.bodies, -30, 30)
  rope3 = new Rope(bobObject3.bodies, topSlab.bodies, 0, 30)
  rope4 = new Rope(bobObject4.bodies, topSlab.bodies, 30, 30)
  rope5 = new Rope(bobObject5.bodies, topSlab.bodies, 60, 30)
	Engine.run(engine);
  
}


function draw() {
  
  background(rgb(100, 200, 250));
  topSlab.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  //myForce()
  textSize(20)
  text("AS THE WEATHER IS VERY WINDY SO PLEASE WAIT TILL I CLOSE THE  ", 10, 500)
  text("WINDOW AND SOON THE BALL WILL BECOME STILL",10, 520)
  text("TO MAKE THE CRADLE WORK DRAGG THE 1ST BALL FROM YOUR LEFT", 10, 540)
  drawSprites();
 
}
/*function myForce(){
  if(keyCode===UP_ARROW){
    Body.applyForce(bobObject1.bodies, bobObject1.bodies.position,{x:-2,y:-1})
  }
  }*/
/*  function mouseDragged(){
    Matter.Body.setPosition(bobObject5.bodies, {x: mouseX, y: mouseY})
  }
  function mouseDragged(){
    Matter.Body.setPosition(bobObject4.bodies, {x: mouseX, y: mouseY})
  }
  function mouseDragged(){
    Matter.Body.setPosition(bobObject3.bodies, {x: mouseX, y: mouseY})
  }
  function mouseDragged(){
    Matter.Body.setPosition(bobObject2.bodies, {x: mouseX, y: mouseY})
  }*/
  function mouseDragged(){
    Matter.Body.setPosition(bobObject1.bodies, {x: mouseX, y: mouseY})
  }
