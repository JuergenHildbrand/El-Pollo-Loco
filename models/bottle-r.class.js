class BottleR extends MovableObject {
    
    y = 550;
    height = 100;
    width = 100;
    xOffset = 28;
    yOffset = 28;
    xLimitOffset = 28;

    /**
     * Load bottles-right image and defines value for variable
     * 
     */
    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada2.png');
        this.x = -1000 + Math.random() * 5800;
    }
}