class StatusBarEndboss extends DrawableObject {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
    ];

    IMAGE = [
        'img/7.Marcadores/Marcadorvida_enemy/Vede.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 1000;
        this.y = 80;
        this.width = 240;
        this.height = 64;
        this.setPercentage(100);
    }

    // set percentage(50);
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2; 
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}