// task #1

let x = 1;
let y = 2;
let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x + y);
console.log(res3);
console.log(typeof res3);

let res4;
if (x > y) {
    res4 = x + y;
} else {
    res4 = NaN;
}
console.log(res4);
console.log(typeof res4);

let res5 = (Boolean(x) + String(y)) * x;
console.log(res5);
console.log(typeof res5);


// task #2

let userNumber = prompt('Enter a number');
if (userNumber % 2 === 0 && userNumber > 0 && userNumber % 7 === 0) {
    console.log(`it's a positive even number that is divisible by 7`)
} else if (userNumber % 2 === 0 && userNumber > 0) {
    console.log(`it's a positive even number`);
} else if (userNumber % 7 === 0) {
    console.log(`This number is divisible by 7`);
} else {
    console.log(`Choose another number: it's nor positive even number, nor divisible by 7`)
};


// task #3

let isAdult = confirm('Are you at least 18 years of age?');
if (isAdult === true) {
    alert(`Congrats, you are eligible to enter`);
} else {
    alert(`   Stay away kid! 
You shall not pass!`);
};


// task #4

let firstSide = parseFloat(prompt(`Enter length of first side`));
let secondSide = parseFloat(prompt('Enter length of second side'));
let thirdSide = parseFloat(prompt('Enter length of third side'));

let halfPerimeter = (firstSide + secondSide + thirdSide) / 2;
let triangleArea = (halfPerimeter * (halfPerimeter - firstSide) * (halfPerimeter - secondSide) * (halfPerimeter - thirdSide)) ** (1 / 2);

triangleArea === 0 || isNaN(triangleArea) ? alert(`Such triangle cannot exist`) : alert(`The area of triangle is ` + triangleArea.toFixed(3) + `\u33A0`);

if ((firstSide ** 2 === (secondSide ** 2) + (thirdSide ** 2)) || (secondSide ** 2 === (firstSide ** 2) + (thirdSide ** 2)) || (thirdSide ** 2 === (firstSide ** 2) + (secondSide ** 2))) {
    alert(`This triangle is a right triangle`);
} else {
    alert(`This triangle is not a right triangle`);
}


// task #5

let currentTime = new Date();
let hour = currentTime.getHours();
let clock = document.createElement('h1');
let clockData = document.createTextNode(currentTime.getHours() + `:` + currentTime.getMinutes() + `:` + currentTime.getSeconds());
clock.appendChild(clockData);
clock.style.fontFamily = 'monospace';
clock.style.fontSize = '72px';
clock.style.position = 'absolute';
clock.style.top = '50%';
clock.style.left = '50%';
clock.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(clock);

(5 <= hour && hour < 11) ? console.log(`Good morning!`): (11 <= hour && hour < 17) ? console.log(`Good afternoon!`) : (17 <= hour && hour < 23) ? console.log(`Good evening!`) : console.log(`Good night!`);

if (5 <= hour && hour < 11) {
    alert(`Good morning!`);
} else if (11 <= hour && hour < 17) {
    alert(`Good afternoon!`);
} else if (17 <= hour && hour < 23) {
    alert(`Good evening!`);
} else {
    alert(`Good night!`);
}