class Jibby {

    public behaviour: Behavior;

    public hygiene:number;
    public food:number;
    public happyness:number;

    public div:HTMLElement;
    public x:number;
    public y:number;
            
    constructor(parent:HTMLElement) {
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);

        // start instellingen
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 50;

        // click listeners
        this.div.addEventListener("click", () => this.onPet());
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.onEat());
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.onWash());

        // hier het gedrag toekennen
        this.behaviour = new Idle(this);
        
        // afbeelding voor idle - verplaatsen naar idle gedrag
        this.div.style.backgroundImage = "url('images/idle.png')";
    }

    public update():void {
        // hier het gedrag updaten
        this.behaviour.performBehavior();
    }

 
    private onPet():void {
        console.log("you clicked on jibby!");
        // hier moet je de onPet functie van het gedrag aanroepen
        this.behaviour.onPet();
    }

    private onWash():void {
        console.log("washing jibby!");
        // hier moet je de onWash functie van het gedrag aanroepen
        this.behaviour.onWash();
    }

    private onEat():void {
        console.log("jibby is eating!");
        // hier moet je de onEat functie van het gedrag aanroepen
        this.behaviour.onEat();
    }


}
