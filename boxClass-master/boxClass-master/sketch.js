const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var pig;
var log;
var bird

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1100,750,70,70);

    box2=new Box(850,750,70,70);

    box3=new Box(850,500,70,70);

    box4=new Box(1100,500,70,70);

    box5=new Box(970,400,70,70);

    ground=new Ground(600,790,1200,20);

   pig=new Pig(970,750);

   pig2=new Pig(970,500);

   log=new Log(970,550,350,PI/2);

   log2=new Log(970,450,350,PI/2);

   log3=new Log(1050,400,130,-PI/7);

   log4=new Log(910,400,130,PI/7);

   bird=new Bird(300,170,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}