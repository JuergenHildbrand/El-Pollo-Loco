class Coin extends MovableObject {


    height = 200;
    width = 200;
    collectable = true;
    id;
    xOffset = 78;
    yOffset = 78;
    xLimitOffset = 78;
    yLimitOffset = 78;

    constructor(i) {
        super().loadImage('img/8.Coin/Moneda2.png', + i);
        this.id = i;
        this.x = -1000 + Math.random() * 7000;
        this.y = 20 + Math.random() * 220;

        
    }



}