let RectList = [];

function setup() {
    createCanvas(900, 900);
    for (let i = 0; i <= 750; i = i + 150) {
        RectList.push(new Rectangle(10 + i, 10, 130, 260, 6, 255, 255, 7));
        RectList.push(new Rectangle(10 + i, 10, 130, 130, 7.25, 0, 0, 0));
        }
    }

function draw() { 
    background(0);
    for (RList of RectList) {
        RList.MoveY();
        }
    
    Grid();
    } 