var fr,mr;

function setup() {
  createCanvas(1200,800);
  fr = createSprite(400, 100, 100, 50);
  fr.shapeColor = "green"
  fr.debug = true;
 fr.velocityY = 5;
mr  = createSprite(400, 800, 50, 100);
  mr.shapeColor = "green"
  mr.debug = true;
  mr.velocityY = -5;
}

function draw() {
  background(0); 
  
  
 bounce(fr,mr);

  drawSprites();
}

function bounce(object1,object2) {

  if (object1.x - object2.x < object2.width/2 + object1.width/2 && 
    object2.x - object1.x < object2.width/2 + object1.width/2 )
    {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1)
    }
    if (object2.y - object1.y < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.width/2 + object1.width/2){

      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1)

  }

}