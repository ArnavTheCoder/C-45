var spaceship,spaceship_right;

function preload(){
spaceship_right = loadImage("Spaceship_1.png");


}
function setup() {
  createCanvas(windowWidth,windowHeight);
 spaceship = createSprite(300, height-100, 50, 50);
spaceship.addImage("spaceship_right",spaceship_right);
spaceship.scale = 0.5
  
}

function draw() {
  background("black");  
  drawSprites();
}