var number = 10;

let text = "bla bla bla";

const booleanVariable = true;

var number2 = 5;
console.log(number2);
number2 = 6;
console.log(number2);

let number3 = 7;
console.log(number3);
number3 = 8;
console.log(number3);

const number4 = 9;
number4 = 10;

/* 
Error: Assignment to constant variable.
js:18
number4 = 10;
        ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (c:\Users\Amina\Desktop\FE\_front-end-homewroks\web-dev-exercises\JavaScript\Primitive-Data-Types\4. Understanding let, const, and var.js:18:9)
    at Module._compile (node:internal/modules/cjs/loader:1369:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)
    at Module.load (node:internal/modules/cjs/loader:1206:32)
    at Module._load (node:internal/modules/cjs/loader:1022:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.12.2
*/

console.log(number4);

/*
Declaring a variable with const depends on context. If the value should not change, we should use const.
The reason is that we do not want to accidentally change the value of a variable that should not be changed.
On the other hand, if the value changes through the code, we should use let.
*/
