class Coin extends MovableObject {

    height = 200;
    width = 200;
    collectable = true;
    xOffset = 62;
    yOffset = 62;
    xLimitOffset = 62;
    yLimitOffset = 62; 

    /**
     * Load images and defines values for variables
     * 
     */
    constructor() {
        super().loadImage('img/8.Coin/Moneda2.png');
        let random = Math.random() + 0.1;
        let xyz = random * 7400;
        this.x = xyz - 1700;
        this.y = Math.random() * 230;     
    }
}