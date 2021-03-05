class Bird {
    constructor(x,y, options) {
        this.size=50;
        this.body = Bodies.rectangle(x,y,this.size, this.size,options);
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("red");
        rect(0,0,this.size, this.size);
        pop();
    }
}