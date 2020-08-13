//Create variables here
var dog, goodDog, happyDog, database, foodS ,foodStock;

function preload()
{
  //load images here
  goodDog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {

  database = firebase.database();
  createCanvas(500, 500);
  
  imageMode(CENTER);
  image(goodDog, 100, 250, 0.5, 0.5);
  image(happyDog, 400, 250, 200, 200);

  dog = createSprite(250, 250, 20, 20);
  dog.scale = 0.25;
  dog.addImage(goodDog);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
background (46, 139, 87)

  if(keyWentDown (UP_ARROW)) {
      writeStock(foodS);
      dog.addImage(happyDog);
      
  }

  drawSprites();
  //add styles here
  textSize(30);
  fill ("black");
  stroke(4);
  text("foodStock"+ foodS, 150, 20);
  text ("Press up key to feed the dog.", 450, 20);

}

function readStock(data) {

 foodS = data.val();

}

function writeStock(x) {
 database.ref('/').update({
   Food:x
 })
}



