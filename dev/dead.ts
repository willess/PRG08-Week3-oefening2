class Dead implements Behavior {

    jibby: Jibby;

    constructor(j: Jibby) {
        console.log("Jibby is dead!");
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";

    }

    performBehavior() {
    }

    onEat() {

    }

    onWash() {

    }

    onPet() {
        
    }
}