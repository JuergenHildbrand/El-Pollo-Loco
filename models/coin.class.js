class Coin extends MovableObject {

    height = 200;
    width = 200;
    collectable = true;
    xOffset = 90;
    yOffset = 90;
    xLimitOffset = 90;
    yLimitOffset = 90; 

    constructor() {
        super().loadImage('img/8.Coin/Moneda2.png');
        this.x  = -1000 + Math.random() * 6000;
        this.y = 10 + Math.random() * 230;     
    }
}