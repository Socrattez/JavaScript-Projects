let SqObjects = [];

function setup() {
    createCanvas(900, 900);
    for (let i = 0; i < 900; i = i + 150) {
        SqObjects.push(new SquareObjects(30, 10 + i, 130, [255, 255, 255], 6));
        }
    }

function draw() { 
    background(0);
    Grid();
    for (let Sq of SqObjects) {
        Sq.MoveSquare();
        } 
    }