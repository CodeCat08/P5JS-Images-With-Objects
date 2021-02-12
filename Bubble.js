/*

*/
class Bubble {
  constructor(x,y,radius,pic) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.pic = pic;
  }
  
  isHovered(xpos,ypos) {
    if(xpos > this.x && xpos < (this.x + this.radius) &&
       ypos > this.y && ypos < (this.y + this.radius)) {
      return true;
    }
    else {
      return false;
    }
  }
  
  move() {
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
  }
  
  show() {
    image(this.pic, this.x, this.y, this.radius, this.radius);
  }
}// end class