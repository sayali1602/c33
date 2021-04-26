const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundImgg;
var maxSnow=100;
var snow=[];
var rand;

function preload() {
  backgroundImgg = loadImage("snow1.jpg");
}

function setup() {

  engine=Engine.create();
  world=engine.world;

  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

}

function draw() {
  Engine.update(engine);
  //background("backgroundImgg"); 
 // if(backgroundImgg)
  background(backgroundImgg); 
  rand = Math.round(random(1,4));

  if(frameCount%5===0) {
    snow.push(new Snow(random(0,800), 30, 30));
  }

  for(var j = 0; j<snow.length; j++) {
    snow[j].display()
  }
  drawSprites();
}