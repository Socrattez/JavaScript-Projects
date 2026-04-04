class Rectangle {
    constructor(x, y, sideA, sideB, speed, color, outlineFill, outlineSize) {
        this.x = x; 
        this.y = y; 
        this.sideA = sideA;
        this.sideB = sideB;
        this.speed = speed;
        this.color = color;
        this.outlineFill = outlineFill;
        this.outlineSize = outlineSize;
        }

    Show() {
        if (this.color == null) {
            noFill();
            stroke(this.outlineFill); 
            strokeWeight(this.outlineSize);
            rect(this.x, this.y, this.sideA, this.sideB);          
        }
        else {
            fill(this.color);
            stroke(this.outlineFill); 
            strokeWeight(this.outlineSize);
            rect(this.x, this.y, this.sideA, this.sideB); 
        }
    }

    MoveX() {
        this.Show();
        this.x = this.x + this.speed;
        
        if (this.x > 900 - this.sideA - 10) {
            this.speed = - this.speed;
            this.x = this.x + this.speed;
            } 

        else if (this.x < 10) {
            this.speed = - this.speed;
            this.x = this.x + this.speed;
            }  
        }

    MoveY() {
        this.Show();
        this.y = this.y + this.speed;
        
        if (this.y > 900 - this.sideB - 10) {
            this.speed = - this.speed;
            this.y = this.y + this.speed;
            } 

        else if (this.y < 10) {
            this.speed = - this.speed;
            this.y = this.y + this.speed;
            }  
        }
    }