'use strict';

var answer1 = confirm('Are you ready?');

if (answer1) {
  console.log('Woo! User is ready!');
} else {
  console.log('Sorry, too bad...');
}
alert ('We are going to play a guessing game about me! Please answer these questions with yes or no. Thanks.');

var answer2 = prompt('Do you think I am over 30 years old?');
console.log('The user answered: ' + answer2);

if (answer2.toUpperCase() === 'Y' || answer2.toUpperCase() === 'YES') {
  alert('Yup! I\'m 32. Nice job!');
} else {
  alert('Wrong! I am actually 32');
}

var answer3 = prompt('Do you think I am from California?');
console.log('The user answered: ' + answer3);

if (answer3.toUpperCase() === 'Y' || answer3.toUpperCase() === 'YES') {
  alert('Nope. I grew up here in Seattle.');
} else {
  alert('Correct. Not from California. I grew up in Seattle.');
}

var answer4 = prompt('Do you think I am a military vet?');
console.log('The user answered: ' + answer4);

if (answer4.toUpperCase() === 'Y' || answer4.toUpperCase() === 'YES') {
  alert('No, sorry. I totally tricked you on that one.');
} else {
  alert('Correct! I tried to trick you on that one.');
}

var answer5 = prompt('Do you think I have ever traveled outside of North America?');
console.log('The user answered: ' + answer5);

if (answer5.toUpperCase() === 'Y' || answer5.toUpperCase() === 'YES') {
  alert('Right you are! I\'ve been all over the place.');
} else {
  alert('You were way off! 27 countries.');
}

var answer6 = prompt('Last one. Do you think I want to learn code to make money?');
console.log('The user answered: ' + answer6);

if (answer6.toUpperCase() === 'Y' || answer6.toUpperCase() === 'YES') {
  alert('Correct! You bet your ass I am!');
} else {
  alert('Totally wrong. This is why I am here!')
}
