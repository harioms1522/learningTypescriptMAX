function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

////////////////// Type Inference  ////////////////////////

// We don't have to define the type of initialized vars
let resultPhrase = 'Result is: ';

// see that the type is implicitly assigned
// resultPhrase = 0

// const variables are more specific these can also determine the specific type see by hovering
const printResult = true;
const number2 = 2.8;

// We should give type to the uninitialized variables that will be used in code later
let number1: number;
number1 = 5;

// console.log(number1)

add(number1, number2, printResult, resultPhrase);
