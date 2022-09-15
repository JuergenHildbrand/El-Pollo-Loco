class Character extends MovableObject {

    world; // The character can access the variables in the world
    height = 360;
    width = 180;
    speed = 10;
    xOffset = 60;
    yOffset = 33;
    xLimitOffset = 65;
    yLimitOffset = 163;
    gameIsRunning = true;

    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-39.png'
    ];

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-43.png'
    ];

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-57.png'
    ];

    IMAGES_WAIT = [
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-10.png'
    ];

    IMAGES_SLEEP = [
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-20.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WAIT);
        this.loadImages(this.IMAGES_SLEEP);
        this.applyGaravity();
        this.animate();
    }

    // Character actions
    animate() {
        const actions = setInterval(() => {
            this.moveCharacter();
            this.world.camera_x = -this.x + 400;
        }, 1000 / 60);
        this.imagesAnimations();
    }

    moveCharacter() {
        // Jumping by start game
        if (!this.gameIsRunning) {
            this.jumpByGameStart();
        }
        // Walking right
        if ((this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x)) {
            this.walkRight();
        }
        // Walking left
        if ((this.world.keyboard.LEFT && this.x > -1025)) {
            this.walkLeft();
        }
        // Walking-sound stopped
        if ((!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) || this.isAboveGround() || !this.gameIsRunning) {
            sounds.walkin_sound.pause();
        }
        // Jumping
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jumping();
        }
        // Hurting
        if (this.isHurt()) {
            sounds.hurt_sound.play();
        }
        // Throwing
        if (this.world.keyboard.D && this.addedBottles > 0 && !this.world.bottleThrown) {
            sounds.throw_sound.play();
        }
        // Dieing
        if (this.isDead()) {
            this.dieing();
            clearInterval(actions);
        }
    }

    jumpByGameStart() {
        if (this.energy > 0) {
            setTimeout(() => {
                this.jump();
            }, 1000);
        }
    }

    walkRight() {
        this.moveRight();
        this.positionCharacter = this.x;
        this.otherDirection = false;
        if (!this.isAboveGround()) {
            sounds.walkin_sound.play();
        }
    }

    walkLeft() {
        this.moveLeft();
        this.positionCharacter = this.x;
        this.otherDirection = true;
        if (!this.isAboveGround()) {
            sounds.walkin_sound.play();
        }
    }

    jumping() {
        this.jump();
        this.world.lastJump = new Date().getTime();
        sounds.jump_sound.play();
    }

    dieing() {
        sounds.dead_sound.play();
        setTimeout(() => {
            sounds.youLose_sound.play();
        }, 1400);
        this.isKilled();
    }

    imagesAnimations() {
        setInterval(() => { // Images animations
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.lastMove = new Date().getTime();
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
                this.lastMove = new Date().getTime();
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
                this.lastMove = new Date().getTime();
            } else {
                this.sleepAnimation();
            }
        }, 100);
    }

    sleepAnimation() {
        this.idleTime = new Date().getTime() - this.lastMove;
        if (this.idleTime > 4000) {
            this.playAnimation(this.IMAGES_SLEEP);
        } else {
            this.playAnimation(this.IMAGES_WAIT);
        }
    }
}

