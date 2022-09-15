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
     * 
     * @param {String} path - Path from images as a String
     */
    loadImage(path) {
        this.img = new Image(); // JavaScript-illustration: this.img = document.getElementById('image') <img id="image"> - A new image is assigned to the variable img
        this.img.src = path; // The image is loaded into the Image-object
    }

    /**
     * 
     * @param {HTMLCanvasElement} ctx 
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn('errorloading image', e);
            console.log('could not load image', this.img.src);
        }
    }

    /**
     * Load images in the cache
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
}