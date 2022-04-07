class Cloud1 extends MovableObject {
    y = 50;
    height = 500;
    width = 1000;

    constructor() { // wird ausgeführt wenn das object neu erstellt wird
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png'); // super wird verwendet um methoden vom übergeordneten objekt aufzurufen

        this.x = Math.random() * 4000; // math.random() gibt eine zufällige zahl zwischen 0 - 1 aus.
        this.animate();

    }  

    // wolke bewegt sich nach links
    animate() {
        this.moveLeft();
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}