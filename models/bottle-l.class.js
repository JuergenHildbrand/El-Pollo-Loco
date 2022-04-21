class BottleL extends MovableObject {
    
    y = 550;
    height = 100;
    width = 100;
    xOffset = 28;
    yOffset = 28;
    xLimitOffs25 = 28;

    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada1.png'); // Load left-bottles
        let xyz = 1 + Math.random() * 7000; // Random positions (x)
        this.x = xyz - 1000;
    }
}