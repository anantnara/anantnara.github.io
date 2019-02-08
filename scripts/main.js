/*
Everything in between is a comment.
*/

// This is a comment


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/grid-pts.png') {
      myImage.setAttribute ('src','images/contribs.png');
    } else {
      myImage.setAttribute ('src','images/grid-pts.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Kanchana loves ' + storedName;
}


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Kanchana loves '  + myName;
}

myButton.onclick = function() {
  setUserName();
}

/*


var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myHTML = document.querySelector('html');
myHTML.onclick = function() {
    alert('Ouch! Stop poking me!');
}


var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}



function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}



multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

*/