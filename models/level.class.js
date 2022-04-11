
class Level {
    enemies;
    endboss;
    clouds;
    bottles;
    coin;
    // splash;
    backgroundObjects;
    level_end_x = 5500;

    constructor(enemies, endboss, clouds, bottles, coin, backgroundObjects) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.bottles = bottles;
        this.coin = coin;
        // this.splash = splash
        this.backgroundObjects = backgroundObjects;
        
    }
}