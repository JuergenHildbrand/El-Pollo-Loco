class DrawableObject {

    x = 0;
    y = 0;
    height = 0;
    width = 0;
    img; // For single images
    imageCache = {}; // imageCache gets assigned an array with images
    xOffset = 0; // Optimize collisions
    yOffset = 0; // Optimize collisions
    xLimitOffset = 0; // Optimize collisions
    yLimitOffset = 0; // Optimize collisions
    currentImage = 0; // Is needed to iterate through an array
    
    /**
     * Load a picture
     * 
     * @param {String} path - Path to the picture
     */
    loadImage(path) {
        this.img = new Image(); // JavaScript-illustration: this.img = document.getElementById('image') <img id="image"> - A new image is assigned to the variable img
        this.img.src = path; // The image is loaded into the Image-object
    }

    /**
     * Adds an image to the canvas (60x / s)
     * 
     * @param {HTMLCanvasElement} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Load images to the cache
     * 
     * @param {String} array - Path from images as a String
     */
    loadImages(array) { 
        array.forEach((path) => {
            let img = new Image(); 
            img.src = path; 
            this.imageCache[path] = img; // imageCache is updated and gets the read out images 
        });
    }



    // drawFrame(ctx) {
    //     if (this instanceof Endboss || this instanceof ThrowableObject || this instanceof Character || this instanceof Chicken || this instanceof ChickenSmall || this instanceof Coin || this instanceof BottleL || this instanceof BottleR) { // instanceof, diesse befehle werden nur ausgeführt wenn...
    //         ctx.beginPath();
    //         ctx.lineWidth = '3';
    //         ctx.strokeStyle = 'blue';
    //         ctx.rect(this.x, this.y, this.width, this.height);
    //         ctx.stroke();
    //     }
    // }
}