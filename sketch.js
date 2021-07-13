var track,trackImg; 
var runner,runImg,leftB,rightB; 
function preload(){
  //pre-load images
trackImg = loadImage("path.png"); 
runImg = loadAnimation("Runner-1.png","Runner-2.png"); 
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  track = createSprite(200,200); 
  track.addImage(trackImg); 
  track.velocityY = 4;
  track.scale = 1.2; 
  
  runner = createSprite(50,60); 
  runner.addAnimation("runner",runImg); 
  runner.scale = 0.1;

  leftB = createSprite(); 
  leftB.visible = false; 

  rightB = createSprite(); 
  rightB.visible = false; 

}

function draw() {
  background(0);

  if (track.y > 400){
    track.y = height/2; 
  }

  runner.x = mouseX; 

  runner.collide(leftB); 
  runner.collide(rightB); 
  
drawSprites(); 
}
