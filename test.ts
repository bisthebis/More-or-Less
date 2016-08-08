function randInt(min : number, max : number) {
    var interval : number = max - min
    return Math.floor((Math.random() * interval) + min);
}

class IODevice
{
    input: HTMLInputElement;
    output: HTMLElement;
    constructor() {
        this.input = <HTMLInputElement>document.getElementById("input");
        this.output = document.getElementById("output");
    }
}

class PlusOrMinus
{
    answer: number
    count: number
    device: IODevice
    constructor() {
        this.answer = randInt(1, 100);
        this.count = 0;
        this.device = new IODevice();
    }

    step() {
        var guess: number = parseInt(this.device.input.value);
        this.count++;

        var tell = (message: string) => {this.device.output.innerHTML = message;}

        if (guess == this.answer)
        {
            tell("Victory ! You needed " + this.count + " Guesses.");
        }
        else if (guess > this.answer)
        {
            tell("Too big");
        }
        else if (guess < this.answer)
        {
            tell("Too small");
        }
        else if (isNaN(guess))
        {
            tell("Not a number !");
            this.count--;
        }
        else
        {
            tell("Unknown error")
        }
   }
}

