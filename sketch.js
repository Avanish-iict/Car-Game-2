//Creating the variables.
var bullet,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(180, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
   wall.shapeColor = ("pink");
   speed = random(68,90);
   weight = random(400,1500);
   bullet.velocityX = speed;
   wall.width = 60;
   
}

function draw() {
  background(0); 
  
  bullet.collide(wall);
  bullet.shapeColor = "white";

  if(wall.x-bullet.x < (bullet.width + wall.width)){

    wall.velocityX = 0;
   
    var deformation = 0.5*weight * speed *speed/22500;

    if(deformation > 10){
       wall.shapeColor = color(255,0,0);
    }

    if(deformation < 100){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}


