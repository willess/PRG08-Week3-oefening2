class Eating implements Behavior {

    jibby: Jibby;
    private timer:number = 100;

    constructor(j: Jibby) {
        console.log("Jibby is Eating!");
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/eating.png')";

    }

    performBehavior() {
        this.timer --;
        this.jibby.food += 0.1;

        if(this.timer < 1) {
            this.jibby.behaviour = new Idle(this.jibby);
        }
        
    }

    onEat() {
    }

    onWash() {
        console.log('Jibby is ANGRY!');
        this.jibby.behaviour = new Angry(this.jibby);

    }

    onPet() {
        
    }
}