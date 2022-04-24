class Cloud1 extends MovableObject {

    y = 50;
    height = 500;
    width = 1000;

    constructor() { 
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png'); 
        let xyz = 1 + Math.random() * 8500; // Random positions (x)
        this.x = xyz - 1000;
        this.speed = 0.2 + Math.random() * 0.4;
        this.animate();
    }  

    animate() {

        setInterval(() => { // Cloud actions
            this.moveLeft();
        }, 1000 / 60);
    
    }
}