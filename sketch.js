/*
This program associates images with bubble objects.
Bubbles are given a "pic" property which is a randomly
assigned .jpg file. When a bubble object is clicked,
the bubbles' image is re-rolled.
The newer "template literal" is used to get the file
path of the images inside a for-loop.
Cat images from "kaggle cats and dogs dataset":
https://www.microsoft.com/en-us/download/details.aspx?id=54765
*/
let bubbles = []; // initialize array of bubble objects
let cats = []; //initialize array of cat pics

/*
Preload is used to load media assets
before running rest of program.
*/
function preload() {
  //load pics named "0.jpg" though "100.jpg"
  for(let i = 0; i <= 100; i++) {
    let tempCat = loadImage(`cats/${i}.jpg`);
    cats.push(tempCat);
  }
}

function setup() {
  createCanvas(1280, 720);
  //create 30 bubble objects and add them to
  //the bubbles array
  for(let i = 0; i < 15; i++) {
    let radius = random(100,250);
    let x = random(0,(width-radius));
    let y = random(0,(height-radius));
    let pic = random(cats);
    let tempBubble = new Bubble(x,y,radius,pic);
    bubbles.push(tempBubble);
  }
}

function mousePressed() {
  for(let i = 0; i < bubbles.length; i++) {
    if(bubbles[i].isHovered(mouseX,mouseY) == true) {
      //when bubble is pressed, change bubble pic property
      bubbles[i].pic = random(cats);
    }
    else {
      //do something when not pressed
    }
  }
}

function draw() {
  background(0);
  for(let i = 0; i < bubbles.length; i++) {
  bubbles[i].move();
  bubbles[i].show();
  }
}