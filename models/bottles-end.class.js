class BottlesEnd extends MovableObject {
    
    y = 550;
    height = 100;
    width = 100;
    xOffset = 60;
    xLimitOffset = 60;

    /**
     * Load bottles-end images and defines value for variable
     * 
     * @param {String} imagePath - Path from image
     * @param {Number} x - Position of bottle
     */
    constructor(imagePath, x) { // from level1
        super().loadImage(imagePath);
        this.x = x;
    }
}