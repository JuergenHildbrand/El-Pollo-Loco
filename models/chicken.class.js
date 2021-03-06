class Chicken extends MovableObject {

    y = 300;
    height = 140;
    width = 140;
    setTime = 2; // Receive a random number
    gameIsRunning = true;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_basico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_basico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_basico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_basico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImage(this.IMAGES_DEAD);
        this.x = 1600 + Math.random() * 8400; // Random positions, (between 1600 and 7600)
        this.speed = 0.4 + Math.random() * 2; // Random speeds
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
                this.speed -= 10;
                setTimeout(() => {
                    this.speed += 20;
                    this.otherDirection = false;
                }, 1300);
                setTimeout(() => {
                    this.speed -= 10;
                }, 2400);
                timer = 0;
            }

            if (this.chickenDead) {
                clearInterval(actions)
                sounds.chickenDead_sound.play();
            } else {
                this.moveLeft();
            }

        }, 1000 / 60);

        setInterval(() => { // Images animations

            if (this.chickenDead) {
                this.loadImage(this.IMAGES_DEAD);
                this.speed = 0;
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }

        }, 200);
    }

    chickenJump() {
        this.otherDirection = true;
        this.speedY = 35;
    }
}