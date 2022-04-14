let canvas;
let world;
let keyboard = new Keyboard();


/* lädt canvas mit den entsprechenden grafiken */
function init() {
    document.getElementById('startScreen').src = 'img/9.Intro _ Outro Image/Start Screen/Opciขn 1.png';
}

function startGame() {
    document.getElementById('start').classList.add('d-none');
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    canvas = document.getElementById('canvas'); // greift auf das canvas zu
    world =  new World(canvas, keyboard); // ein neues object namens world wird erstellt und dem geben wir die variablen canvas und keyboard mit
}

function gameOver(chickenSmallCount, chickenBigCount) {
    document.getElementById('chickenSmallCount').innerHTML = chickenSmallCount;
    document.getElementById('chickenBigCount').innerHTML = chickenBigCount;
    document.getElementById('coinCount').innerHTML = ``;
    document.getElementById('gameOver').classList.remove('d-none');
}

window.addEventListener("keydown", (e) => {

    if(e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if(e.keyCode == 38) {
        keyboard.UP = true;
    }
    if(e.keyCode == 40) {
        keyboard.DOWN = true;
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
    if(e.keyCode == 38) {
        keyboard.UP = false;
    }
    if(e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if(e.keyCode == 68) {
        keyboard.D = false;
    }
});