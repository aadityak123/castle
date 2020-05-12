var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var ground;


function setup() {
  createCanvas(800,400);

  ground = createSprite(400,395,800,10);
  ground.shapeColor = "brown";
  
  block1 = createSprite(350,200,50,200);
  block1.velocityY = 10;

  block2 = createSprite(450,200,50,200);
  block2.velocityY = 10;

  block3 = createSprite(400,100,200,50);
  block3.velocityY = 10;

  block4 = createSprite(305.3,50,10,20);
  block4.velocityY = 10;

  block5 = createSprite(326.2,50,10,20);
  block5.velocityY = 10;

  block6 = createSprite(347.1,50,10,20);
  block6.velocityY = 10;

  block7 = createSprite(368.0,50,10,20);
  block7.velocityY = 10;

  block8 = createSprite(388.9,50,10,20);
  block8.velocityY = 10;

  block9 = createSprite(409.8,50,10,20);
  block9.velocityY = 10;

  block10 = createSprite(430.7,50,10,20);
  block10.velocityY = 10;

  block11 = createSprite(451.6,50,10,20);
  block11.velocityY = 10;

  block12 = createSprite(472.5,50,10,20);
  block12.velocityY = 10;

  block13 = createSprite(493.4,50,10,20);
  block13.velocityY = 10;

  block14 = createSprite(637,250,325,100);
  block14.velocityY = 10;

  block15 = createSprite(515,225,10,20);
  block15.velocityY = 20;

  block16 = createSprite(535,225,10,20);
  block16.velocityY = 20;

  block17 = createSprite(555,225,10,20);
  block17.velocityY = 20;

  block18 = createSprite(575,225,10,20);
  block18.velocityY = 20;

  block19 = createSprite(595,225,10,20);
  block19.velocityY = 20;
  
  block20 = createSprite(615,225,10,20);
  block20.velocityY = 20;
  
  block21 = createSprite(635,225,10,20);
  block21.velocityY = 20;

  block22 = createSprite(655,225,10,20);
  block22.velocityY = 20;

  block23 = createSprite(675,225,10,20);
  block23.velocityY = 20;

  block24 = createSprite(695,225,10,20);
  block24.velocityY = 20;

  block25 = createSprite(715,225,10,20);
  block25.velocityY = 20;

  block26 = createSprite(735,225,10,20);
  block26.velocityY = 20;

  block27 = createSprite(755,225,10,20);
  block27.velocityY = 20;

  block28 = createSprite(775,225,10,20);
  block28.velocityY = 20;

  block29 = createSprite(795,225,10,20);
  block29.velocityY = 20;

  block30 = createSprite(815,225,10,20);
  block30.velocityY = 20;
 
  block31 = createSprite(163,250,325,100);
  block31.velocityY = 10;

  block32 = createSprite(290,200,10,20);
  block32.velocityY = 20;

  block33 = createSprite(270,200,10,20);
  block33.velocityY = 20;

  block34 = createSprite(250,200,10,20);
  block34.velocityY = 20;

  block35 = createSprite(230,200,10,20);
  block35.velocityY = 20;

  block36 = createSprite(210,200,10,20);
  block36.velocityY = 20;

  block37 = createSprite(190,200,10,20);
  block37.velocityY = 20;

  block38 = createSprite(170,200,10,20);
  block38.velocityY = 20;

  block39 = createSprite(150,200,10,20);
  block39.velocityY = 20;

  block40 = createSprite(130,200,10,20);
  block40.velocityY = 20;

  block41 = createSprite(110,200,10,20);
  block41.velocityY = 20;

  block42 = createSprite(90,200,10,20);
  block42.velocityY = 20;

  block43 = createSprite(70,200,10,20);
  block43.velocityY = 20;

  block44 = createSprite(50,200,10,20);
  block44.velocityY = 20;

  block45 = createSprite(30,200,10,20);
  block45.velocityY = 20;

  block46 = createSprite(780,180,30,250);
  block46.velocityY = 10;

  block47 = createSprite(20,180,30,250);
  block47.velocityY = 10;

  block48 = createSprite(790,50,100,20);
  block48.velocityY = 10;

  block49 = createSprite(10,50,100,20);
  block49.velocityY = 10;

  block50 = createSprite(745,30,10,20);
  block50.velocityY = 10;

  block51 = createSprite(765,30,10,20);
  block51.velocityY = 10;

  block52 = createSprite(785,30,10,20);
  block52.velocityY = 10;

  block53 = createSprite(55,30,10,20);
  block53.velocityY = 10;

  block54 = createSprite(35,30,10,20);
  block54.velocityY = 10;

  block55 = createSprite(15,30,10,20);
  block55.velocityY = 10;

};

function draw() {
  background(255,0,0);

  block1.collide(ground);
  block2.collide(ground);
  block31.collide(ground);
  block46.collide(ground);
  block47.collide(ground);

  block3.collide(block1);

  block3.collide(block2);

  block4.collide(block3);
  block5.collide(block3);
  block6.collide(block3);
  block7.collide(block3);
  block8.collide(block3);
  block9.collide(block3);
  block10.collide(block3);
  block11.collide(block3);
  block12.collide(block3);
  block13.collide(block3);

  block14.collide(ground);

  block15.collide(block14);
  block16.collide(block14);
  block17.collide(block14);
  block18.collide(block14);
  block19.collide(block14);
  block20.collide(block14);
  block21.collide(block14);
  block22.collide(block14);
  block23.collide(block14);
  block24.collide(block14);
  block25.collide(block14);
  block26.collide(block14);
  block27.collide(block14);
  block28.collide(block14);
  block29.collide(block14);
  block30.collide(block14);

  block32.collide(block31);
  block33.collide(block31);
  block34.collide(block31);
  block35.collide(block31);
  block36.collide(block31);
  block37.collide(block31);
  block38.collide(block31);
  block39.collide(block31);
  block40.collide(block31);
  block41.collide(block31);
  block42.collide(block31);
  block43.collide(block31);
  block44.collide(block31);
  block45.collide(block31);

  block48.collide(block46);

  block49.collide(block47);

  block50.collide(block48);
  block51.collide(block48);
  block52.collide(block48);
 
  block53.collide(block49);
  block53.collide(block49);
  block54.collide(block49);
  block55.collide(block49);

 
  block28.debug = true;
 
  drawSprites();
}