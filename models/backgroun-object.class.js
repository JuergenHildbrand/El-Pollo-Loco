class BackgroundObject extends MovableObject {

    width = 1280;
    height = 720;
    y = 720 - this.height
    
    /**
     * Draw the background-images
     * 
     * @param {String} imagePath - The path of picture
     * @param {number} x - The position of picture
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}