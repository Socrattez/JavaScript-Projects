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
        this.StartingPoint = y;
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

    MoveY() {
    this.Show();
    this.y = this.y + this.speed;

    let bottomLimit = height - this.sideB - 10;
    let topLimit = 10;
   
    if (this.y > bottomLimit) {
        let overshoot = this.y - bottomLimit; 
        this.y = bottomLimit - overshoot; 
        this.speed = -this.speed; 
        } 
    
    else if (this.y < topLimit) {
        let overshoot = topLimit - this.y; 
        this.y = topLimit + overshoot; 
        this.speed = -this.speed; 
        }
    }
}