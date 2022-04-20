class GameOver extends MovableObject {

    height = 720;
    width = 1280;

    /**
     * Load image and defines values for variables
     * 
     */
    constructor() {
        super().loadImage('img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png');
        this.x = 0;
        this.y = 0;
    }
}