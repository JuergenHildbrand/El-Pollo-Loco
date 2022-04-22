class ThrowableObject extends MovableObject {

    height = 100;
    width = 100;
    splash = false;

    IMAGES_THROW = [
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 6.png'
    ];

    IMAGES_SPLASH = [
        'img/6.botella/Rotaciขn/Splash_de_salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotaciขn/Splash_de_salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotaciขn/Splash_de_salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotaciขn/Splash_de_salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotaciขn/Splash_de_salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotaciขn/Splash_de_salsa/Mesa de trabajo 1 copia 12.png'
    ];

    /**
     * 
     * @param {Number} x - Position
     * @param {Number} y - Position
     * @param {Boolean} otherDirection - True or false
     */
    constructor(x, y, otherDirection) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_SPLASH);
        this.otherDirection = otherDirection;
        this.x = x;
        this.y = y;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGaravity();
        setInterval(() => {
            if (this.otherDirection) {
                this.x -= 8;
            } else {
                this.x += 8;
            }
        }, 1000 / 60);
        this.animate()
    }

    animate() {
        setInterval(() => {
            if (this.splash || this.y > 460) {
                this.playAnimation(this.IMAGES_SPLASH);
            } else {
                this.playAnimation(this.IMAGES_THROW);
            }
        }, 1000 / 10);
    }

}