class ChickenSmall extends MovableObject {

    height = 70;
    width = 70;
    setTime = 2; // Receive a random number
    gameIsRunning = true;
    chickenDead_sound = new Audio('audio/chickenDead.mp3');

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
        this.x = 1000 + Math.random() * 5000; // Random positions
        this.speed = 0.3 + Math.random() * 2; // Random speeds 
        this.setTime = 6 + Math.random() * 10; // Random jump-times
        this.applyGaravity();
        this.animate();
    }

    animate() {

        let timer = 0; // If the value > 4000, the chicken jumps

        const actions = setInterval(() => { // Character actions

            if (!this.gameIsRunning) {
                clearInterval(actions);
            }

            if (timer < 4001) { // Increases the value of timer
                timer += this.setTime;
            }

            if (timer > 4000 && !this.isAboveGround()) { // Chicken jumps
                this.chickenJump();
                this.speed += 5;
                setTimeout(() => {
                    this.speed -= 5;
                }, 1000);
                timer = 0;
            }

            if (this.chickenDead) {
                clearInterval(actions)
                this.chickenDead_sound.play();
            } else {
                this.moveLeft();
            }


        }, 1000 / 60);

        setInterval(() => { // Images animations
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