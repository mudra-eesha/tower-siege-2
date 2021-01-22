class Box2{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.0
        }
        this.v = 255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
    
display(){
    console.log(this.body.speed)
    if(this.body.speed<3){
     push();
     var pos =this.body.position;     
     rectMode(CENTER);
     fill("blue");
strokeWeight(1);
stroke("black");
     rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
    else{
        World.remove(world,this.body)
        push();
        this.v = this.v -5
        pop();
    }
}
}
