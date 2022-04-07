class BackgroundObject extends MovableObject {

    width = 1440;
    height = 720;
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 720 - this.height;
    }

}