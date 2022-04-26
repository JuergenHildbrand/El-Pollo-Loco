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
    if (!isMobile()) {
        document.getElementById('infoBtns1').classList.remove('d-none');
        document.getElementById('infoBtns2').classList.remove('d-none');
    } else {
        document.getElementById('txtMob1').classList.remove('d-none');
        document.getElementById('txtMob2').classList.remove('d-none');
    }
}

function isMobile() {
    return navigator.userAgent.match(/(iPhone|iPod|iPad|blackberry|android|Kindle|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i);
}

function startGame() {
    document.getElementById('start').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    if (!isMobile()) {
        document.getElementById('fullscreen').classList.remove('d-none');
    } else {
        mobileDevice();
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
    document.getElementById('actionBtn1').classList.add('d-none');
    document.getElementById('actionBtn2').classList.add('d-none');
    document.getElementById('endscreen').classList.remove('d-none');
    document.getElementById('fullscreen').classList.add('d-none');
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
    if (e.keyCode == 32 && e.target === document.body) {
        keyboard.SPACE = true;
        e.preventDefault(); void 0;
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

function mobileDevice() {
    document.getElementById('actionBtn1').classList.remove('d-none');
    document.getElementById('actionBtn2').classList.remove('d-none');

    document.getElementById('goLeft').ontouchstart = function (e) {
        keyboard.LEFT = true;
        e.preventDefault();
    }
    document.getElementById('goLeft').ontouchend = function (e) {
        keyboard.LEFT = false;
        e.preventDefault();
    }
    document.getElementById('goRight').ontouchstart = function (e) {
        keyboard.RIGHT = true;
        e.preventDefault();
    }
    document.getElementById('goRight').ontouchend = function (e) {
        keyboard.RIGHT = false;
        e.preventDefault();
    }
    document.getElementById('tBottle1').ontouchstart = function (e) {
        keyboard.D = true;
        e.preventDefault();
    }
    document.getElementById('tBottle1').ontouchend = function (e) {
        keyboard.D = false;
        e.preventDefault();
    }
    document.getElementById('cJump1').ontouchstart = function (e) {
        keyboard.SPACE = true;
        e.preventDefault();
    }
    document.getElementById('cJump1').ontouchend = function (e) {
        keyboard.SPACE = false;
        e.preventDefault();
    }
}

