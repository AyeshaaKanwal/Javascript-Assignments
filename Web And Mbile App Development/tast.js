//Write a function `createCounter` that creates a closure and allows a user to increment or reset a
// counter. Example:
// const counter = createCounter();
// counter.increment(); // 1

// counter.increment(); // 2
// counter.reset(); // 0
let count = 0;
function createCounter() {
    return {
        increment: function () {
            count++;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
            
        }
    };
}
const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.reset());     // 0


function greetUser(timeofday, name) {
    console.log(`Good ${timeofday} ${name}`);
}
greetUser("Morning", "alice!");

//Destructuring and Default Parameters
// Given the following object:
// const user = { name: 'John', age: 25, city: 'New York' };
// Write a function that extracts `name` and `city` with default parameters and logs the following:
// Name: John, City: New York







// Fix the Arrow Function
// The following arrow function throws an error. Fix it:
// const add = (a, b) => { return a + b }

