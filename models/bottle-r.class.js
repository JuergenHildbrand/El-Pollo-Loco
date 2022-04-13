class BottleR extends MovableObject {
    y = 550;
    height = 100;
    width = 100;
    xOffset = 70;
    xLimitOffset = 70;

    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada2.png');
        let xyz =  + Math.random() * 5800;
        this.x = xyz - 1000;
    }
}