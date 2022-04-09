class Coin extends MovableObject {


    height = 200;
    width = 200;
    collectable = true;
    xOffset = 78;
    yOffset = 78;
    xLimitOffset = 78;
    yLimitOffset = 78;





    constructor() {
        super().loadImage('img/8.Coin/Moneda2.png');
        this.x = -1000 + Math.random() * 6000;
        this.y = 20 + Math.random() * 220;

        
    }



}