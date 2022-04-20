class Endboss extends MovableObject {
    
    y = 90;
    height = 600;
    width = 350;
    stoped = false;
    xOffset = 30;
    xLimitOffset = 30;
    yLimitOffset = 260;

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
        this.x = 4900;
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
            if (this.energyEndboss == 0) {
                clearInterval(animations);
            } else if (this.endbossStart) {
                if (timer == 0) {
                    setTime = 2 + Math.random() * 10;
                }
                if (timer < 500) {
                    this.goLeftRight();
                    timer += setTime;
                    this.stoped = false;
                    if (timer >= 500) {
                        interval = 0;
                    }
                } else if (interval < 500) {
                    this.stop();
                    this.stoped = true;
                    interval += setTime;
                    if (interval >= 500) {
                        timer = 0;
                    }
                }
            }
        }, 1000 / 60);
    }

    goLeftRight() {
        if (this.directionEndboss) {
            this.x -= 11;
            this.otherDirection = false;
        } else {
            this.x += 11;
            this.otherDirection = true;
        }
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
            } else if (this.attack) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 8);
    }
}    