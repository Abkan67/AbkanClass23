class Pig{
    constructor(x,y,opt) {
        this.size=60;
        this.body = Bodies.rectangle(x,y,this.size, this.size,opt);
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("green");
        rect(0,0,this.size,this.size);
        pop();
    }
}