class Cloud2 extends MovableObject {

    height = 500;
    width = 1000;

    constructor() { 
        super().loadImage('img/5.Fondo/Capas/4.nubes/2.png'); 
        this.x = -1000 + Math.random() * 8600;
        this.speed = Math.random() * 0.5;
        this.animate(); 
    }  

    /**
     * Cloud moves to the left
     * 
     */
    animate() {
        this.moveLeft();
    }
}