class Chicken extends MovableObject {

    y = 500;
    height = 140;
    width = 140;
   
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_basico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_basico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_basico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_basico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

    /**
     * Load images, defines values for variables and trigger function
     * 
     */
    constructor() { 
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImage(this.IMAGES_DEAD);
        this.x = 1600 + Math.random() * 6000; // this.x = at least 1600 + a random number between 0 and 1, times 6000 (a number between 1600 and 7600)
        this.speed = 0 + Math.random() * 0; // The chicken gets a different speed
        this.animate();
    }

    /**
     * Chicken animations
     * 
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
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