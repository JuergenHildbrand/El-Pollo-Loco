class Bottle extends MovableObject {
    y = 550;


    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada1.png');

        this.x = -1000 + Math.random() * 7000;
    }
}