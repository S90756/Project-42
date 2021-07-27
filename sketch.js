var iss, spacecraft,hasDocked=false
var bg,issimg,scimg1,scimg2,scimg3,scimg4

function preload(){
bg= loadImage("Images/spacebg.jpg")
issimg= loadImage("Images/iss.png")
scimg1= loadImage("Images/spacecraft1.png")
scimg2= loadImage("Images/spacecraft2.png")
scimg3= loadImage("Images/spacecraft3.png")
scimg4= loadImage("Images/spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(400,200);
  iss.addImage(issimg);
  iss.scale=0.5
  spacecraft= createSprite(360,280)
  spacecraft.addImage(scimg1)
  spacecraft.scale=0.1
}


function draw() {
  background(bg); 
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scimg3)
      spacecraft.x=spacecraft.x-1

    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scimg4)
      spacecraft.x=spacecraft.x+1

    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg2)
      spacecraft.y=spacecraft.y+1

    }
    if(keyDown("UP_ARROW")){
      spacecraft.y=spacecraft.y-1

    }

  } 
  if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
    hasDocked=true
    text("Docking Successful",300,330)
  }

  drawSprites();
}