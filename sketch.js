var x, y, s1, s2;

function setup() {
  createCanvas(1920, 1200);
  rectMode(CENTER);
  x = width/2;
  y = height/2;
  s1 = width;
  s2= height;

}

function draw() {
  background(24, 64, 22, 20);
145, 28, 35
  frameRate(13);
  fill(54, 186, 180, 70);
  
  noStroke();
  rect(x, y, s1, s2);

  s1 = s1 - 50;
  s2 = s2 - 50;

  if (s1 < 960) {
    s1 = width;
    s2=height;
  }

//   if(s2<540){
//   s2=height;
//   }

  
}
//11, 72, 94