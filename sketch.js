//Create variables here
var dog, happyDog,dogI, happyDogI, database, foodS, foodStock;
function preload()
{
  //load images here
  dogI = loadImage("images/dogImg.png");
  happyDogI = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300,50,50);
  dog.addImage(dogI);
  dog.scale = 0.2;
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogI);
}
  drawSprites();
  //add styles here
fill("white");
  textSize(20);
text("food: " + foodS, 200, 100);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref("/").update({
    food:x
  })
}
