class Endboss extends MovableObject {
    
    y = 190;
    height = 500;
    width = 260;
    stoped = false;
    xOffset = 30;
    xLimitOffset = 30;
    yLimitOffset = 30;

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G4.png'


    ];

    IMAGES_ALERTA = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G12.png'
    ];

    IMAGES_ATTACK = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G20.png'
    ];

    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G23.png'
    ];

    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G26.png'
    ];

    world;

    constructor() { 
        super().loadImage('img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png'); 
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERTA);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 6800;
        this.animate();
    }

    /**
     * Load various animations
     * 
     */
    animate() {
        this.moves();
        this.animations();
    }

    moves() {
        let timer = 0;
        let interval = 500;
        let setTime = 2;
        

        const animations = setInterval(() => {
            if (this.energyEndboss == 0) { // If endboss is dead
                clearInterval(animations);
            } else if (this.endbossStart) { // If distance between character und endboss < 1000px
                if (timer == 0) {
                    setTime = 2 + Math.random() * 10;
                }
                if (timer < 300) { // As long as the value of the timer is below 300
                    this.stoped = false;
                    this.move(); // The end boss moves left or right (always in the direction of the character)
                    timer += setTime; // The timer gets a random number added at each interval
                    if (timer >= 300) { // If the timer reaches the value 300 or higher 
                        interval = 0; // interval is set to zero
                    }
                } else if (interval < 200) { // If the value of interval is lower than 200
                    this.stoped = true; // The alerta animations and the stop() function starts
                    this.stop(); 
                    interval += setTime; // The interval gets a random number added at each interval
                    if (interval >= 200) { // If intervall reaches the value of 200 or higher
                        timer = 0; // The timer is set to zero and the endboss starts walking again
                    }
                }
            }
        }, 1000 / 60);
    }

    move() {
        if (this.directionEndboss) {
            this.x -= 11.1;
            this.otherDirection = false;
        } else {
            this.x += 11.1;
            this.otherDirection = true;
        }
    }

    /**
     * Animation stop (endboss alerta)
     * 
     */
    stop() {
        setInterval(() => {
            this.x == this.speed;
        }, 1000 / 60);
    }

    animations() {
        setInterval(() => {
            if (this.isDeadEndboss()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.isKilled();
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
}    