let input1 = prompt('Enter your first of two numbers: ')
let input2 = prompt('Enter your second number: ')

if (input1 < input2) {
  console.log('The second number is larger!')
  document.write('The second number is larger!')
} else if (input2 < input1) {
  console.log('The first number is larger!')
  document.write('The first number is larger!')
} else {
  console.log('The numbers are equal!')
  document.write('The numbers are equal!')
}
