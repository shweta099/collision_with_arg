//   ////////////////////// collision code//////////////////
// var fixedRect, movingRect;

// function setup() {
//   createCanvas(1200,800);
//   fixedRect = createSprite(600, 400, 50, 80);
//   fixedRect.shapeColor = "green";
//   fixedRect.debug = true;
//   movingRect = createSprite(400,200,80,30);
//   movingRect.shapeColor = "green";
//   movingRect.debug = true;

// }

// function draw() {
//   background(0,0,0);  
//   movingRect.x = World.mouseX;
//   movingRect.y = World.mouseY;

//   console.log("hi");

//   if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
//       && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
//       && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
//       && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
//     movingRect.shapeColor = "red";
//     fixedRect.shapeColor = "red";
//   }
//   else {
//     movingRect.shapeColor = "green";
//     fixedRect.shapeColor = "green";
//   }

//   drawSprites();
// }

//////////////////// collision code///////////////////


///////////////////// bounce off code///////////////////
// var movingRect, fixedRect;

// function setup(){
//   createCanvas(1200,800);
//   fixedRect = createSprite(400,100,50,80);
//   fixedRect.shapeColor = 'green';
//   fixedRect.debug = true;

//   movingRect = createSprite(400,800,80,30);
//   movingRect.shapeColor = 'green';
//   movingRect.debug = true;

//   movingRect.velocityY = -5;
//    fixedRect.velocityY = +5;
// }

// function draw(){
//   background('skyblue');
  

//   //console.log(movingRect.x-fixedRect.x);

//   if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
//     fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2){
//     movingRect.velocityX = movingRect.velocityX * (-1);
//     fixedRect.velocityX = fixedRect.velocityX * (-1);
    
//   } 
//   if(movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
//     fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2){
//     movingRect.velocityY = movingRect.velocityY * (-1);
//     fixedRect.velocityY = fixedRect.velocityY * (-1);
//   }


//   drawSprites();
// }

////////////// bounce off code/////////////////////


///////////// collision with arguements////////////




  ////////////////////// collision code//////////////////
//   var fixedRect, movingRect, ob1, ob2;

//   function setup() {
//     createCanvas(1200,800);
//     fixedRect = createSprite(600, 400, 50, 80);
//     fixedRect.shapeColor = "green";
//     fixedRect.debug = true;
//     movingRect = createSprite(400,200,80,30);
//     movingRect.shapeColor = "green";
//     movingRect.debug = true;

//     ob1 = createSprite(200,200,30,30);
//     ob1.shapeColor = 'green';

//     ob2 = createSprite(250,250,30,30);
//     ob2.shapeColor = 'green';
  
//   }
  
//   function draw() {
//     background(0,0,0);  
//     movingRect.x = World.mouseX;
//     movingRect.y = World.mouseY;
  
//     console.log("hi");
//     if(isTouching(movingRect, ob1)){
//       movingRect.shapeColor = "blue";
//       ob1.shapeColor = "blue";
//     }else{
//       movingRect.shapeColor = "green";
//       ob1.shapeColor = "green";
//     }
   
  
//     drawSprites();
//   }
// /// ob1 - movingRect , ob2 - fixedRect
//   function isTouching(ob1,ob2){
//     if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
//       && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
//       && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
//       && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
//         return true;
//   }
//   else {
//         return false;
//   }
//   }
///////////// collision with arguements///////////


var fixedRect, movingRect;
var ob1, ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite(100,100,50,50);
  ob1.shapeColor = 'green';
  
  ob2 = createSprite(200,100,50,50);
  ob2.shapeColor = 'green';

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log("hi");

  if(isTouching(movingRect,ob1)){
    movingRect.shapeColor = "red";
    ob1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    ob1.shapeColor = "green";
  }

  drawSprites();
}
// ob1 - movingRect, ob2 - fixedRect
function isTouching(ob1, ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
      return true;
  }
  else {
      return false;
  }
}



















