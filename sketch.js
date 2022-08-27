const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bgImg, rabbitImg, fruitImg;

function preload(){
  bgImg = loadImage("background.png")
  rabbitImg = loadImage("Rabbit-01.png")
  fruitImg = loadImage("melon.png")
}
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,700,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  bunny = createSprite(250,625,100,100)
  bunny.addImage(rabbitImg)
  bunny.scale = 0.4

  cutBtn = createImg("cut_button.png")
  cutBtn.position(220,30)
  cutBtn.size(50,50)
  cutBtn.mouseClicked(drop)


  imageMode(CENTER);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bgImg,width/2,height/2,500,700)

  rope.show();
  ellipse(fruit.position.x,fruit.position.y,30,30);
  Engine.update(engine);
  ground.show();

  if (fruit != null){
    image(fruitImg,fruit.position.x,fruit.position.y,100,100)
  }

 
   drawSprites()
}
function drop(){
  rope.break()
  fruit_con.detach()
  fruit_con = null
}