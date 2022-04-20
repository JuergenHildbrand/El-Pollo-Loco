
class Level {
    enemies;
    endboss;
    clouds;
    bottles;
    bottlesEnd;
    coin;
    backgroundObjects;
    level_end_x = 8000;

    constructor(enemies, endboss, clouds, bottles, bottlesEnd, coin, backgroundObjects) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.bottles = bottles;
        this.bottlesEnd = bottlesEnd;
        this.coin = coin;
        this.backgroundObjects = backgroundObjects;
        
    }
}