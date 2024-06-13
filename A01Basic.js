// console.log("hello");
// console.log("Anjali");
// let a=10;
// let b=20;
// console.log("sum is: ",a+b);

let pencilPrice=10;
let eraserPrice = 5;
// let output="the total price is: "+(pencilPrice+eraserPrice)+ " rupees."
// console.log(output);
// let output=`the total is: ${pencilPrice} rupees.` // back ticks
// console.log(output);


// Arithmetic operation

let a = 10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a++) // 10
console.log(a) // 11

console.log(++a); // 12 

let age=18;
console.log(age>18); // false


// conditional statements
console.log("before my if statement");

let Age = 13;
if(Age>=18){
    console.log("you can vote");
    console.log("you can drive");
    let a=5;
    console.log(5*a);
}

if(Age<18){
    console.log("you cannot vote");
}

let fullName="Anjali";
if(fullName="Anjali"){
    console.log(`Welcome ${fullName}`);
}

console.log("after my if statement");


let color="red"

// traffic light system
if(color=="red"){
    console.log("stop!! light color is red");
}
if(color=="yellow"){
    console.log("slow down!! light color is yellow");
}
if(color=="green"){
    console.log("Go!! light color is green");
}


// alert("something is wrong");
console.log("this is a simple msg");
console.error("this is a error msg");
console.warn("this is a warning msg");



let firstName = prompt("Enter your name: ");
console.log(firstName);