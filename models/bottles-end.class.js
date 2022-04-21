class BottlesEnd extends MovableObject {
    
    y = 550;
    height = 100;
    width = 100;
    xOffset = 60;
    xLimitOffset = 60;

    /**
     * 
     * @param {String} imagePath - Path from image
     * @param {Number} x - Position (value from level1)
     */
    constructor(imagePath, x) { 
        super().loadImage(imagePath); // Places bottles in fixed places
        this.x = x; 
    }
}