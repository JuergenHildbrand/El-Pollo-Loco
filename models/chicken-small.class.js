class ChickenSmall extends MovableObject {

    height = 70;
    width = 70;
    setTime = 2; // Receive a random number
    gameIsRunning = true;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_basico/Versi¢n_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_basico/Versi¢n_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_basico/Versi¢n_pollito/3.Paso_izquierdo.png'
    ];

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_basico/Versi¢n_pollito/4.Muerte.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImage(this.IMAGES_DEAD);
        this.x = 1000 + Math.random() * 9000; // Random positions
        this.speed = 0.3 + Math.random() * 2; // Random speeds 
        this.setTime = 6 + Math.random() * 10; // Random jump-times
        this.applyGaravity();
        this.animate();
    }

    animate() {
        let timer = 0; // If the value > 4000, the chicken jumps
        // Character actions
        const actions = setInterval(() => {
            if (!this.gameIsRunning) {
                clearInterval(actions);
            }
            // Increases the value of timer
            if (timer < 4001) {
                timer += this.setTime;
            }
            // Chicken jumps
            if (timer > 4000) {
                this.speedY = 30;
                this.speed += 10;
                setTimeout(() => {
                    this.otherDirection = true;
                    this.speed -= 20;
                }, 1000);
                setTimeout(() => {
                    this.otherDirection = false;
                    this.speed += 10;
                }, 2000);
                timer = 0;
            }
            // Chicken dieing
            if (this.chickenDead) {
                clearInterval(actions)
                sounds.chickenDead_sound.play();
            } else {
                this.moveLeft();
            }
        }, 1000 / 60);
        this.imagesAnimations();
    }

    imagesAnimations() {
        setInterval(() => {
            if (this.chickenDead) {
                this.loadImage(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}