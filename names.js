const names = ['Harry', 'Michael', 'Abigail', 'Lou'];

const newNames = names.concat('Leon'); // adds one element and return a new array

// We can access elements with []
console.log(names[0]); // 1

console.log(names); // [1, 2, 3, 4]

console.log(newNames) // [1, 2, 3, 4, 5]

console.log(names.length) // 4

console.log(newNames.length) // 5

// Loop through the array and execute code for each element
names.forEach((names) => {
  console.log(names);
})