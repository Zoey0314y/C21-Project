var wall,thickness;
var bullet,speed,weight


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(500,200,40,40);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  bullet.shapeColor = "white";
  speed = random(223,321);
  weight = random(30,52);

  thickness = random(22,83);

}

function draw() {
  background(255,255,255); 
   
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

  }
  if(damage>10){
    wall.shapeColor = (255,0,0);

  }
  if(damage<10){
    wall.shapeColor = (0,225,0);
    
  }
}