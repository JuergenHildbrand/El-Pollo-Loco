let world;
let keyboard = new Keyboard();
let startGame_sound = new Audio('audio/startGame.mp3');
let canvas = document.getElementById('canvas');
let isInFullScreen =
    (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null);

/**
 * Start-screen
 * 
 */
function init() {
    document.getElementById('startScreen').src = 'img/9.Intro _ Outro Image/Start Screen/Opciขn 1.png';
}

function isMobile() {
    return navigator.userAgent.match(/(iPhone|iPod|iPad|blackberry|android|Kindle|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i);
}

// function left() {
//     keyboard.LEFT = true;
// }
// if (isMobile()) {
//     alert("Es handelt sich um ein mobiles Gerät");
// } else {
//     alert("Es handelt sich um kein mobiles Gerät");
// }

function startGame() {
    document.getElementById('start').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    if (!isMobile()) {
        document.getElementById('fullscreen').classList.remove('d-none');   
    }
    this.initLevel(); // Start level1.js
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    setTimeout(() => {
        startGame_sound.play()
    }, 500);
}

function fullscreen() {
    document.getElementById('fullscreen').classList.add('d-none');
    if (canvas.RequestFullScreen) {
        canvas.RequestFullScreen();
    } else if (canvas.webkitRequestFullScreen) {
        canvas.webkitRequestFullScreen();
    } else if (canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen();
    } else if (canvas.msRequestFullscreen) {
        canvas.msRequestFullscreen();
    } else {
        alert("This browser doesn't supporter fullscreen");
    }
}

function closeFullscreen() {
    if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else {
        alert("Exit fullscreen doesn't work");
    }
}

/**
 * End-screen
 * 
 * @param {Number} chickenSmallCount - Killed small-chicken(s)
 * @param {Number} chickenBigCount - Killed big-chicken(s)
 * @param {Number} addedCoins - Collected coin(s)
 */
function gameOver(chickenSmallCount, chickenBigCount, addedCoins) {
    document.getElementById('chickenSmallCount').innerHTML = chickenSmallCount;
    document.getElementById('chickenBigCount').innerHTML = chickenBigCount;
    document.getElementById('coinCount').innerHTML = addedCoins;
    document.getElementById('endscreen').classList.remove('d-none');
}

function reStartGame() {
    window.location.href = window.location.href;
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true; // Outputs a JSON
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});