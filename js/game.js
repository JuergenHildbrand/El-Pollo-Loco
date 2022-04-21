let canvas;
let world;
let keyboard = new Keyboard();

/**
 * Start-screen
 * 
 */
function init() {
    document.getElementById('startScreen').src = 'img/9.Intro _ Outro Image/Start Screen/Opciขn 1.png';
}

/**
 * Start game
 * 
 */
function startGame() {
    document.getElementById('start').classList.add('d-none');
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    canvas = document.getElementById('canvas'); // The variable canvas is assigned the canvas from the html
    world = new World(canvas, keyboard); // A new object named world is created and the parameters canvas and keyboard are given to it
}

/**
 * Finish game, end-screen
 * 
 * @param {Number} chickenSmallCount - killed small-chicken(s)
 * @param {Number} chickenBigCount - killed big-chicken(s)
 * @param {Number} addedCoins - collected coin(s)
 */
function gameOver(chickenSmallCount, chickenBigCount, addedCoins) {
    document.getElementById('chickenSmallCount').innerHTML = chickenSmallCount;
    document.getElementById('chickenBigCount').innerHTML = chickenBigCount;
    document.getElementById('coinCount').innerHTML = addedCoins;
    document.getElementById('gameOver').classList.remove('d-none');
}

/**
 * Restart game
 * 
 */
function reStartGame() {
    window.location.href = window.location.href;
}

/**
 * The EventListener "keydown" monitors whether an event (is pressed a button) takes place and outputs a JSON
 * 
 */
window.addEventListener("keydown", (e) => {
    if(e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if(e.keyCode == 68) {
        keyboard.D = true;
    }
});

/**
 * "keyup" check if a button is released
 * 
 */
window.addEventListener("keyup", (e) => {
    if(e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if(e.keyCode == 68) {
        keyboard.D = false;
    }
});