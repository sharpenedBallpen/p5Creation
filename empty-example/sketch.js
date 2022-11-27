function setup() {
  //setup code here
  createCanvas(400, 400);
  
  // minimum, maximum
  // 0-99
  let value = random(0, 100);
  console.log(value);
  
  noLoop();
}

function draw() {
  //draw code here
  background(0,0,102);
  
  noStroke();
  fill(255);
  for (let i=0; i<50; i++) {
    }
}

function mousePressed(){
  let x = random(0, width);
  let y = random(0, height);
  let dia = random(10, 40);
    
  let r = random(0, 256);
  let g = random(0, 256);
  let b = random(0, 256);
  fill(r, g ,b);
    
  circle(x,y, dia);
}