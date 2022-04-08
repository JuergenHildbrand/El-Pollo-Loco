class DrawableObject {
    x = 100;
    y = 100;
    img;
    imageCache = {};
    currentImage = 0;
    height = 100;
    width = 100;


    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Chicken_small) { // instanceof, diesse befehle werden nur ausgeführt wenn...
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.stokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

}