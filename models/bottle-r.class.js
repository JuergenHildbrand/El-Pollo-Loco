class BottleR extends MovableObject {
    y = 550;
    height = 100;
    width = 100;
    xOffset = 80;
    xLimitOffset = 80;

    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada2.png');
        this.x = -1000 + Math.random() * 6000;
    }
}