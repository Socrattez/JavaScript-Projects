let u = 0;
let Increase_A = 0;
let Increase_B = 0;
let RectList = [];
let CircList = [];

function setup() {
    createCanvas(900, 900);

    for (let u = 0; u < 50; u++) {
        CircList.push(new Circle(random(width), random(height), random(20, 80), 0, 200, 4)); 
        }

    for (let x_offset = 0; x_offset <= 750; x_offset = x_offset + 150) {
        RectList.push(new Rectangle(10 + x_offset, 10 + Increase_A, 130, 260, 10, 255, 255, 7));
        RectList.push(new Rectangle(10 + x_offset, 10 + Increase_B, 130, 130, 10 * (75/62), 0, 0, 0));
        Increase_A = Increase_A + 124;
        Increase_B = Increase_B + 150;
        }
    }

function draw() { 
    background(0);
    for (let c of CircList) {
        c.Move();
        }
        
    for (RList of RectList) {
       RList.MoveY();
       }

    GridBlack();
    GridWhite();
    }