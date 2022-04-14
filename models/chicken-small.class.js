class ChickenSmall extends MovableObject {
    y = 564;
    height = 70;
    width = 70;
    

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_basico/Versi¢n_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_basico/Versi¢n_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_basico/Versi¢n_pollito/3.Paso_izquierdo.png'
    ];

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_basico/Versi¢n_pollito/4.Muerte.png'
    ];

    constructor() { // wird ausgeführt wenn das object neu erstellt wird
        super().loadImage(this.IMAGES_WALKING[0]); // super wird verwendet um methoden vom übergeordneten objekt aufzurufen
        this.loadImages(this.IMAGES_WALKING);
        this.loadImage(this.IMAGES_DEAD);
        this.x = 1000 + Math.random() * 3000; // math.random() gibt eine zufällige zahl zwischen 0 - 1 aus. die hünchen werden an verschiedenen pos. ausgegeben.
        this.speed = 0.15 + Math.random() * 2; // die hünchen erhalten eine unterschiedliche geschwindigkeit
        this.animate();
    }

    animate() {

        this.moveLeft();

        setInterval(() => {
            if (this.chickenDead) {
                this.loadImage(this.IMAGES_DEAD);
                this.speed = 0;
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}