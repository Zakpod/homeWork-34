const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow = [];

var engine,world;
function preload(){
  backgroundImg=loadImage("snow1.jpg");
}
function setup() {
  createCanvas(800,400);
}


function draw() {
  background(backgroundImg);  
  if(frameCount%20===0){
    snow.push(new Snow(random(200,400), random(50,100),100,100));
  }
  for (var j = 0; j < snow.length; j++) {
   console.log("snow display")
    snow[j].display();
  }
  drawSprites();

}