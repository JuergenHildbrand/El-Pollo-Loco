class BackgroundObject extends MovableObject {

    width = 1280;
    height = 720;
    constructor(imagePath, x) { // von level1
        super().loadImage(imagePath);
        this.x = x;
        this.y = 720 - this.height;
    }

}