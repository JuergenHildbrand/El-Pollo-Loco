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

function startGame() {
    document.getElementById('start').classList.add('d-none');
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    this.initLevel();
    canvas = document.getElementById('canvas'); 
    world = new World(canvas, keyboard);
}

/**
 * Finish game, end-screen
 * 
 * @param {Number} chickenSmallCount - Killed small-chicken(s)
 * @param {Number} chickenBigCount - Killed big-chicken(s)
 * @param {Number} addedCoins - Collected coin(s)
 */
function gameOver(chickenSmallCount, chickenBigCount, addedCoins) {
    document.getElementById('chickenSmallCount').innerHTML = chickenSmallCount;
    document.getElementById('chickenBigCount').innerHTML = chickenBigCount;
    document.getElementById('coinCount').innerHTML = addedCoins;
    document.getElementById('gameOver').classList.remove('d-none');
}

function reStartGame() {
    window.location.href = window.location.href;
}

window.addEventListener("keydown", (e) => {
    if(e.keyCode == 39) {
        keyboard.RIGHT = true; // Outputs a JSON
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