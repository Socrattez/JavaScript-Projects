let Increase_A = 100;
let Increase_B = 120.83;

let RectList = [];

function setup() {
    createCanvas(900, 900);
    for (let x_offset = 0; x_offset <= 750; x_offset = x_offset + 150) {
        RectList.push(new Rectangle(10 + x_offset, 10 + Increase_A, 130, 260, 6, 255, 255, 7));
        RectList.push(new Rectangle(10 + x_offset, 10 + Increase_B, 130, 130, 7.25, 0, 0, 0));
        Increase_A = Increase_A + 100;
        Increase_B = Increase_B + 120.835;
        }
    }

function draw() { 
    background(0);
    for (RList of RectList) {
        RList.MoveY();
        }
    
    GridBlack();
    GridWhite();
    } 