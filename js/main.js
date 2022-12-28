const buttonsNumber = document.querySelectorAll('.calculator__button > span');
const input = document.getElementById('#input');
const placeholder = input.getAttribute('placeholder');
const buttonsMath = document.querySelectorAll('.calculator__buttons-math')
const mathEl = document.querySelectorAll('.calculator__buttons-math')
const SAVE = document.getElementById('#save')
const PLUS = document.getElementById('#plus')
const EQUALLY = document.getElementById('#equally');
const CLEAR = document.getElementById('#clear');
const MULTI = document.getElementById('#multi');
const HALF = document.getElementById('#half')
const MINUS = document.getElementById('#minus');
const ONE = document.getElementById('#1');
const TWO = document.getElementById('#2');
const THREE = document.getElementById('#3');
const FOUR = document.getElementById('#4');
const FIVE = document.getElementById('#5');
const SIX = document.getElementById('#6');
const SEVEN = document.getElementById('#7');
const EIGHT = document.getElementById('#8');
const NINE = document.getElementById('#9');
const ZERO = document.getElementById('#0')
const RESULTS = document.getElementById('#results');

let buttonResults = RESULTS.addEventListener('click', function() {
    input.value = calculator.saveResult;

});

let buttonMinus = MINUS.addEventListener('click', function() {
    calculator.minus();
});

let buttonHalf = HALF.addEventListener('click', function() {
    calculator.half();
});

let buttonClear = CLEAR.addEventListener('click', function() {
    calculator.clear()
});

let buttonave = SAVE.addEventListener('click', function() {
    calculator.save();

});

let buttonEqually = EQUALLY.addEventListener('click', function(){
    calculator.equally();
});


let buttonPlus = PLUS.addEventListener('click', function() {
    calculator.plus();

});

let buttonMulti = MULTI.addEventListener('click', function(){
    calculator.multi();
});

let buttonOne = ONE.addEventListener('click', function() {
    calculator.read(1)
});

let buttonTwo = TWO.addEventListener('click', function() {
    calculator.read(2)
});

let buttonThree = THREE.addEventListener('click', function() {
    calculator.read(3);
});

let buttonFour = FOUR.addEventListener('click', function() {
    calculator.read(4);
});

let buttonFive = FIVE.addEventListener('click', function(){
    calculator.read(5);
});

let buttonSix = SIX.addEventListener('click', function() {
    calculator.read(6);
});

let buttonSeven = SEVEN.addEventListener('click', function() {
    calculator.read(7);
});

let buttonEight = EIGHT.addEventListener('click', function() {
    calculator.read(8);
});

let buttonNine = NINE.addEventListener('click', function() {
    calculator.read(9);
});

let buttonZero = ZERO.addEventListener('click', function() {
    calculator.read(0);
});

const calculator = {
    saveResult: [],
    read(number) {
        if (input.value == 'Saved') {
            input.value = ''
        }
        return this.currentNumbers = input.value += number;
    },
    save() {
        if (!this.currentNumbers) return false;
        if (typeof this.currentNumbers == 'string') {
            return false
        }
        input.value = 'Saved';
        return this.saveResult.push(this.currentNumbers);
        
        
    },
    plus(){
        this.result =+ this.currentNumbers;
        this.operator = '+';
        this.currentNumbers = 0;
        input.value = '+';

    },
    multi() {
        this.result =+ this.currentNumbers;
        this.operator = '*';
        this.currentNumbers = 0;
        input.value = '*';
    },
    half() {
        this.result =+ this.currentNumbers;
        this.operator = '/';
        this.currentNumbers = 0;
        input.value = '/';
    },
    minus() {
        this.result =+ this.currentNumbers;
        this.operator = '-';
        this.currentNumbers = 0;
        input.value = '-';
    },
    clear(){
        this.currentNumbers = ''
        input.placeholder = ''
        input.value = ''
    },
    equally() {
            if(this.operator == '+') {
            number = Number(this.currentNumbers);
            this.currentNumbers = number + this.result;
            input.value = this.currentNumbers;
            }
            if(this.operator == '*') {
                this.currentNumbers = this.currentNumbers.replace('*', '')
                number = Number(this.currentNumbers);
                this.currentNumbers = number * this.result;
                input.value = this.currentNumbers;
            }
            if(this.operator == '/') {
                this.currentNumbers = this.currentNumbers.replace('/', '')
                number = Number(this.currentNumbers);
                this.currentNumbers = (Math.floor(this.result / number));
                input.value = this.currentNumbers;
            }
            if(this.operator == '-') {
                this.currentNumbers = this.currentNumbers.replace('-', '');
                number = Number(this.currentNumbers);
                this.currentNumbers = (Math.abs(number - this.result));
                input.value = this.currentNumbers;
                }
            }
        }   
        


    





