let t;
let g;
let h;
let b;

function GridWhite() {
    for (g = 0; g <= 850; g = g + 50) {
       for (h = 0; h <= 850; h = h + 50) {
            stroke(255);
            strokeWeight(3);
            line(50 + g, h, h, 50 + g);
            }
        }
    }

function GridBlack() {
    for (b = 0; b <= 850; b = b + 50) {
       for (t = 0; t <= 850; t = t + 50) {
            stroke(0);
            strokeWeight(3);
            line(63 + b, t, t, 63 + b);
            }
        }
    }