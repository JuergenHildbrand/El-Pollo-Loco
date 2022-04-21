class ChickenSmall extends MovableObject {

    height = 70;
    width = 70;
    chickenSpeedY = 0;
    chickenSAcceleration = 2.5;
    setTime = 2;

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
        this.x = 1000 + Math.random() * 5000;
        this.speed = 0.3 + Math.random() * 2;
        this.setTime = 6 + Math.random() * 10;
        this.applyGaravity();
        this.animate();
    }

    /**
     * Chicken animations
     * 
     */
    animate() {

        let timer = 0;
        

        const animations = setInterval(() => {
            if (this.chickenDead) {
                clearInterval(animations)
            } else {
                this.moveLeft();
            }
            
            if (timer < 4001) {
                timer += this.setTime;
            } 
            
            if (timer > 4000 && !this.isAboveGround()) {
                this.chickenJump();
                this.speed += 5;
                setTimeout(() => {
                    this.speed -= 5;
                }, 1100);
                timer = 0;
            }


        }, 1000 / 60);

        setInterval(() => {
            if (this.chickenDead) {
                this.loadImage(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }

    chickenJump() {
        this.speedY = 30;   
    }
}