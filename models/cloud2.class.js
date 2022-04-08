class Cloud2 extends MovableObject {
    y = 0;
    height = 500;
    width = 1000;

    constructor() { // wird ausgeführt wenn das object neu erstellt wird
        super().loadImage('img/5.Fondo/Capas/4.nubes/2.png'); // super wird verwendet um methoden vom übergeordneten objekt aufzurufen

        this.x = -1000 + Math.random() * 5000; // math.random() gibt eine zufällige zahl zwischen 0 - 1 aus.
        
        this.animate();

    }  

    // wolke bewegt sich nach links
    animate() {
        // this.moveLeft();
        setInterval(() => {
            this.x -= 0.25; // wird alle 1000/60 ms ausgegührt, 60x /s - fps wird anzahl pixel von x abgezogen
        }, 1000 / 60);
    }
}