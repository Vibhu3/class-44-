function preload(){
  boyImg=loadImage("boy.png")
  lavaImg=loadImage("lava.jpg")
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  boy=createSprite(200,350,10,10)
  boy.addImage(boyImg)
  boy.scale=0.01
}

function draw() {
  background(lavaImg);  
  if(keyDown(UP_ARROW)){
    boy.velocityY=-4
  }
  if(keyDown(DOWN_ARROW)){
    boy.velocityY=4
  }
  if(keyDown(RIGHT_ARROW)){
    boy.velocityX=4
  }
  if(keyDown(LEFT_ARROW)){
    boy.velocityX=-4
  }
  drawSprites();
}