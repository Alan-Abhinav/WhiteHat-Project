var pc
var you , you1 , you3 , city;
function preload(){
you3 = loadImage( "Images/You Charecter/you (3).png");
you1 =  loadImage("Images/You Charecter/you (1).png");
you = loadImage("Images/You Charecter/you.png");
 city = loadImage("Images/city.jpg");
}
function setup() {
  createCanvas(800,400);
  pc = createSprite (800, 130 , 50, 50);
  pc.addImage(you)
}

function draw() {
  background(city);  
  drawSprites();
}