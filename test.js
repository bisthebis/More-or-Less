function randInt(min, max) {
    var interval = max - min;
    return Math.floor((Math.random() * interval) + min);
}
var IODevice = (function () {
    function IODevice() {
        this.input = document.getElementById("input");
        this.output = document.getElementById("output");
    }
    return IODevice;
}());
var PlusOrMinus = (function () {
    function PlusOrMinus() {
        this.answer = randInt(1, 100);
        this.count = 0;
        this.device = new IODevice();
    }
    PlusOrMinus.prototype.step = function () {
        var _this = this;
        var guess = parseInt(this.device.input.value);
        this.count++;
        var tell = function (message) { _this.device.output.innerHTML = message; };
        if (guess == this.answer) {
            tell("Victory ! You needed " + this.count + " Guesses.");
        }
        else if (guess > this.answer) {
            tell("Too big");
        }
        else if (guess < this.answer) {
            tell("Too small");
        }
        else if (isNaN(guess)) {
            tell("Not a number !");
            this.count--;
        }
        else {
            tell("Unknown error");
        }
    };
    return PlusOrMinus;
}());
