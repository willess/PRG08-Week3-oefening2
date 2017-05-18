var Angry = (function () {
    function Angry(j) {
        this.timer = 100;
        console.log("Jibby is Angry!");
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
    }
    Angry.prototype.performBehavior = function () {
        this.timer--;
        this.jibby.happyness -= 0.050;
        if (this.timer < 1) {
            this.jibby.behaviour = new Idle(this.jibby);
        }
    };
    Angry.prototype.onEat = function () {
        console.log('Jibby iis Happy!');
        this.jibby.behaviour = new Eating(this.jibby);
    };
    Angry.prototype.onWash = function () {
    };
    Angry.prototype.onPet = function () {
        console.log('Jibby iis Happy!');
        this.jibby.behaviour = new Happy(this.jibby);
    };
    return Angry;
}());
var Dead = (function () {
    function Dead(j) {
        console.log("Jibby is dead!");
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    }
    Dead.prototype.performBehavior = function () {
    };
    Dead.prototype.onEat = function () {
    };
    Dead.prototype.onWash = function () {
    };
    Dead.prototype.onPet = function () {
    };
    return Dead;
}());
var Eating = (function () {
    function Eating(j) {
        this.timer = 100;
        console.log("Jibby is Eating!");
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/eating.png')";
    }
    Eating.prototype.performBehavior = function () {
        this.timer--;
        this.jibby.food += 0.1;
        if (this.timer < 1) {
            this.jibby.behaviour = new Idle(this.jibby);
        }
    };
    Eating.prototype.onEat = function () {
    };
    Eating.prototype.onWash = function () {
        console.log('Jibby is ANGRY!');
        this.jibby.behaviour = new Angry(this.jibby);
    };
    Eating.prototype.onPet = function () {
    };
    return Eating;
}());
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 50;
        this.div.addEventListener("click", function () { return _this.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.onWash(); });
        this.behaviour = new Idle(this);
        this.div.style.backgroundImage = "url('images/idle.png')";
    }
    Jibby.prototype.update = function () {
        this.behaviour.performBehavior();
    };
    Jibby.prototype.onPet = function () {
        console.log("you clicked on jibby!");
        this.behaviour.onPet();
    };
    Jibby.prototype.onWash = function () {
        console.log("washing jibby!");
        this.behaviour.onWash();
    };
    Jibby.prototype.onEat = function () {
        console.log("jibby is eating!");
        this.behaviour.onEat();
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
        document.getElementsByTagName("happyness")[0].innerHTML = Math.round(this.jibby.happyness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Happy = (function () {
    function Happy(j) {
        this.timer = 100;
        console.log("Jibby is Happy!!");
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/happy.png')";
    }
    Happy.prototype.performBehavior = function () {
        this.timer--;
        this.jibby.happyness += 0.1;
        if (this.timer < 1) {
            this.jibby.behaviour = new Idle(this.jibby);
        }
    };
    Happy.prototype.onEat = function () {
    };
    Happy.prototype.onWash = function () {
    };
    Happy.prototype.onPet = function () {
    };
    return Happy;
}());
var Idle = (function () {
    function Idle(j) {
        this.timer = 1000;
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/idle.png')";
    }
    Idle.prototype.performBehavior = function () {
        this.timer--;
        if (this.timer < 1) {
            this.jibby.behaviour = new Sleeping(this.jibby);
        }
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        if (this.jibby.hygiene <= 0 || this.jibby.food <= 0 || this.jibby.happyness <= 0) {
            this.jibby.behaviour = new Dead(this.jibby);
        }
    };
    Idle.prototype.onEat = function () {
        this.jibby.behaviour = new Eating(this.jibby);
        this.jibby.behaviour.performBehavior();
    };
    Idle.prototype.onWash = function () {
        this.jibby.behaviour = new Washing(this.jibby);
        this.jibby.behaviour.performBehavior();
    };
    Idle.prototype.onPet = function () {
        this.jibby.behaviour = new Happy(this.jibby);
        this.jibby.behaviour.performBehavior();
    };
    return Idle;
}());
var Sleeping = (function () {
    function Sleeping(j) {
        console.log("Jibby is sleeping!");
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
    }
    Sleeping.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.001;
        this.jibby.food -= 0.002;
        this.jibby.happyness += 0.0015;
    };
    Sleeping.prototype.onEat = function () {
        this.jibby.behaviour = new Eating(this.jibby);
        this.jibby.behaviour.performBehavior();
    };
    Sleeping.prototype.onWash = function () {
        this.jibby.behaviour = new Washing(this.jibby);
        this.jibby.behaviour.performBehavior();
    };
    Sleeping.prototype.onPet = function () {
        this.jibby.behaviour = new Happy(this.jibby);
        this.jibby.behaviour.performBehavior();
    };
    return Sleeping;
}());
var Washing = (function () {
    function Washing(j) {
        this.timer = 100;
        console.log("Jibby is washing!");
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/washing.png')";
    }
    Washing.prototype.performBehavior = function () {
        this.timer--;
        this.jibby.hygiene += 0.1;
        if (this.timer < 1) {
            this.jibby.behaviour = new Idle(this.jibby);
        }
    };
    Washing.prototype.onEat = function () {
        console.log('Jibby is ANGRY!');
        this.jibby.behaviour = new Angry(this.jibby);
    };
    Washing.prototype.onWash = function () {
    };
    Washing.prototype.onPet = function () {
    };
    return Washing;
}());
//# sourceMappingURL=main.js.map