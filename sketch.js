
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj,groundObject, launcherObject;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var mango9;
var mango10;
var s1;
var stone
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	mango1=loadImage("images/mango.png")
	s1=loadImage("images/stone.png")

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	var options={
		bodyA:boy.body,
		pointB:s1.body,
		length:3,
		stiffness:0.3
		}
	  
		this.stone=Constraint.create(options)
		line(boy.body.y,boy.body.x,s1.body.y,s1.body.x)
		
    var options={
		isStatic:true
	}
	mango1=new mango(1100,100,30,options);
	mango2=new mango(1150,150,30,options);
	mango3=new mango(900,200,30,options);
	mango4=new mango(1000,150,30,options);
	mango5=new mango(1200,200,30,options);
	mango6=new mango(1100,90,30,options);
	mango7=new mango(1030,95,30,options);
	mango8=new mango(1000,100,30,options);
	mango9=new mango(1060,170,30,options);
	mango10=new mango(995,190,30,options);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	s1=new Stone(200,200,20,20)
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  s1.display();
  groundObject.display();
  drawSprites();
}

