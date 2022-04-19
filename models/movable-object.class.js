class MovableObject extends DrawableObject {
    speed = 0.2;
    otherDirection;
    speedY = 0;
    acceleration = 2.5;
    energy = 1000000;
    energyEndboss = 10;
    lastHit = 0;
    addedCoins = 0;
    addedBottles = 0;
    chickenSmallCount = 0;
    chickenBigCount = 0
    direction = true;
    directionEndboss = true;
    attack = false;
    endbossStart = false;
    gameOver = false;
    stoppAnimations = false;


    applyGaravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) { // sobald er auf dem boden ist, nichts mehr abziehen
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 260;
        }
    }

    isColliding(mo) {
        return this.x + this.width > mo.x + mo.xOffset &&
            this.y + this.height > mo.y + mo.yOffset &&
            this.x < mo.x + mo.width - mo.xLimitOffset &&
            this.y + this.yLimitOffset < mo.y + mo.height - mo.yLimitOffset
    }

    hit() {
        this.energy -= 5; // sterben einschalten
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    hitEndboss() {
        this.energyEndboss -= 2;
        if (this.energyEndboss < 0) {
            this.energyEndboss = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // difference in ms
        timePassed = timePassed / 1000; // difference in s
        return timePassed < 0.5;
    }

    /**
     * If the character is dead, the function returned true
     * 
     * @returns {number}
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * If the endboss is dead, the function returned true
     * 
     * @returns {number}
     */
    isDeadEndboss() {
        return this.energyEndboss == 0;
    }

    throwLeft() {
        return true;
    }

    /**
     * hier durchlaufen die bilder der animation
     * 
     * @param {Array} images - An array with images
     */
    playAnimation(images) {
        // walk animation
        let i = this.currentImage % images.length; // beim ersten durchlauf ist currentImage = 0, das erste bild wird geladen. % = modulu / unendliche schleiffe, restwert des geteilten
        // i = 0, 1, 2, ... 5, 0, 1, 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Animation move left (chickens big and small)
     * 
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
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
     * Animation die (character and endboss)
     * 
     */
    isKilled() {
        setTimeout(() => {
            this.gameOver = true;
        }, 1000);
    }
}
