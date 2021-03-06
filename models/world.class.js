class World {

    canvas;
    keyboard;
    sounds;
    ctx;
    level = level1;
    character = new Character();
    statusBarLife = new StatusBarLife();
    statusBarBottle = new statusBarBottle();
    statusBarCoin = new StatusBarCoin();
    statusBarEndboss = new StatusBarEndboss();
    imgEndboss = new ImgEndboss(); // Draw the image for status-bar from endboss
    gameOver = new GameOver();
    youLose = new YouLose();
    camera_x = 0; // Is neded to fix the camera to the character
    throwableObject = []; // Added bottles is pushing in this array
    bottleThrown = false; // Is set to true after a throw, xxx-ms later it is set to false again (the value must be false to throw a bottle) 
    endbossHit = false; // If the endboss is hit, true is set (one deduction / hit)
    lastJump = 0; // Is needed that you can kill chicken only from above
    showEndscreen = false;
    stoppAnimations = false;
    soundStop = false;

    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     * @param {Object} keyboard 
     */
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
     * Check various actions like collisions or end game...
     * 
     */
    run() {
        this.checkActions = setInterval(() => {
            this.checkCollisions();
            this.throwableObjects();
            this.checkDirection();
            this.checkEndgame();
        }, 20);
    }


    /* ------- Check all collisions ------- */

    checkCollisions() {
        this.characterEnemies();
        this.characterEndboss();
        this.characetrCoin();
        this.characterBottle();
        this.bottleEndboss();
    }

    /**
     * Checks the collision between character and enemies 
     * 
     */
    characterEnemies() {
        let timeX = new Date().getTime() - this.lastJump;
        this.level.enemies.forEach((enemies, index) => {
            if (this.character.isColliding(enemies) && !enemies.chickenDead && (timeX < 1200 || timeX > 1400)) { // Hit character
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy);
            }
            if (this.character.isColliding(enemies) && this.character.isAboveGround() && !enemies.chickenDead && timeX > 1200) { // Kill chicken from above
                if (index < 10) { // Killed big chicken(s) 
                    this.character.chickenBigCount += 1;
                }
                if (index > 9) { // Killed small chicken(s)
                    this.character.chickenSmallCount += 1;
                }
                enemies.chickenDead = true;
            }
        });
    }

    /**
     * Checks the collision between character and endboss 
     * 
     */
    characterEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy);
            }
        });
    }

    /**
     * Checks the collision between character and coins 
     * 
     */
    characetrCoin() {
        this.level.coin.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.addedCoins += 1;
                sounds.getCoin_sound.play();
                if (this.character.addedCoins == 20 && this.character.addedCoins < 21) {
                    this.character.addLife();
                }
                this.level.coin.splice(index, 1);
                this.statusBarCoin.setPercentage(this.character.addedCoins * 5);
            }
        });
    }

    /**
     * Checks the collision between character and bottles 
     * 
     */
    characterBottle() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.character.addedBottles += 5;
                this.statusBarBottle.setPercentage(this.character.addedBottles);
                this.level.bottles.splice(index, 1);
                sounds.getBottle_sound.play();
            }
        });
        this.level.bottlesEnd.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.character.addedBottles += 5;
                this.statusBarBottle.setPercentage(this.character.addedBottles);
                this.level.bottlesEnd.splice(index, 1);
                sounds.getBottle_sound.play();
            }
        });
    }

    /**
     * Checks the collision between bottles and endboss 
     * 
     */
    bottleEndboss() {
        this.level.endboss.forEach((endboss) => {
            this.throwableObject.forEach((bottle) => {
                if (endboss.isColliding(bottle)) { // If the end boss was hit with a bottle
                    if (!this.endbossHit) {
                        endboss.hitEndboss();
                        this.endbossHit = true;
                        setTimeout(() => {
                            this.endbossHit = false;
                        }, 590); // One hit / bottle
                    }
                    this.level.endboss.forEach((energy) => {
                        this.statusBarEndboss.setPercentage(energy.energyEndboss);
                        bottle.splash = true;
                    });
                }
            });
        });
    }



    /* ------ Check throwable objects ------*/

    throwableObjects() {
        if (this.keyboard.D && this.character.addedBottles > 0 && !this.bottleThrown) { // if the key "d" is pressed, the character has bottle(s) and if the last throw was more than 500ms ago
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this.character.otherDirection);
            this.character.addedBottles -= 5;
            this.throwableObject.push(bottle);
            this.statusBarBottle.setPercentage(this.character.addedBottles);
            this.bottleThrown = true;
            setTimeout(() => {
                this.bottleThrown = false; // 600 ms after the last throw, set true
            }, 600); // Time between the throws
        }
    }



    /* ------- Endboss actions -------*/

    /**
     * Check the direction of the endboss
     * 
     */
    checkDirection() {
        this.level.endboss.forEach((endboss) => {
            let pos = endboss.x + 130;
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
     * @param {Number} pos - Position from the endboss
     */
    checkDistance(pos) {
        let distance = pos - this.character.x;
        if (distance < 1000) { // If < 1000px endboss starts
            this.level.endboss.forEach((endboss) => {
                endboss.endbossStart = true;
                sounds.backgroundMelody_sound.pause();
                if (endboss.gameOver || this.character.gameOver) {
                    this.soundStop = true;
                }
                setTimeout(() => {
                    if (!this.soundStop) {
                        sounds.melodyEndboss_sound.volume = 0.2;
                        sounds.melodyEndboss_sound.play();
                    }
                }, 1000);
            });
        }
        if (distance < 250 && distance > -250) { // If < 250px endboss attaks
            this.level.endboss.forEach((dir) => {
                dir.attack = true;
            });
        } else {
            this.level.endboss.forEach((dir) => {
                dir.attack = false;
            });
        }
    }



    /* -------- Game Over --------*/

    checkEndgame() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.gameOver || endboss.gameOver) {
                this.stopIntervals();
                sounds.backgroundMelody_sound.pause();
                sounds.melodyEndboss_sound.pause();
                this.finishGame();
                setTimeout(() => {
                    closeFullscreen();
                }, 3000);
            }
        });
    }

    stopIntervals() {
        clearInterval(this.checkActions);
        this.level.endboss.forEach((endboss) => {
            endboss.gameIsRunning = false;
        });
        this.level.enemies.forEach((enemies) => {
            enemies.gameIsRunning = false;
        });
        this.character.gameIsRunning = false;
    }

    finishGame() {
        setTimeout(() => {
            this.showEndscreen = true;
        }, 1000);
        setTimeout(() => {
            gameOver(this.character.chickenSmallCount, this.character.chickenBigCount, this.character.addedCoins)
        }, 3000);
        setTimeout(() => {
            this.stoppAnimations = true;
        }, 6000);
    }



    /* -------- All objects are drawn -------*/

    draw() {
        if (!this.stoppAnimations) {
            this.deleteCanvas();
            this.drawObjects();
            this.rAF();
        }
    }

    deleteCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawObjects() {
        this.ctx.translate(this.camera_x, 0); // Is aligned with the character
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.bottlesEnd);
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObject);
        this.addToMap(this.character);
        this.drawStatusBars();
        this.ctx.translate(-this.camera_x, 0);
        this.ifEndbossStart();
        this.ifEndGame();
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
    * @param {Object} mo 
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

    drawStatusBars() {
        this.ctx.translate(-this.camera_x, 0); // To fix on screen
        this.addToMap(this.statusBarLife);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarCoin);
        this.ctx.translate(this.camera_x, 0);
    }

    /**
    * If the endboss started, status-bar is drawn
    * 
    */
    ifEndbossStart() {
        this.level.endboss.forEach((endboss) => {
            if (endboss.endbossStart) {
                this.addToMap(this.statusBarEndboss);
                this.addToMap(this.imgEndboss);
            }
        });
    }

    /**
     * Endsreen is drawn
     * 
     */
    ifEndGame() {
        this.level.endboss.forEach((endboss) => {

            if (this.showEndscreen) {

                if (endboss.gameOver) { // If you win
                    this.addToMap(this.gameOver);
                }

                if (this.character.gameOver) { // If you lose
                    this.addToMap(this.youLose);
                }

            }
        });
    }

    /**
     * requestAnimationFrame() is executed as soon as everything above (in draw) is drawn. draw() is called again and again (as much as the graphics card can handle)
     * 
     */
    rAF() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw(); // "this" is not recognized in requestAnimatoinFrame(), therefore via a variable (self)
        });
    }



    /* ------ Mirror images ------*/

    /**
     * 
     * @param {Object} mo 
     */
    flippImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1
    }

    /**
     * 
     * @param {Object} mo 
     */
    flippImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}