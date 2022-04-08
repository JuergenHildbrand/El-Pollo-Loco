class Endboss extends MovableObject {
    y = 70;
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


    constructor() { // wird ausgeführt wenn das object neu erstellt wird
        super().loadImage('img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png'); // super wird verwendetum methoden vom übergeordneten objekt aufzurufen         
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERTA);
        
        this.x = 5300; // math.random() gibt eine zufällige zahl zwischen 0 - 1 aus. die hünchen werden an verschiedenen pos. ausgegeben.
        

        this.animate();
    }  

    animate() {
        this.moveLeft();
        

        setInterval(() => {

            if (this.isDead()) {
                // this.playAnimation(this.IMAGES_DEAD);
                // this.isDie = new Date().getTime();
            } else if (this.isHurt()) {
                // this.playAnimation(this.IMAGES_HURT);
                // this.lastMove = new Date().getTime();
            } else {
                this.animation();  
            } 

        }, 1000 / 10);
    }

    

    animation() {
        this.idleTime = new Date().getTime() - this.lastMove;
        this.playAnimation(this.IMAGES_WALKING);
    }
    
}

// if (this.idleTime > 2000) {
        //     this.playAnimation(this.IMAGES_WALKING);
        // } else {
        //     this.playAnimation(this.IMAGES_ALERTA);
        // }