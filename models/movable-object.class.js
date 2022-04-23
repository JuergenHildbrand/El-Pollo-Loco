class MovableObject extends DrawableObject {

    speed = 0; 
    speedY = 0; // Fall speed
    acceleration = 2.5;
    energy = 1;
    energyEndboss = 100;
    lastHit = 0; // Is needed to calculate the time since the last hit on the character
    addedCoins = 0;
    addedBottles = 0;
    chickenSmallCount = 0; // Killed chicken(s),for endscreen
    chickenBigCount = 0; // Killed chicken(s)),for endscreen
    otherDirection; // Flipp images from character and endboss, throw bottles to the right / left site
    directionEndboss = true; // Endboss walk left or right
    attack = false; // Enboss attacks when the distance between character and enboss is < 250px
    endbossStart = false; // Endboss start when the distance between character and endboss is < 1000px
    gameOver = false; // If enboss or character is dead, is set true

    /**
     * Gravity is calculated
     * 
     */
    applyGaravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) { // If the object is on the ground, do not pull off anything more
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * 
     * @returns - A value or a number
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) { // Throwable objects should always fall
            return true;
        } else if (this instanceof ChickenSmall) {
            return this.y < 564;
        } else {
            return this.y < 280;
        }
    }

    /**
     * Check all collisions
     * 
     * @param {Object} mo 
     * @returns - x / y / height / width - coordinates from character and enemies
     */
    isColliding(mo) {
        return this.x + this.width - this.xOffset > mo.x + mo.xOffset &&
            this.y + this.height - this.yOffset > mo.y + mo.yOffset &&
            this.x + this.xLimitOffset < mo.x + mo.width - mo.xLimitOffset &&
            this.y + this.yLimitOffset < mo.y + mo.height - mo.yLimitOffset
    }

    /**
     * Hit character
     * 
     */
    hit() {
        this.energy -= 0.5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * If you added all coins
     * 
     */
    addLife() {
        this.energy += 50;
    }

    hitEndboss() {
        this.energyEndboss -= 5;
        if (this.energyEndboss < 0) {
            this.energyEndboss = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * For hurt-animation character and endboss
     * 
     * @returns - true
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // difference in ms
        timePassed = timePassed / 1000; // difference in s
        return timePassed < 0.5;
    }

    /**
     * If the character is dead
     * 
     * @returns - true
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * 
     * @returns - true
     */
    isDeadEndboss() {
        return this.energyEndboss == 0;
    }

    /**
     * playAnimation() iterates through an array
     * 
     * @param {Array} images - An array with images
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // On the first pass currentImage = 0, the first image is loaded. % = modulu, mathematical rest / infinite loop (i = 0, 1, 2, 3, 4, 5, 0, 1, 2,....), residual value of divided. 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    jump() {
        this.speedY = 40;
    }

    /**
     * set true (if character or endboss is dead)
     * 
     */
    isKilled() {
            this.gameOver = true;
    }
}
