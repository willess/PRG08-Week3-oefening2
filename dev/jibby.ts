class Jibby {

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

        // afbeelding voor idle
        this.div.classList.add("idle");

        // click listener voorbeeld
        this.div.addEventListener("click", () => this.onClick());

        
    }

    public update():void {
        this.hygiene -= 0.01;
        this.food -= 0.01;
        this.happyness -= 0.01;
    }


    private onClick():void {
        console.log("you clicked!");
    }


}