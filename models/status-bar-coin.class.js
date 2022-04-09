class StatusBarCoin extends DrawableObject {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_moneda/Naranja/0.png',
        'img/7.Marcadores/Barra/Marcador_moneda/Naranja/20.png',
        'img/7.Marcadores/Barra/Marcador_moneda/Naranja/40.png',
        'img/7.Marcadores/Barra/Marcador_moneda/Naranja/60.png',
        'img/7.Marcadores/Barra/Marcador_moneda/Naranja/80.png',
        'img/7.Marcadores/Barra/Marcador_moneda/Naranja/100.png'
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 50;
        this.y = 80;
        this.width = 200;
        this.height = 50;
        this.setPercentage(0);
    }


    setPercentage(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2; 
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}