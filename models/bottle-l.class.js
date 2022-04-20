class BottleL extends MovableObject {
    
    y = 550;
    height = 100;
    width = 100;
    xOffset = 60;
    xLimitOffset = 60;

    /**
     * Load bottles-left image and defines value for variable
     * 
     */
    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada1.png');
        this.x = -1000 + Math.random() * 6800;
    }
}