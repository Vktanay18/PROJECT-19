var runman , runmanImg
var background , backgroungImg
var brocoli , brocoliImg
var pizza , pizzaImg
var noodles, noodlesImg
var hamburger , hamburgerImg
var pumkin , punmkinImg
var tomamto , tomatoImg
var health = 100
var brocoliGroup
var pizzaGroup
var noodlesGroup
var pumkinGroup
var hamburgerGroup
var tomatoGroup

function preload(){
brocoliImg = loadImage("brocoli.png")
runmanImg = loadAnimation("runman1.png","runman2.png","runman3.png","runman4.png","runman5.png")
pizzaImg = loadImage("pizza.png")
noodlesImg = loadImage("noodles.png")
tomatoImg = loadImage("tomato.png")
punmkinImg = loadImage("pumkin.png")
hamburgerImg = loadImage("hamburger.png")
}

function setup() {
createCanvas(800,800)
runman = createSprite(90,350)
runman.scale = 2
runman.addAnimation("running",runmanImg)
brocoliGroup = new Group();
pizzaGroup = new Group();
noodlesGroup = new Group();
pumkinGroup = new Group();
hamburgerGroup = new Group();
tomatoGroup = new Group();
}

function draw() {
background("Red")
runman.y = World.mouseY
textSize(20)
text("HEALTH  =  "+health,600,50)
if(frameCount%150 == 0){
spawnBrocoli()
}
if(frameCount%300 == 0){
spawnPizza()
}
if(frameCount%450 == 0){
spawnNoodles()
}
if(frameCount%600 == 0){
spawnTomato()
}
if(frameCount%750 == 0){
spawnPumpkin()
}
if(frameCount%900 == 0){
spawnhamburger()
}
if(brocoliGroup.isTouching(runman)){
brocoli.destroy()
health +=10
}
if(pizzaGroup.isTouching(runman)){
pizza.destroy()
health -= 10
}
if(noodlesGroup.isTouching(runman)){
noodles.destroy();
health -= 7
}
if(tomatoGroup.isTouching(runman)){
tomato.destroy()
health += 20
}
if(pumkinGroup.isTouching(runman)){
pumkin.destroy()
health += 75
}
if(hamburgerGroup.isTouching(runman)){
hamburger.destroy()
health -= 50
}
drawSprites();
}


function spawnBrocoli(){
brocoli = createSprite(700,Math.round(random(100,700)));
brocoli.addImage("brocoli",brocoliImg)
brocoli.scale = 0.25
brocoli.velocityX = -4
brocoliGroup.add(brocoli);
}

function spawnPizza(){
pizza = createSprite(800,Math.round(random(200,500)));
pizza.addImage("pizza",pizzaImg)
pizza.scale = 0.25
pizza.velocityX = -6
pizzaGroup.add(pizza)
}
function spawnNoodles(){
noodles = createSprite(600,Math.round(random(200,600)))
noodles.addImage("noodles",noodlesImg)
noodles.velocityX = -8
noodles.scale = 0.3
noodlesGroup.add(noodles)
}

function spawnTomato(){
tomato = createSprite(800,Math.round(random(200,600)))
tomato.addImage("tomato",tomatoImg)
tomato.velocityX = -4
tomato.scale = 0.3
tomatoGroup.add(tomato)
}

function spawnPumpkin(){
pumkin = createSprite(0,0)
pumkin.addImage("pumkin",punmkinImg)
pumkin.velocityX = 5
pumkin.velocityY = 3.7
pumkin.scale = 0.2
pumkinGroup.add(pumkin)
}

function spawnhamburger(){
hamburger = createSprite(800,Math.round(random(100,700)));
hamburger.addImage("hamburger",hamburgerImg)
hamburger.velocityX = -5
hamburger.velocityY = -6
hamburger.scale = 0.25
hamburgerGroup.add(hamburger)
}