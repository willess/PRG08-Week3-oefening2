class Washing implements Behavior {

    jibby: Jibby;
    private timer:number = 100;


    constructor(j: Jibby) {
        console.log("Jibby is washing!");
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/washing.png')";

    }

    performBehavior() {
        this.timer --;
        this.jibby.hygiene += 0.1;

        if(this.timer < 1) {
            this.jibby.behaviour = new Idle(this.jibby);
        }
    }

    onEat() {
        console.log('Jibby is ANGRY!');
        this.jibby.behaviour = new Angry(this.jibby);

    }

    onWash() {

    }

    onPet() {
        
    }
}