class Endboss extends MovableObject {

    y = 190;
    height = 500;
    width = 260;
    stoped = false;
    xOffset = 30;
    xLimitOffset = 30;
    yLimitOffset = 30;
    gameIsRunning = true;
    introSound = false;
    
    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/1.Caminata/G4.png'
    ];

    IMAGES_ALERTA = [
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/1.Alerta/G12.png'
    ];

    IMAGES_ATTACK = [
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/2.Ataque/G20.png'
    ];

    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/3.Herida/G23.png'
    ];

    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota/4.Muerte/G26.png'
    ];

    constructor() {
        super().loadImage('img/4.Secuencias_Enemy_giganton-Dona_Gallinota/2.Atecion-ataque/1.Alerta/G5.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERTA);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 9600;
        this.animate();
    }

    animate() {

        let timer = 0; // If the value is < 300, endboss walk
        let interval = 300; // If the value is < 250, enboss stops
        let setTime = 2; // To calculate diffrent times

        const actions = setInterval(() => { // Endboss actions

            if (!this.gameIsRunning) {
                clearInterval(actions);
            }

            if (this.endbossStart) { // If distance between character und endboss < 1000px

                if (!this.introSound) {
                    sounds.enbossStart_sound.play();
                    this.introSound = true;
                }

                if (timer == 0) { // setTime gets a ramdom number
                    setTime = 2 + Math.random() * 10;
                }

                if (timer < 300) { // Endboss walk
                    this.stoped = false;
                    this.move(); // The end boss moves left or right (always in the direction of the character)
                    timer += setTime; // The timer gets a random number added at each interval
                    if (timer >= 300) { // If the timer reaches the value 300 or higher 
                        interval = 0; // interval is set to zero
                        setTime = 2 + Math.random() * 10;
                    }
                } else if (interval < 300) { // Endboss stops
                    this.stoped = true; // The alerta or attack animations starts
                    this.stop();
                    interval += setTime; // The interval gets a random number added at each interval
                    if (interval >= 300) { // The timer is set to zero and the endboss starts walking again
                        timer = 0; 
                    }
                }

                if (this.energyEndboss == 0) { // If endboss is dead
                    setTimeout(() => {
                        sounds.youWin_sound.play();
                    }, 500);
                    this.isKilled();
                }

            }
        }, 1000 / 60);

        setInterval(() => { // Images animations
            if (this.isDeadEndboss()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.stoped && !this.attack) {
                this.playAnimation(this.IMAGES_ALERTA);
            } else if (this.attack) { // If the distance between character und endboss is < 250px
                this.playAnimation(this.IMAGES_ATTACK);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 10);
    }

    move() {
        if (this.directionEndboss) {
            this.x -= 11.2;
            this.otherDirection = false;
        } else {
            this.x += 11.2;
            this.otherDirection = true;
        }
    }

    stop() {
        setInterval(() => {
            this.x == this.speed;
        }, 1000 / 60);
    }
}    