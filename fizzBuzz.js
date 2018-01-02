/*
Fizz Buzz Program to show fizz for numbers divisible by 3
and Buzz for numbers divisible by 5.
Show FizzBuzz for numbers divisible by both 3 and 5
*/

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}
