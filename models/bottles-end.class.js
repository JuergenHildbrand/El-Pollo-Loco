class BottlesEnd extends MovableObject {
    y = 550;
    height = 100;
    width = 100;
    xOffset = 60;
    xLimitOffset = 60;

    constructor(imagePath, x) { // von level1
        super().loadImage(imagePath);
        this.x = x;
    }
}