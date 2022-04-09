class World {
    character = new Character(); // innerhalb einer klasse kein let, const... (gross / kleinschreibung beachten!)
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarLife = new StatusBarLife();
    statusBarBottle = new statusBarBottle();
    statusBarCoin = new StatusBarCoin();
    throwableObject = [new ThrowableObject()];
    coins = [];
    bottles = [];




    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // mit diesem werkzeug kann man auf dem canvas auf demensprechenden koordinaten etwas hinzufügen (immer ctx!)
        this.canvas = canvas; // mit this(.canvas) greifen wir auf oben auf die variablen zu (class World) und erhält den wert von canvas
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();

    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObject.push(bottle);
        }
    }

    checkCollisions() {
        // character & enemies
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy);
            }
        });

        // character & coin
        this.level.coin.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.coins.push(index);
                this.level.coin.splice(index, 1);
                this.character.addedCoins += 10;
                this.statusBarCoin.setPercentage(this.character.addedCoins);
            }
        });

        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.bottles.push(index);
                this.level.bottles.splice(index, 1);
                console.log(this.bottles);
                // this.character.addedCoins += 10;
                // this.statusBarCoin.setPercentage(this.character.addedCoins);
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // das canvas wird immmer wieder gelöscht / gecleant (immer ganz am anfang)

        this.ctx.translate(this.camera_x, 0);

        // objecte werden gezeichnet gezeichnet
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject);

        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarLife);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarCoin);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);

        // draw() wird immer wieder aufgerufen (soviel wie die grafikkarte hergibt)
        let self = this;
        requestAnimationFrame(function () { // requestAnimationFrame wird ausgeführt sobald alles oberhalb (in draw) gezeichnet wurde
            self.draw(); // this wird nicht erkannt, deswegen über eine variable (self)
        });
    }

    // mehrere objekte werden von level1 geladen
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    // mit dieser funktion werden standartwerte übergeben (img, x, y, width, height)
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flippImage(mo);
        }
        mo.draw(this.ctx); // draw() in drawableObject wir ausgeführt 
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flippImageBack(mo)
        }
    }

    flippImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1
    }

    flippImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


}