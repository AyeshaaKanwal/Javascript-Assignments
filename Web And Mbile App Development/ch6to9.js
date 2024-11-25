// // math expressions
// var a = 10;
// var b = ++a;
// document.write("the value of ++a is " + b + "<br>" + "now the value of a is " + a + "<br>" + "<br>")
// var b1 = ++a;
// document.write("the value of ++a is " + b + "<br>" + "now the value of a is " + a + "<br>"+ "<br>")
// var b2 = --a;
// document.write("the value of ++a is " + b + "<br>" + "now the value of a is " + a + "<br>")
// var b3 = --a;
// document.write("the value of ++a is " + b + "<br>" + "now the value of a is " + a + "<br>")

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result);

// document.write("--a means value of a is 2 now 1" + "<br>")
// document.write("--a - --b means value of a is - by value of b which is 1 - 0 the answer is 1" + "<br>")
// document.write("--a - --b + ++b means 1 - 0 + 2 = 3" + "<br>")
// document.write("--a - --b + ++b + b-- means 1 - 0 + 2 + 0 = 3" + "<br>")

// // prompts

// var greetings = prompt("enter your name");
// document.write("hellow " + greetings);










// // function* generator() {
// //     yield 1;
// //     yield 2;
// //     yield 3;
// // }
// // const gen = generator();
// // console.log(gen.next()); //print 1
// // console.log(gen.next()); //print 2
// // console.log(gen.next()); //print 3*


// // function* iterator() {
// //     let i = 0;
// //     while (true) {
// //         yield++
// //     }
// // }

// // let num = iterator();
// // console.log(num.next()); //print 0
// // console.log(num.next()); //print 1
// // console.log(num.next()); //print 2 and so on



 function* generator() {
    for(var i = 0; i < 4 ; i++)
        yield i;
    }


const gen = generator[i]();
console.log(gen.next(i));









