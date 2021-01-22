class Slingshot{
    constructor(bodyA, pointB){
    var options = {
    bodyA: bodyA,
    pointB:pointB,
    stiffness: 0.05,
    length: 10
    }
    this.pointB=pointB;
    this.slings = Constraint.create(options);
    World.add(world, this.slings);
    }
    fly(){
    this.slings.bodyA=null;    
    }
    attach(body){
        this.slings.bodyA = body;   
    }
    display(){
    if(this.slings.bodyA){
    var posA = this.slings.bodyA.position;
    var posB = this.pointB;
    strokeWeight(4);
    stroke("white");
    line(posA.x, posA.y, posB.x, posB.y);
    }
    }   
   
    }