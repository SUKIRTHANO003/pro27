class Bob{
  constructor(x,y,r){
    var options={
      isStatic:true,
      restitution:0.8,
      friction: 1.0,
      density: 1.0
    }
    this.body = Bodies.circle(x,y,this.width,this.r/2,options);
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    fill("white");
    elipseMode(RADIUS);
    elipse(0,0,this.r,this.r);
    pop();
  }
}