class Sleeping implements Behavior {

    jibby: Jibby;

    constructor(j: Jibby) {
        console.log("Jibby is sleeping!");
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";

    }

    performBehavior() {
        // waarden verlagen per frame - dit moet in het gedrag staan
        this.jibby.hygiene -= 0.001;
        this.jibby.food -= 0.002;
        this.jibby.happyness += 0.0015;
    }

    onEat() {
        this.jibby.behaviour = new Eating(this.jibby);
        this.jibby.behaviour.performBehavior();
    }

    onWash() {
        this.jibby.behaviour = new Washing(this.jibby);
        this.jibby.behaviour.performBehavior();

    }

    onPet() {
        this.jibby.behaviour = new Happy(this.jibby);
        this.jibby.behaviour.performBehavior();
        
    }
}