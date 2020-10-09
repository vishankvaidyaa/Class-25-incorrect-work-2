class Paper extends BaseClass{
    constructor(x, y) {
      super(x,y,50,50);
      this.image=loadImage("sprites/paper.png");
    }
    display(){
      this.body=Bodies.circle(x,y,r,[options]);
      super.display();
    }
  }