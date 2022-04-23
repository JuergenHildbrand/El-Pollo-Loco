class Coin extends MovableObject {

    height = 200;
    width = 200;
    collectable = true;
    xOffset = 62;
    yOffset = 62;
    xLimitOffset = 62;
    yLimitOffset = 62; 

    constructor() {
        super().loadImage('img/8.Coin/Moneda2.png');
        let xyz = 1 + Math.random() * 10500; // Random positions (x)
        this.x = xyz - 1000;
        this.y = 1 + Math.random() * 230; // Random positions (y)
    }
}