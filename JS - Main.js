let R;

function setup() {
    createCanvas(900, 900);
    Rect = new Rectangle(30, 30, 130, 840, [0, 0, 0], 6, [0, 0, 0], 10);
    }

function draw() { 
    background(0);
    Grid();
    Rect.Move();
    } 