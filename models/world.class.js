class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarLife = new StatusBarLife();
    statusBarBottle = new statusBarBottle();
    statusBarCoin = new StatusBarCoin();
    statusBarEndboss = new StatusBarEndboss();
    imgEndboss = new ImgEndboss();
    gameOver = new GameOver();
    youLose = new YouLose();
    throwableObject = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // This tool is needed to add something on the canvas (always ctx!)
        this.canvas = canvas; // The canvas from game.js is passed to the variable "canvas" in world.class.js
        this.keyboard = keyboard;
        this.setWorld();
        this.run();
        this.draw();
    }

    /**
     * This function allows the character to access the variables in the world
     * 
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Calls various functions via an interval
     * 
     */
    run() {
        setInterval(() => {
            this.checkDirection();
            this.checkThrowObjects();
            this.checkCollisions();
            this.checkEndgame();
        }, 200);
    }

    /**
     * Check the direction of the endboss
     * 
     */
    checkDirection() {
        this.level.endboss.forEach((endboss) => {
            let pos = endboss.x + 125;
            if (pos >= this.character.x) {
                this.level.endboss.forEach((dir) => {
                    dir.directionEndboss = true;
                });
            } else {
                this.level.endboss.forEach((dir) => {
                    dir.directionEndboss = false;
                });
            }
            this.checkDistance(pos);
        });
    }

    /**
     * Check the distance between the character and endboss
     * 
     * @param {number} pos - Position from the endboss
     */
    checkDistance(pos) {
        let distance = pos - this.character.x;
        if (distance < 1000) {
            this.level.endboss.forEach((dir) => {
                dir.endbossStart = true;
            });
        }
        if (distance < 300 && distance > -300) {
            this.level.endboss.forEach((dir) => {
                dir.attack = true;
            });
        } else {
            this.level.endboss.forEach((dir) => {
                dir.attack = false;
            });
        }
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.character.addedBottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this.character.otherDirection);
            this.character.addedBottles -= 10;
            this.throwableObject.push(bottle);
            this.statusBarBottle.setPercentage(this.character.addedBottles);
        }
    }

    /**
     * Check all collisions
     * 
     */
    checkCollisions() {
        this.character_enemies();
        this.character_endboss();
        this.characetr_coin();
        this.character_bottle();
        this.bottle_endboss();
    }
    character_enemies() {
        this.level.enemies.forEach((enemies, index) => {
            if (this.character.isColliding(enemies) && !enemies.chickenDead && !this.character.isAboveGround()) {
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy);
            }
            if (this.character.isColliding(enemies) && this.character.isAboveGround()) {
                enemies.chickenDead = true;
                if (index < 6) {
                    this.character.chickenBigCount += 1;
                }
                if (index > 5) {
                    this.character.chickenSmallCount += 1;
                }
            }
        });
    }
    character_endboss() {
        // character & endboss
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy);
            }
        });
    }
    characetr_coin() {
        // character get coin
        this.level.coin.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coin.splice(index, 1);
                this.character.addedCoins += 10;
                this.statusBarCoin.setPercentage(this.character.addedCoins);
            }
        });
    }
    character_bottle() {
        // character get bottle
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.character.addedBottles += 10;
                this.level.bottles.splice(index, 1);
                this.statusBarBottle.setPercentage(this.character.addedBottles);
            }
        });
        this.level.bottlesEnd.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.character.addedBottles += 10;
                this.level.bottlesEnd.splice(index, 1);
                this.statusBarBottle.setPercentage(this.character.addedBottles);
            }
        });
    }
    bottle_endboss() {
        // bottle meets endboss
        this.level.endboss.forEach((endboss) => {
            this.throwableObject.forEach((bottle) => {
                if (endboss.isColliding(bottle)) {
                    endboss.hitEndboss();
                    this.level.endboss.forEach((energy) => {
                        this.statusBarEndboss.setPercentage(energy.energyEndboss);
                        bottle.splash = true;
                    });
                }
            });
        });
    }


    /**
     * All objects are drawn (all 200ms)
     * 
     */
    draw() {
        if (this.character.stoppAnimations == false) {

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // The canvas is always deleted / cleared again (always at the very beginning)

            this.ctx.translate(this.camera_x, 0);

            this.addObjectsToMap(this.level.backgroundObjects);
            this.addObjectsToMap(this.level.clouds);
            this.addObjectsToMap(this.level.bottles);
            this.addObjectsToMap(this.level.bottlesEnd);
            this.addObjectsToMap(this.level.coin);
            this.addObjectsToMap(this.level.enemies);
            this.addObjectsToMap(this.level.endboss);
            this.addObjectsToMap(this.throwableObject);
            this.addToMap(this.character);

            this.ctx.translate(-this.camera_x, 0);

            this.addToMap(this.statusBarLife);
            this.addToMap(this.statusBarBottle);
            this.addToMap(this.statusBarCoin);
            this.level.endboss.forEach((endboss) => {
                if (endboss.endbossStart) {
                    this.addToMap(this.statusBarEndboss);
                    this.addToMap(this.imgEndboss);
                }
                if (endboss.gameOver) {
                    this.addToMap(this.gameOver);
                }
            });

            this.ctx.translate(this.camera_x, 0);
            this.ctx.translate(-this.camera_x, 0);

            if (this.character.gameOver) {
                this.addToMap(this.youLose);
            }

            let self = this;
            requestAnimationFrame(function () { // requestAnimationFrame() is executed as soon as everything above (in draw) is drawn. draw() is called again and again (as much as the graphics card can handle)
                self.draw(); // "this" is not recognized in requestAnimatoinFrame(), therefore via a variable (self)
            });
        }
    }

    /**
     * forEach-loop for all arrays
     * 
     * @param {Array} objects - Contain all objects from the array
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * Passes an object to draw() in drawableObject and calls it. Checks the direction of the object
     * 
     * @param {object} mo 
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flippImage(mo);
        }
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flippImageBack(mo);
        }
    }

    /**
     * Mirrors a image
     * 
     * @param {object} mo 
     */
    flippImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1
    }

    /**
     * Mirrors back a image
     * 
     * @param {object} mo 
     */
    flippImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    /**
    * Checks if the game is finished
    * 
    */
    checkEndgame() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.gameOver || endboss.gameOver) {
                setTimeout(() => {
                    gameOver(this.character.chickenSmallCount, this.character.chickenBigCount, this.character.addedCoins)
                }, 2000);
                setTimeout(() => {
                    this.character.stoppAnimations = true;
                }, 4000);
            }
        });
    }
}