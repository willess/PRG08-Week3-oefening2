class Angry implements Behavior {

    jibby: Jibby;
    private timer:number = 100;


    constructor(j: Jibby) {
        console.log("Jibby is Angry!");
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";

    }

    performBehavior() {
        this.timer --;
        this.jibby.happyness -= 0.050;


        if(this.timer < 1) {
            this.jibby.behaviour = new Idle(this.jibby);
        }
    }

    onEat() {
        console.log('Jibby iis Happy!');
        this.jibby.behaviour = new Eating(this.jibby);
    }

    onWash() {

    }

    onPet() {
        console.log('Jibby iis Happy!');
        this.jibby.behaviour = new Happy(this.jibby);
        
    }
}