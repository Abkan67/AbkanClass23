class Log{
    constructor(x,y,w,h,opt) {
        this.width=w;this.height=h;
        this.body=Matter.Bodies.rectangle(x,y,w,h,opt);
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("brown");
        rect(0,0,this.width,this.height)
        pop();
    }
}