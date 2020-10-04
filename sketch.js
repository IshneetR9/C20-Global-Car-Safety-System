var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(100, 200, 50, 50);
  fill(80, 80, 80);
  wall = createSprite(1500, 200, 60, 200);
  speed = random(55, 90);
  weight = random (400, 3000)
  car.velocityX = speed;
}

function draw() {
  background(0);  

  if(collision())
  {
    car.velocityX = 0;
    deformation = (0.5*weight*speed*speed)/22500;
  if (deformation<100)
  {
    car.shapeColor = "green";
  }
  else if(deformation>100 && deformation<180)
  {
    car.shapeColor = "yellow";
  }
  else if(deformation>180)
  {
    car.shapeColor = "red";
  }
}
  drawSprites();
}

function collision()
{
  if(wall.x-car.x <= wall.width/2+car.width/2)
  {
    return true;
  }
  else
  {
    return false;
  }
}
