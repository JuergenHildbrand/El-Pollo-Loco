
class Level {
    enemies;
    clouds;
    bottles;
    coin;
    backgroundObjects;
    level_end_x = 5500;

    constructor(enemies, clouds, bottles, coin, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.bottles = bottles;
        this.coin = coin;
        this.backgroundObjects = backgroundObjects;
        
    }
}