const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var world,engine
var particles =[];
var plinkos=[];
var divisions=[];
var ground
var divisionHeight=300;
var gameState = 'play';
var gameState = 'end';

var score =0;

function setup() {
  createCanvas(480,800);
 engine =Engine.create()
 world=engine.world
 ground=new Ground(240,790,480,20)
 for(var k=0;k <= width;k = k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}
for(var j = 40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75))
}
for (var j =15;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175))
}
for(var j = 40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,275))
}
for (var j =15;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,375))
}
}

function draw() {
  background("black");  
  Engine.update(engine)

//text("score=",50,30)
text("Score : " + score, 50, 50);
//strokeWeight(5);
//stroke(100);
textSize(100)
fill ("white")
 
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  
 ground.display();
 for(var k=0;k<divisions.length;k++){
   divisions[k].display()
 }

 for(var k=0;k<plinkos.length;k++){
  plinkos[k].display()
}
for(var k=0;k<particles.length;k++){
  particles[k].display()
}
//if(particles != null) {
 // particles.display();

 //// if(particles.body.position.y > 400){

  //  if(particles.body.position.x < 420){
      //   score = score + 500;
        // particles = null;

         //if(turn >= 5) gameState = "end";{

       //  }
         
  }
  // }
//}

//if(particles != null) {
 // particles.display();

  //if(particles.body.position.y > 400){

  //  if(particles.body.position.x < 820){
   //      score = score + 100;
    //     particles = null;
//
     //    if(turn >= 5) gameState = "end";
         
 // }
 //  }
//}

if(particles != null) {
  particles.display();

  if(particles.body.position.y > 400){

    if(particles.body.position.x < 1300){
         score = score + 200;
         particles = null;

         if(turn >= 5) gameState = "end";
         
  }
   }
}


if(gameState === "end") {
  background(bgImg);

strokeWeight(3);
stroke("black");
fill(random(0, 255), random(0, 255), random(0, 255));
textSize(50);
textFont("Segoe Print");

text("Score : " + score, 50, 50);
text("Press Space to Restart", 200, 550);

  
}
//if(plinkos.position.body.x<300 && plinkos.position.body.y>560){
  //  score=score+500
    //
//}

function mousePressed(){
  if(gameState !== "end"){
    turn++;
    particle = new Particle(mouseX, 10, 10)
  }
}

function keyPressed() {
  if(keyCode === 32){
    gameState = "play";
    background(0);
    turn = 0;
    score = 0;
   }
}

