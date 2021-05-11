var bird, background1Img, background1,birdImg,helicopterImg,helicopter,monsterImg,monster,pillarImg,pillar;
var helicopterGroup;
var pillarGroup;
var monsterGroup;

function preload(){
  background1Img=loadImage("images/background.jpeg");
  birdImg=loadImage("images/bird4.jpeg");
  pillarImg=loadImage("images/pillar2.jpeg");
  helicopterImg=loadImage("images/helicopter.png");
  monsterImg=loadImage("images/monster.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background1=createSprite(windowWidth/2,windowHeight/2 , windowWidth, windowHeight);
  background1.addImage(background1Img);
  background1.scale=5;

  bird=createSprite(windowWidth/3,windowHeight/3,windowWidth/2,windowHeight/2);
  bird.addImage(birdImg);
  bird.scale=0.5;

  helicopterGroup=new Group();
  pillarGroup=new Group();
  monsterGroup=new Group();


  
}

function draw() {
  background("white"); 
  bird.velocityY=0; 
  obstacle();

  if(keyDown(UP_ARROW)){
    bird.velocityY=-4;
  }
  
  if(keyDown(DOWN_ARROW)){
    bird.velocityY=4;
  }




  drawSprites();
}

function obstacle(){
  if(frameCount % 200===0){
  helicopter=createSprite(windowWidth,windowHeight-600);
  

 
    helicopter.addImage(helicopterImg);
 
  
  helicopter.velocityX=-4;
  helicopter.scale=0.5;
  helicopter.y=random(50,400);
  helicopter.lifetime=350;
  helicopterGroup.add(helicopter);
 //console.log(windowWidth/4);
 // s=d/t  
}
}




