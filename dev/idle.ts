class Idle implements Behavior {

    jibby:Jibby;
    private timer:number = 1000;


    constructor(j: Jibby)
    {
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/idle.png')";
    }

    performBehavior() {
        this.timer--;

        if(this.timer < 1) {
            this.jibby.behaviour = new Sleeping(this.jibby);
        }
        // waarden verlagen per frame - dit moet in het gedrag staan
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;



        if(this.jibby.hygiene <= 0 || this.jibby.food <= 0 || this.jibby.happyness <= 0) {
            this.jibby.behaviour = new Dead(this.jibby);
        }
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