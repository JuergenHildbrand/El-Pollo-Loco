class Chicken extends MovableObject {
    y = 500;
    height = 140;
    width = 140;
    dead = false;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_basico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_basico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_basico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_basico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

    constructor() { // wird ausgeführt wenn das object neu erstellt wird
        super().loadImage(this.IMAGES_WALKING[0]); // super wird verwendet um methoden vom übergeordneten objekt aufzurufen
        this.loadImages(this.IMAGES_WALKING);
        this.loadImage(this.IMAGES_DEAD);
        this.x = 1600 + Math.random() * 2000; // math.random() gibt eine zufällige zahl zwischen 0 - 1 aus. die hünchen werden an verschiedenen pos. ausgegeben.
        this.speed = 0.15 + Math.random() * 2; // die hünchen erhalten eine unterschiedliche geschwindigkeit
        this.animate();
    }

    animate() {

        this.moveLeft();

        setInterval(() => {
            if (this.dead) {
                this.loadImage(this.IMAGES_DEAD);
                this.speed = 0;
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}