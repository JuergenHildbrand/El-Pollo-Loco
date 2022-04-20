class MovableObject extends DrawableObject {

    speed = 0.2; 
    speedY = 0; // Fall speed
    acceleration = 2.5;
    energy = 1000000;
    energyEndboss = 10;
    lastHit = 0;
    addedCoins = 0;
    addedBottles = 0;
    chickenSmallCount = 0;
    chickenBigCount = 0
    otherDirection;
    directionEndboss = true;
    attack = false;
    endbossStart = false;
    gameOver = false;
    stoppAnimations = false;

    /**
     * Gravity is calculated
     * 
     */
    applyGaravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) { // sobald er auf dem boden ist, nichts mehr abziehen
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Check if the object is above the ground
     * 
     * @returns - A value or a number
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 260;
        }
    }

    /**
     * Check all collisions
     * 
     * @param {Object} mo 
     * @returns - x / y / height / width - coordinates
     */
    isColliding(mo) {
        return this.x + this.width > mo.x + mo.xOffset &&
            this.y + this.height > mo.y + mo.yOffset &&
            this.x < mo.x + mo.width - mo.xLimitOffset &&
            this.y + this.yLimitOffset < mo.y + mo.height - mo.yLimitOffset
    }

    /**
     * Hit character
     * 
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Hit endboss
     * 
     */
    hitEndboss() {
        this.energyEndboss -= 2;
        if (this.energyEndboss < 0) {
            this.energyEndboss = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * For hurt-animation
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
     * If the endboss is dead
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

    /**
     * Animation move left
     * 
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Animation move right
     * 
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Animation jump (character)
     * 
     */
    jump() {
        this.speedY = 40;
    }

    /**
     * Animation stop (endboss alerta)
     * 
     */
    stop() {
        setInterval(() => {
            this.x == this.speed;
        }, 1000 / 60);
    }

    /**
     * set true (if character or endboss is dead)
     * 
     */
    isKilled() {
        setTimeout(() => {
            this.gameOver = true;
        }, 1000);
    }
}
