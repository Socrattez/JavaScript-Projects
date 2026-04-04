function Grid() {
    for (g = 0; g, g <= 850; g = g + 50) {
       for (h = 0; h <= 850; h = h + 50) {
            stroke(255);
            strokeWeight(3);
            line(50 + g, h, h, 50 + g);
            }
        }
    }