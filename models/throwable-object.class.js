class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGaravity();
        setInterval(() => {
            this.x += 20;
        }, 25);
    }
    
}