class SquareObjects {
    constructor(positionX, positionY, size, color, speed) {
        this.x = positionX; 
        this.y = positionY; 
        this.size = size;
        this.color = color;
        this.speed = speed;
        }

    ShowSquare() {
        fill(this.color);
        noStroke(); 
        square(this.x, this.y, this.size);          
        }

    MoveSquare() {
        this.ShowSquare();
        this.x = this.x + this.speed;
        
        if (this.x > 900 - this.size) {
            this.speed = - this.speed;
            this.x = this.x + this.speed;
            } 

        else if (this.x < 0) {
            this.speed = - this.speed;
            this.x = this.x + this.speed;
            }  
        }
    }