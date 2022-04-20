class Character extends MovableObject {

    world; // Via this variable the character can access the variables in the world. (this.world.keyboard.xyz)
    height = 400;
    width = 200;
    speed = 10;
    xOffset = 60;
    yOffset = 33;
    xLimitOffset = 65;
    yLimitOffset = 163;
    walkin_sound = new Audio('audio/walking.mp3');
    jump_sound = new Audio('audio/jump.mp3');
    hurt_sound = new Audio('audio/hurt.mp3');
    die_sound = new Audio('audio/die.mp3');
    throw_sound = new Audio('audio/throw.mp3');

    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-40.png'
    ];

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-43.png'
    ];

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-57.png'
    ];

    IMAGES_WAIT = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-10.png'
    ];

    IMAGES_SLEEP = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-20.png',

    ];

    /**
     * Load images and triggers functions
     * 
     */
    constructor() { // All classes have a constructor and is executed when the object is newly created. (When "new character" (in world) is executed, the constructor is called)
        super().loadImage(this.IMAGES_WALKING[0]); // loadImage() is called in the class DrawableObject - super() is used to call methods from the parent object (MovableObject / DrawableObject)
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WAIT);
        this.loadImages(this.IMAGES_SLEEP);
        this.applyGaravity();
        this.animate();
    }

    /**
     * Loads various animations an sounds
     * 
     */
    animate() {
        this.movesAndSounds();
        this.movesAndSoundsDie();
        this.animations(); 
    }

    movesAndSounds() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.positionCharacter = this.x;
                this.otherDirection = false;
                // this.walkin_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -1025) {
                this.moveLeft();
                this.positionCharacter = this.x;
                this.otherDirection = true;
                // this.walkin_sound.play();
            }
            if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
                this.walkin_sound.pause();
            }
            if (this.isAboveGround()) {
                this.walkin_sound.pause();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                this.jump_sound.play();
            }
            if (this.isHurt()) {
                // this.hurt_sound.play();
            }
            if (this.world.keyboard.D && this.addedBottles > 0) {
                this.throw_sound.play();
            }
            this.world.camera_x = -this.x + 400;
        }, 1000 / 60);
    }

    movesAndSoundsDie() {
        const die = setInterval(() => {
            if (this.isDead()) {
                this.die_sound.play();
                this.isKilled();
                setTimeout(() => {
                    clearInterval(die);
                }, 1000);
            }
        }, 1000 / 60);
    }

    animations() {
        const animations = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.isDie = new Date().getTime();
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.lastMove = new Date().getTime();
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
                this.lastMove = new Date().getTime();
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
                this.lastMove = new Date().getTime();
            } else if (this.world.keyboard.D) {
                this.playAnimation(this.IMAGES_WAIT);
            } else {
                this.sleepAnimation();
            }
        }, 1000 / 10);
    }

    sleepAnimation() {
        this.idleTime = new Date().getTime() - this.lastMove;
        if (this.idleTime > 3000) {
            this.playAnimation(this.IMAGES_SLEEP);
        } else {
            this.playAnimation(this.IMAGES_WAIT);
        }
    }
}

