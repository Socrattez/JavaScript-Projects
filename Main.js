let SqObjects = [];

function setup() {
    createCanvas(900, 900);
    for (let i = 0; i < 600; i = i + 150) {
        SqObjects.push(new SquareObject(30, 170 + i, 130, [255, 255, 255], 5));
        }
    }

function draw() { 
    background(0);
    for (let Sq of SqObjects) {
        Sq.MoveSquare();
        } 
    }