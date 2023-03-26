var explorer, expWalking
  var bg, bgImg

function preload() {
  expWalking = loadAnimation("assets/E1.png","assets/E2.png","assets/E3.png","assets/E4.png","assets/E5.png")
  bgImg = loadImage("assets/background.jpg")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2,height/2)
  bg.addImage(bgImg)
  bg.scale = 4.3
  bg.velocityX = -3
  
  explorer = createSprite(400, 200, 50, 50);
  explorer.scale = 0.7
  explorer.addAnimation("walking",expWalking)

  
  
  
}


function draw() {
  background("pink");
  console.log(bg.x)  
  if(bg.x<0){
    bg.x = width/2
  }
  drawSprites();
}