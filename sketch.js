//Create variables here
var dog, happyDog, dog_img
var FoodS
function preload()
{ 
happyDog = loadAnimation("images/happydog.png")
dog_img = loadAnimation("images/Dog.png")
//load images here
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database()
  dog = createSprite(400,350)
  dog.addAnimation("di",dog_img)
  dog.addAnimation("hd",happyDog)
dog.scale = 0.1

}


function draw() {  
  database.ref("Food").on("value",(data)=>{FoodS = data.val()})
  if (keyDown(UP_ARROW)){
    FoodS = FoodS-1
    dog.changeAnimation("hd",happyDog)
    database.ref("/").update({Food:FoodS})
  }
  text("Press Up Arrow to Feed Your Dog", 100,100)
  drawSprites();
  //add styles here

}



