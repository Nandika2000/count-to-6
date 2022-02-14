var numbers = process.argv.slice(2);
var min_number = Math.min(...numbers);

const message = `The minimum of [${numbers}] is ${min_number}`;

console.log(message);