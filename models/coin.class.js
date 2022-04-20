class Coin extends MovableObject {

    height = 200;
    width = 200;
    collectable = true;
    xOffset = 90;
    yOffset = 90;
    xLimitOffset = 90;
    yLimitOffset = 90; 

    /**
     * Load images and defines values for variables
     * 
     */
    constructor() {
        super().loadImage('img/8.Coin/Moneda2.png');
        let xyz = 1 + Math.random() * 5800;
        this.x = xyz - 1000;
        this.y = Math.random() * 230;     
    }
}