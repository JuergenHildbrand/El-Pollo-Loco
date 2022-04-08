class Coin extends MovableObject {


    height = 300;
    width = 300;


    constructor() {
        super().loadImage('img/8.Coin/Moneda1.png');

        this.x = -1000 + Math.random() * 7000;
        this.y = 20 + Math.random() * 220;
        
    }



}