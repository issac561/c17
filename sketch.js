var gardenImg
var tom
var jerry
var catstart1,carmoving,cattouch,mousedance,mouseglass,mousecake
function preload() {
    gardenImg=loadImage("images/garden.png")
    catstart1=loadAnimation("images/cat1.png")
    catmoving=loadAnimation("images/cat2.png","images/cat3.png")
    cattouch=loadAnimation("images/cat4.png")
    mousedance=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseglass=loadAnimation("images/mouse4.png")
    mousecake=loadAnimation("images/mouse1.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(800,710,10,10)
cat.addAnimation("catstart",catstart1)
cat.scale=.15

}

function draw() {

    background(gardenImg);

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
 if(keyCode===LEFT_ARROW){
    cat.velocityX=-3
    cat.addAnimation("moving",catmoving)
    cat.changeAnimation("moving")
 }
  //For moving and changing animation write code here


}
