var Start = 0
var Play = 1;
var End = 2;
var gameState = Start;
var pikachu,squirtle,charmander,bulbasaur,vulpix,staryu;
var pikachuImg,squirtleImg,charmanderImg,bulbasaurImg,vulpixImg,staryuImg;
var pikachuButton,squirtleButton,charmanderButton,bulbasaurButton,vulpixButton,staryuButton;
var bgImg , BgImg;
var computerPokemon;
var arena,arenaImg;
var pikachuImg1,squirtleImg1,bulbasaurImg1,vulpixImg1,staryuImg1,charmanderImg1;
var tackleImg,electricShockImg,thunderBoltImg,waterGunImg,hydroCannonImg,quickAttackImg,flameThrowerImg,emberImg,vineWipImg,razerLeafImg,rapidSpinImg;
var hp = 100;
var tackle,tackle2,tackle3

function preload(){
pikachuImg = loadImage("images/happyImg/pikachu.png")
squirtleImg = loadImage("images/happyImg/squirtle.png")
charmanderImg = loadImage("images/happyImg/charmander.png")
bulbasaurImg = loadImage("images/happyImg/bulbasaur.png")
vulpixImg = loadImage("images/happyImg/vulpix.png")
staryuImg = loadImage("images/happyImg/staryu.png")

bgImg = loadImage("images/backgroundImg/bg.jpg");
arenaImg = loadImage("images/backgroundImg/arena.jpg")

pikachuImg1 = loadImage("images/battleImg/pikachu1.png")
squirtleImg1 = loadImage("images/battleImg/squirtle1.png")
bulbasaurImg1 = loadImage("images/battleImg/bulbasaur1.png")
vulpixImg1 = loadImage("images/battleImg/vulpix1.png")
staryuImg1 = loadImage("images/battleImg/staryu1.png")
charmanderImg1 = loadImage("images/battleImg/charmander1.png")

tackleImg = loadImage("images/attackButtons/1.png")
electricShockImg = loadImage("images/attackButtons/2.png")
thunderBoltImg = loadImage("images/attackButtons/3.png")
waterGunImg = loadImage("images/attackButtons/4.png")
hydroCannonImg = loadImage("images/attackButtons/5.png")
quickAttackImg = loadImage("images/attackButtons/6.png")
flameThrowerImg = loadImage("images/attackButtons/7.png")
emberImg = loadImage("images/attackButtons/8.png")
vineWipImg = loadImage("images/attackButtons/9.png")
razerLeafImg = loadImage("images/attackButtons/10.png")
rapidSpinImg = loadImage("images/attackButtons/11.png")
}

function setup(){
createCanvas(1800,1200);
}

