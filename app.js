'use strict';

var counter = 0;
var username = prompt('What is your name?');
console.log('The user answered: ' + username);

function questionOne() {
  var answer1 = confirm('Are you ready?');

  if (answer1) {
    console.log('Woo! User is ready!');
  } else {
    console.log('Sorry, too bad...');
  }
}
questionOne();

alert('We are going to play a guessing game about me! Please answer these questions with yes or no. Thanks.');

function questionTwo() {
  var answer2 = prompt('Do you think I am over 30 years old?');
  console.log('The user answered: ' + answer2);

  if (answer2.toUpperCase() === 'Y' || answer2.toUpperCase() === 'YES') {
    alert('Yup! I\'m 32. Nice job!');
    counter ++;
  } else {
    alert('Wrong! I am actually 32');
  }
}
questionTwo();
function questionThree() {
  var answer3 = prompt('Do you think I am from California?');
  console.log('The user answered: ' + answer3);

  if (answer3.toUpperCase() === 'Y' || answer3.toUpperCase() === 'YES') {
    alert('Nope. I grew up here in Seattle.');
  } else {
    alert('Correct. Not from California. I grew up in Seattle.');
    counter ++;
  }
}
questionThree();

function questionFour() {
  var answer4 = prompt('Do you think I am a military vet?');
  console.log('The user answered: ' + answer4);

  if (answer4.toUpperCase() === 'Y' || answer4.toUpperCase() === 'YES') {
    alert('No, sorry. I totally tricked you on that one.');
  } else {
    alert('Correct! I tried to trick you on that one.');
    counter ++;
  }
}

var answer5 = prompt('Do you think I have ever traveled outside of North America?');
console.log('The user answered: ' + answer5);

if (answer5.toUpperCase() === 'Y' || answer5.toUpperCase() === 'YES') {
  alert('Right you are! I\'ve been all over the place.');
  counter ++;
} else {
  alert('You were way off!');
}

var answer6 = prompt('Do you think I want to learn code to make money?');
console.log('The user answered: ' + answer6);

if (answer6.toUpperCase() === 'Y' || answer6.toUpperCase() === 'YES') {
  alert('Correct! You bet your ass I am!');
  counter ++;
} else {
  alert('Totally wrong. This is why I am here!');
}

var answer7 = prompt('Ok, good job.  Now let\'s try something different. I love to travel. How many countries do you think I\'ve been to?  Please answer with a number. You get 4 guesses.');
console.log('The user answered: ' + answer7);

for(var index = 0; index < 3; index++) {
  if (parseInt(answer7) === 18) {
    alert('Wow, you got it!');
    counter ++;
    index = 3;
  } else if (answer7 > 18) {
    var answer7 = prompt('Not that many. Try again.');
  } else if (answer7 < 18) {
    var answer7 = prompt('More than that. Try again.');
  }
}

var countries = ['taiwan', 'thailand', 'cambodia', 'costa rica', 'spain', 'italy', 'france', 'switzerland', 'dominican republic', 'argentina', 'brazil', 'peru', 'bolivia', 'uruguay', 'chile'];
for (var index = 0; index < 5; index++) {
  var answer8 = prompt('Ok, now that you know I\'ve been to 18 countries, lets see if you can guess one that I\'ve been to outside of North America.  I\'ll give you 6 guesses. Good luck.').toLowerCase();
  console.log('The user guessed ' + answer8);
  for (var guess = 0; guess < countries.length; guess++) {
    console.log('what?');
    if (countries[guess] === answer8) {
      console.log('yay!');
      alert('Wow that is correct. Nice work.');
      index = 14;
      counter ++;
    }
  }
  if(index < 14) {
    alert('Nope. Guess again.');
  }
}
alert(username + ', you got ' + counter + ' questions correct!');

document.write('<p>' + 'Question 1: Do you think I am over 30 years old? Answer: YES. You answered: ' + answer2.toUpperCase() + '</p>');

document.write('<p>' + 'Question 2: Do you think I am from California? Answer: NO. You answered: ' + answer3.toUpperCase() + '</p>');

document.write('<p>' + 'Question 3: Do you think I am a military vet? Answer: NO. You answered: ' + answer4.toUpperCase() + '</p>');

document.write('<p>' + 'Question 4: Do you think I have ever traveled outside of North America? Answer: YES. You answered: ' + answer5.toUpperCase() + '</p>');

document.write('<p>' + 'Question 5: Do you think I want to learn code to make money? Answer: YES. You answered: ' + answer6.toUpperCase() + '</p>');
