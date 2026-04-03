class Rectangle {
    constructor(x, y, sideA, sideB, color, speed, outlineFill, outlineSize) {
        this.x = x; 
        this.y = y; 
        this.sideA = sideA;
        this.sideB = sideB;
        this.color = color;
        this.speed = speed;
        this.outlineFill = outlineFill;
        this.outlineSize = outlineSize;
        }

    Show() {
        fill(this.color);
        stroke(this.outlineFill); 
        strokeWeight(this.outlineSize);
        rect(this.x, this.y, this.sideA, this.sideB);          
        }

    Move() {
        this.Show();
        this.x = this.x + this.speed;
        
        if (this.x > 900 - this.sideA) {
            this.speed = - this.speed;
            this.x = this.x + this.speed;
            } 

        else if (this.x < 0) {
            this.speed = - this.speed;
            this.x = this.x + this.speed;
            }  
        }
    }