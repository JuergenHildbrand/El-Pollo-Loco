class ThrowableObject extends MovableObject {
    

    IMAGES_THROW = [
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 6.png',
    ];



    constructor(x, y, direction) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_THROW); // alle bilder werden an loadImages (=> drawableObect) gegeben
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;
        this.direction = direction;
        this.throw();
    }

    throw() {

        this.speedY = 30;
        this.applyGaravity();
        setInterval(() => {
            if (this.direction) {
                this.x += 7;
            } else {
                this.x -= 7;
            }
            
        }, 1000 / 60);
        this.animate();



    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_THROW);
        }, 1000 / 10);
    }

}