const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var bird, slingshot;
var ball,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function preload() {

}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(700,50,500,20);
    ball = new Ball(200, 200, 50, 50);
    ball2 = new Ball(300, 200, 50, 50);
    ball3 = new Ball(400, 200, 50, 50);
    ball4 = new Ball(500, 200, 50, 50);
    ball5 = new Ball(600, 200, 50, 50);

    rope1 = new Rope(ball.body,{x:500, y:50});
    rope2 = new Rope(ball2.body,{x:600, y:50});
    rope3 = new Rope(ball3.body,{x:700, y:50});
    rope4 = new Rope(ball4.body,{x:800, y:50});
    rope5 = new Rope(ball5.body,{x:900, y:50});
}

function draw(){
     background("lightgrey");
     Engine.update(engine);
     ground.display();
     ball.display();
     ball2.display();
     ball3.display();
     ball4.display();
     ball5.display();

     rope1.display();
     rope2.display();
     rope3.display();
     rope4.display();
     rope5.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body, ball.body.position, {x:-50, y:-50})
    }
}