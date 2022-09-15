let level1;
function initLevel() {

    level1 = new Level(
        getChicken(),
        getEndboss(),
        getCloud(),
        getBottle(),
        getBottlesEnd(),
        getCoin(),
        getBackground()
    );
}

function getChicken() {
    return [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall()
    ]
}

function getEndboss() {
    return [
        new Endboss(),
    ]
}

function getCloud() {
    return [
        new Cloud1(),
        new Cloud1(),
        new Cloud1(),
        new Cloud2(),
        new Cloud2(),
        new Cloud2()
    ]
}

function getBottle() {
    return [
        new BottleL(),
        new BottleL(),
        new BottleL(),
        new BottleL(),
        new BottleL(),
        new BottleL(),
        new BottleL(),
        new BottleL(),
        new BottleR(),
        new BottleR(),
        new BottleR(),
        new BottleR(),
        new BottleR(),
        new BottleR(),
        new BottleR(),
        new BottleR()
    ]
}

function getBottlesEnd() {
    return [
        new BottlesEnd('img/6.botella/2.Botella_enterrada1.png', 10115),
        new BottlesEnd('img/6.botella/2.Botella_enterrada1.png', 10065),
        new BottlesEnd('img/6.botella/2.Botella_enterrada2.png', 10085),
        new BottlesEnd('img/6.botella/2.Botella_enterrada2.png', 9900)
    ]
}

function getCoin() {
    return [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ]
}

function getBackground() {
    return [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -2558),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', -2558),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', -2558),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', -2558),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -1279),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -1279),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -1279),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -1279),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 1279),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 1279),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1279),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 2558),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 2558),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 2558),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 2558),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 3837),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 3837),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 3837),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 3837),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 5116),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 5116),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 5116),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 5116),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 6395),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 6395),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 6395),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 6395),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 7674),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 7674),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 7674),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 7674),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 8953),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 8953),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 8953),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 8953),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 10232),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 10232),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 10232),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 10232)
    ]
}