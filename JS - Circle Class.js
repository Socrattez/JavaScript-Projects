class Circle {
    constructor(x, y, diameter, color, outlineFill, outlineSize) {
        this.x = x; 
        this.y = y; 
        this.d = diameter;
        this.color = color;
        this.outlineFill = outlineFill;
        this.outlineSize = outlineSize;
        }

    Show() {
        fill(this.color);
        stroke(this.outlineFill);
        strokeWeight(this.outlineSize);
        circle(this.x, this.y, this.d);
        }
    
    Move() {
        this.Show();
        this.x = random(width);
        this.y = random(height);
        }
    }