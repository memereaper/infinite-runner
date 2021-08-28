var wall,wallImg
var winodow,windowImg,windowsGroup
var woodenLedge,woodenLedgeImg,woodenLedgeGroup
var player
var gameState = 0;
var lose,loseImg;

function preload(){
wallImg = loadImage("wall.jpg")


}

function setup() {
createCanvas(600,600);
  background("white")
  wall=createSprite(300,300);
  wall.addImage(wallImg)
  wall.velocityY = 1;
  wall.scale = 1.5;
  
  player = createSprite(200,200,25,25)
  player.shapeColor = "white"
  
  windowsGroup = new Group()
}

function draw() {
  
  background(0)
  if (wall.y >400){
    wall.y = 300
  }
  
  
  if(gameState === 0){
  if(keyDown("space") && player.y >= 159 && frameCount%25 === 0) {
      player.velocityY = -12;
    }
  
    player.velocityY = player.velocityY + 0.8
  
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+20
  }
  
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-20
  }
    
  
  
  
  spawnWindows()
  player.collide(windowsGroup)
    
    if(player.y > 600){
      gameState = 1
      
    }
  }
  
  if(gameState === 1){
   if(keyDown(ENTER)){
    player.y = 100;
    gameState=0
   }
  }
 drawSprites()
}

function spawnWindows(){
  if (frameCount%20 === 0){
    var window = createSprite(200,-50,80,25)
    window.shapeColor = "brown"
    
    

    
    window.x = Math.round(random(120,400))
    window.velocityY = 4;
    
    window.lifetime = 800;
    
    
    windowsGroup.add(window);
    
    
    
    
  }
}