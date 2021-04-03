const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var ground, platform1, platform2;
var box1, box2, box3, box4, box5, box6, box7;
var boxx1, boxx2, boxx3, boxx4, boxx5;
var boxxx1, boxxx2, boxxx3;
var boxxxx1;
var bo1, bo2, bo3, bo4, bo5;
var b1, b2, b3;
var b4;

function preload() {

}

function setup() {
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500, 700, 1000, 50);

    platform1 = new Ground(300, 450, 300, 10);
    platform2 = new Ground(700, 320, 150, 10)

    box1 = new Box(210, 420, 30, 50);
    box2 = new Box(240, 420, 30, 50);
    box3 = new Box(270, 420, 30, 50);
    box4 = new Box(300, 420, 30, 50);
    box5 = new Box(330, 420, 30, 50);
    box6 = new Box(360, 420, 30, 50);
    box7 = new Box(390, 420, 30, 50);

    boxx1 = new Box(240, 370, 30, 50);
    boxx2 = new Box(270, 370, 30, 50);
    boxx3 = new Box(300, 370, 30, 50);
    boxx4 = new Box(330, 370, 30, 50);
    boxx5 = new Box(360, 370, 30, 50);

    boxxx1 = new Box(270, 320, 30, 50);
    boxxx2 = new Box(300, 320, 30, 50);
    boxxx3 = new Box(330, 320, 30, 50);

    boxxxx1 = new Box(300, 270, 30, 50);

    bo1 = new Box(700, 290, 30, 50);
    bo2 = new Box(670, 290, 30, 50);
    bo3 = new Box(730, 290, 30, 50);
    bo4 = new Box(640, 290, 30, 50);
    bo5 = new Box(760, 290, 30, 50);

    b1 = new Box(700, 240, 30, 50);
    b2 = new Box(670, 240, 30, 50);
    b3 = new Box(730, 240, 30, 50);
    b4 = new Box(700, 190, 30, 50);


}

function draw() {
    background('pink');

    ground.display();
    platform1.display();
    platform2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    boxx1.display();
    boxx2.display();
    boxx3.display();
    boxx4.display();
    boxx5.display();

    boxxx1.display();
    boxxx2.display();
    boxxx3.display();

    boxxxx1.display();

    bo1.display();
    bo2.display();
    bo3.display();
    bo4.display();
    bo5.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    
    textSize(22);
    text('Drag the hexagonal stone and release it, to launch towards the blocks', 0, 200);
}