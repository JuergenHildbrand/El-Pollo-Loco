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

    /**
     * Load images, defines values for variables and trigger function
     * 
     */
    constructor() { 
        super().loadImage(this.IMAGES_WALKING[0]); 
        this.loadImages(this.IMAGES_WALKING);
        this.loadImage(this.IMAGES_DEAD);
        this.x = 1000 + Math.random() * 3000; 
        this.speed = 0 + Math.random() * 0;
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
