const numbers = [4, 12, 8, 15, 12, 10];
const updatedNumbers = numbers.map(num => (num === 12 ? 89 : num));
console.log(updatedNumbers);