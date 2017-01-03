'use strict';

var answer1 = confirm('Are you ready?');

if (answer1) {
  console.log('Woo! User is ready!');
} else {
  console.log('Sorry, too bad...');
}
alert ('We are going to play a guessing game about me! Please answer these questions with yes or no. Thanks.');

var answer2 = prompt('Do you think I am over 30 years old?')
console.log('The user answered: ' + answer2);

if (answer2.toUpperCase() === 'Y' || answer2.toUpperCase() === 'YES') {
  alert('Yup! I\'m 32. Nice job!');
} else {
  alert('Wrong! I am actually 32');
}
