class Happy implements Behavior {

    jibby: Jibby;
    private timer:number = 100;


    constructor(j: Jibby) {
        console.log("Jibby is Happy!!");
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/happy.png')";

    }

    performBehavior() {
        this.timer --;
        this.jibby.happyness += 0.1;

        if(this.timer < 1) {
            this.jibby.behaviour = new Idle(this.jibby);
        }
    }

    onEat() {
    }

    onWash() {

    }

    onPet() {
    }
}