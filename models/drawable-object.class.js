class DrawableObject {
    x = 100;
    y = 100;
    img;
    imageCache = {}; // loadImages lädt alle bilder in dieses json
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

    /**
     * lädt bilder in den cache
     * 
     * @param {array} array - [mit mehreren bildern] 
     */
    loadImages(array) { // ein array (pfade) wird zur funktion hunzugefügt
        array.forEach((path) => {
            let img = new Image(); // new image vergiebt den pfad des bildes an die variable img
            img.src = path; // hier wird das bild in das image-object (zeile 36) hineningeladen. img ist inerhalb der funktion definiert, deshalb ohne this
            this.imageCache[path] = img; // das bild wird zum imageCache gegeben
        });
    }

}