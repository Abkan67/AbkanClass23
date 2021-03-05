const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground, bird;
var pigs = [];
var logs = [];
var boxes = [];
function setup(){
    angleMode(RADIANS);
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    bird=new Bird(0,100, {});
    pigs.push(new Pig(200,200,{}));
    logs.push(new Log(200,300,100,10, {}));
    boxes.push(new Box(1000,375,75,75));
    pigs.push(new Pig(900,375,{}));
    boxes.push(new Box(800,375,75,75));
    logs.push(new Log(900,320,350,20, {}));
    ground = new Ground(width/2,height,width,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    boxes.forEach((box,index)=>{box.display();})
    bird.display();
    ground.display();
    pigs.forEach((pig, index)=>{pig.display();})
    logs.forEach((log,index)=>{log.display();})
}