function draw(){

if(gameState === Start){
BgImg = createSprite(0,0,1800,800);
BgImg.addImage(bgImg);
BgImg.scale = 2.2;

pikachu = createSprite(200,200,20,20)
pikachu.addImage(pikachuImg);

 
squirtle = createSprite(1600,200,20,20)
squirtle.addImage(squirtleImg);


charmander = createSprite(150,600,20,20)
charmander.addImage(charmanderImg);


bulbasaur = createSprite(1600,600,20,20)
bulbasaur.addImage(bulbasaurImg);


vulpix = createSprite(200,1000,20,20)
vulpix.addImage(vulpixImg);


staryu = createSprite(1600,1000,20,20)
staryu.addImage(staryuImg);
background("bgImg");

}


if(mousePressedOver(pikachu)) {
gameState = Play;
var Player = createSprite(430,920,50,20)
Player.addImage(pikachuImg1);

var comP1 = createSprite(740,700,120,120)
comP1.addImage(charmanderImg1);

var arena1 = createSprite(600,600,1800,1200)
arena1.addImage(arenaImg);
arena1.depth = Player.depth-2;
arena1.scale = 2;

pikachu.x = 5000;
bulbasaur.x = 5000;
vulpix.x = 5000;
staryu.x = 5000;
charmander.x = 5000;
squirtle.x = 5000;


tackle = createSprite(800,1000,20,20)
tackle.addImage(tackleImg)
tackle2 = createSprite(980,1000,20,20)
tackle2.addImage(electricShockImg);
tackle3 = createSprite(885,1080,20,20)
tackle3.addImage(thunderBoltImg);

if(mousePressedOver(tackle)){
hp = hp-15;   
}
if(mousePressedOver(tackle2)){
hp = hp-20;   
}
if(mousePressedOver(tackle3)){
hp = hp-30;   
}
textSize(40);
stroke("red");
fill("blue");
text("HP"+hp,900,600);

}


if(mousePressedOver(bulbasaur)) {
gameState = Play;
var Player = createSprite(430,1000,50,20)
Player.addImage(bulbasaurImg1);

var comP1 = createSprite(700,780,120,120)
comP1.addImage(squirtleImg1);

var arena1 = createSprite(600,600,4000,4000)
arena1.addImage(arenaImg);
arena1.scale = 2;
arena1.depth = Player.depth-2

pikachu.x = 5000;
bulbasaur.x = 5000;
vulpix.x = 5000;
staryu.x = 5000;
charmander.x = 5000;
squirtle.x = 5000;

var tackle = createSprite(800,1000,20,20)
tackle.addImage(tackleImg)
var tackle2 = createSprite(980,1000,20,20)
tackle2.addImage(vineWipImg);
var tackle3 = createSprite(885,1080,20,20)
tackle3.addImage(razerLeafImg);


if(mousePressedOver(tackle)){
hp = hp-15;   
}
if(mousePressedOver(tackle2)){
hp = hp-25;   
}
if(mousePressedOver(tackle3)){
hp = hp-35;   
}
textSize(40);
stroke("red");
fill("blue");
text("HP"+hp,900,600);
}



if(mousePressedOver(squirtle)) {
gameState = Play;
var Player = createSprite(530,1050,50,20)
Player.addImage(squirtleImg1);

var comP1 = createSprite(760,700,120,120)
comP1.addImage(pikachuImg1);

var arena1 = createSprite(600,600,4000,4000)
arena1.addImage(arenaImg);
arena1.scale = 2;
arena1.depth = Player.depth-2

pikachu.x = 5000;
bulbasaur.x = 5000;
vulpix.x = 5000;
staryu.x = 5000;
charmander.x = 5000;
squirtle.x = 5000;

var tackle = createSprite(800,1000,20,20)
tackle.addImage(tackleImg)
var tackle2 = createSprite(980,1000,20,20)
tackle2.addImage(waterGunImg);
var tackle3 = createSprite(885,1080,20,20)
tackle3.addImage(hydroCannonImg); 


if(mousePressedOver(tackle)){
hp = hp-15;   
}
if(mousePressedOver(tackle2)){
hp = hp-20;   
}
if(mousePressedOver(tackle3)){
hp = hp-25;   
}
textSize(40);
stroke("red");
fill("blue");
text("HP"+hp,900,600);
}


if(mousePressedOver(charmander)) {
gameState = Play;
var Player = createSprite(520,1000,50,20)
Player.addImage(charmanderImg1);

var comP1 = createSprite(750,700,120,120)
comP1.addImage(bulbasaurImg1);

var arena1 = createSprite(600,600,4000,4000)
arena1.addImage(arenaImg);
arena1.scale = 2;
arena1.depth = Player.depth-2

pikachu.x = 5000;
bulbasaur.x = 5000;
vulpix.x = 5000;
staryu.x = 5000;
charmander.x = 5000;
squirtle.x = 5000;

var tackle = createSprite(800,1000,20,20)
tackle.addImage(tackleImg)
var tackle2 = createSprite(980,1000,20,20)
tackle2.addImage(flameThrowerImg);
var tackle3 = createSprite(885,1080,20,20)
tackle3.addImage(emberImg);  

if(mousePressedOver(tackle)){
hp = hp-15;   
}
if(mousePressedOver(tackle2)){
hp = hp-25;   
}
if(mousePressedOver(tackle3)){
hp = hp-40;   
}
textSize(40);
stroke("red");
fill("blue");
text("HP"+hp,900,600);
}


if(mousePressedOver(vulpix)) {
gameState = Play;
var Player = createSprite(500,1000,50,20)
Player.addImage(vulpixImg1);
Player.scale = 1.55;

var comP1 = createSprite(740,720,120,120)
comP1.addImage(staryuImg1);

var arena1 = createSprite(600,600,4000,4000)
arena1.addImage(arenaImg);
arena1.scale = 2;
arena1.depth = Player.depth-2

pikachu.x = 5000;
bulbasaur.x = 5000;
vulpix.x = 5000;
staryu.x = 5000;
charmander.x = 5000;
squirtle.x = 5000;

var tackle = createSprite(800,1000,20,20)
tackle.addImage(tackleImg)
var tackle2 = createSprite(980,1000,20,20)
tackle2.addImage(flameThrowerImg);
var tackle3 = createSprite(885,1080,20,20)
tackle3.addImage(quickAttackImg);  

if(mousePressedOver(tackle)){
hp = hp-15;   
}
if(mousePressedOver(tackle2)){
hp = hp-20;   
}
if(mousePressedOver(tackle3)){
hp = hp-30;   
}
textSize(40);
stroke("red");
fill("blue");
text("HP"+hp,900,600);
}




if(mousePressedOver(staryu)) {
gameState = Play;
var Player = createSprite(470,1000,50,20)
Player.addImage(staryuImg1);

var comP1 = createSprite(760,780,120,120)
comP1.addImage(vulpixImg1);

var arena1 = createSprite(600,600,4000,4000)
arena1.addImage(arenaImg);
arena1.scale = 2;
arena1.depth = Player.depth-2

pikachu.x = 5000;
bulbasaur.x = 5000;
vulpix.x = 5000;
staryu.x = 5000;
charmander.x = 5000;
squirtle.x = 5000;

var tackle = createSprite(800,1000,20,20)
tackle.addImage(tackleImg)
var tackle2 = createSprite(980,1000,20,20)
tackle2.addImage(waterGunImg);
var tackle3 = createSprite(885,1080,20,20)
tackle3.addImage(rapidSpinImg);


if(mousePressedOver(tackle)){
hp = hp-15;   
}
if(mousePressedOver(tackle2)){
hp = hp-25;   
}
if(mousePressedOver(tackle3)){
hp = hp-20;   
}
textSize(40);
stroke("red");
fill("blue");
text("HP"+hp,900,600);
}

console.log(gameState);

drawSprites();

}
