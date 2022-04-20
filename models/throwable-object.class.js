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
     * Load images, defines values for variables and trigger function
     * 
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
                this.x -= 10;
            } else {
                this.x += 10;
            }
        }, 1000 / 60);
        this.animate()
    }

    animate() {
        setInterval(() => {
            if (this.splash || this.y > 400) {
                this.playAnimation(this.IMAGES_SPLASH);
            } else {
                this.playAnimation(this.IMAGES_THROW);
            }
        }, 1000 / 10);
    }

}