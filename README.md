# PRG08-Week3-oefening2

## Jibby

Jibby is een beestje dat jij in leven zal moeten houden. Dit doe je door hem aandacht te geven, eten te geven en schoon te houden. Maar let op, wanneer je je aandacht laat wegzakken en Jibby niet goed onderhoudt zal Jibby dit laten merken! Je zal acties moeten ondernemen om de status op de onderdelen Hygiene, Tevredenheid, Voeding op peil te houden. Dit doe je door opdrachten uit te voeren. Je kunt verschillende acties uitvoeren zoals:

- Douchen. Dit doe je door op het douche icoontje te klikken. Het douchen duurt 4 seconden en na het douchen zal Jibby automatisch terug gaan naar zijn standaard (Idle) status.
- Eten. Door op het icoontje met de appel te klikken geef je Jibby te eten. Dit duurt 3 seconden en ook hierna komt Jibby automatisch in zijn standaard status terug.
- Aaien. Door met de muis op Jibby te klikken geef je hem aandacht en zal zijn tevredenheid toenemen.

## Opdracht

- Teken een UML voor Jibby
- In de game loop hou je bij hoeveel eten Jibby nog heeft, hoe schoon en hoe happy hij nog is. Toon dit in de interface.
- Gebruik het strategy pattern om het gedrag van Jibby te programmeren. Begin met Idle, Sleeping, Dead
- De gedragingen hebben elk een eigen afbeelding. Dit kan je aanpassen met `div.classList.add("idle");`.
- De game begint met het gedrag 'idle'. Hierin doet Jibby niets. Als dit te lang duurt verandert het gedrag in Sleeping.
- Het Sleeping gedrag is dat hij na een tijdje weer wakker wordt.
- Als tijdens de game loop het voedsel, hygiene of happyness op 0 komt gaat Jibby dood... Ook dit is een gedrag.

## Buttons

- De knoppen wassen, eten geven, aaien veranderen het gedrag van Jibby.
- De click eventListeners zijn onderdeel van jibby.ts en game.ts. 
- Echter, ze roepen de `onEat()`, `onWash()` en `onPet()` functies **van het huidige gedrag** van jibby aan.
- Op die manier kan Jibby anders op de knoppen reageren als hij iets aan het doen is.
- Wat voor gedrag heb je allemaal nodig? Wat gebeurt er als je Jibby aait terwijl hij aan het eten is? Wat gebeurt er als je hem wast terwijl hij slaapt?
- Wat zou er gebeuren als je Jibby aanraakt terwijl hij dood is...

## Resultaat

![Jibby](jibbyresult.png?raw=true "Jibby")

## Strategy Pattern Voorbeeld

```
class Person {
    private myBehavior:Behavior;
    constructor(){
        this.myBehavior = new Jump(this);
        this.myBehavior.execute();
    }
}

class Jump implements Behavior {
    public person : Person;
    constructor(p:Person){
        this.person = p;
    }
    public execute(){
        console.log("I am Jumping!");
    }
}

interface Behavior {
    person:Person;
    execute() : void;
}
```

### Event Listeners 

De game heeft drie click listeners. De code voor de 'onClick' handlers staat in het gedrag.

```
class Test {
    constructor(){
        // listener toevoegen
        washButton.addEventListener("click", (e:MouseEvent) => this.onWash(e));
    }

    private onWash(e:MouseEvent):void {
        // hier de wash handler van het huidige gedrag aanroepen
    }
}
```
