class Endboss extends MovableObject {
    y = 70;
    x = 0;
    height = 600;
    width = 350;


    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G4.png'


    ];

    IMAGES_ALERTA = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G12.png'
    ];

    world;

    constructor(directionEndboss) { // wird ausgeführt wenn das object neu erstellt wird
        super().loadImage('img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png'); // super wird verwendetum methoden vom übergeordneten objekt aufzurufen         
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERTA);
        this.x = 900; // math.random() gibt eine zufällige zahl zwischen 0 - 1 aus. die hünchen werden an verschiedenen pos. ausgegeben.
        this.directionEndboss = directionEndboss;
        this.animate();
    }

    // moveL() {
    //     setInterval(() => {
    //         this.x -= this.speed;
    //     }, 1000 / 60);
    // }

    // moveRight() {
    //     setInterval(() => {
    //         this.x += this.speed;
    //     }, 1000 / 60);
    // }

    animate() {

        setInterval(() => {

        if (this.directionEndboss) {
            this.x -= this.speed;
        } else {
            this.x += this.speed;
        }

        

        console.log(this.directionEndboss)
        }, 1000 / 60);


        setInterval(() => {

            this.playAnimation(this.IMAGES_WALKING)

        }, 1000 / 10);

    }
}    