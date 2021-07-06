const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, myworld;
function setup(){
  createCanvas(1200,400);
  engine = Engine.create();
  myworld = engine.world;

  ob = Matter.Bodies.rectangle(500,150,60,90)
  obj =Matter.Bodies.rectangle(650,280,50,30)
  Matter.World.add(myworld,[ob,obj])
  
  obje =Matter.Bodies.circle(130,180,50)
  Matter.World.add(myworld,obje)
}

function draw()
{
  Engine.update(engine)  
  background(220,136,61);
  rectMode(CENTER);
    rect(ob.position.x,ob.position.y,60,90);
    rect(obj.position.x,obj.position.y,50,70);
    circle(obje.position.x,obje.position.y,50);
  }
