class Level {
    enemies;
    clouds;
    bottle;
    bottleR;
    coin;
    backgroundObjects;
    level_end_x = 4560;

    constructor(enemies, clouds, bottle, bottleR, coin, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.bottle = bottle;
        this.bottleR = bottleR;
        this.coin = coin;
        this.backgroundObjects = backgroundObjects;
        
    }
}