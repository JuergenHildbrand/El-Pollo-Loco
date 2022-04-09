class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;


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
        return  this.x + this.width > mo.x + mo.xOffset &&
                this.y + this.height > mo.y + mo.yOffset &&
                this.x < mo.x + mo.width - mo.xLimitOffset &&
                this.y + this.yLimitOffset < mo.y + mo.height - mo.yLimitOffset
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;      
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // difference in ms
        timePassed = timePassed / 1000; // difference in s
        return timePassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    // hier durchlaufen die bilder der animation
    playAnimation(images) {
        // walk animation
        let i = this.currentImage % images.length; // beim ersten durchlauf ist currentImage = 0, das erste bild wird geladen. % = modulu / unendliche schleiffe, restwert des geteilten
        // i = 0, 1, 2, ... 5, 0, 1, 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 60);
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    jump() {
        this.speedY = 40;
    }

    
}
