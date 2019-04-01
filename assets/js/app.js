
var form = document.getElementById('usernameForm');

form.addEventListener("submit", function(event){
  event.preventDefault();



  var animal = document.getElementById("animalSelect").value;
  var hobby = document.getElementById("hobbySelect").value;
  var number = document.getElementById("numberSelect").value;
  var symbol = document.getElementById("symbolSelect").value;


  var output = document.querySelector('.output');

  var words = [];
  words.push(animal);
  words.push(hobby);
  words.push(number);
  words.push(symbol);
  var shuffled = shuffleArray(words);

  var username = shuffled.join('');
  var username = shuffled.join('');
  var username = shuffled.join('');
  var username = shuffled.join('');
  output.textContent = username;

  if(!localStorage.getItem('username')) {
    localStorage.setItem('username', username);
  } else {
    localStorage.getItem('username');
    localStorage.setItem('username', username);
  }
});
var previous = localStorage.getItem('username')
var user = localStorage.getItem('username')
previous.textContent = user;

/**
 * Takes an array and returns a shuffled array
 */
function shuffleArray(array) {
  var i = 0
     , j = 0
     , temp = null

   for (i = array.length - 1; i > 0; i -= 1) {
     j = Math.floor(Math.random() * (i + 1))
     temp = array[i]
     array[i] = array[j]
     array[j] = temp
   }
return array;
}
function previoust() {
  document.getElementById("prev")
}
function local()	{
	output();
  previoust();
}

//find all local storage

// var test = 1
// localStorage.setItem(Math.random(), test);
// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

// The Dot object used to scaffold the dots
var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};
// The Dot.prototype.draw() method sets the position of
  // the object's <div> node
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.x,
      y = mouse.y;

  // This loop is where all the 90s magic happens
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}

addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();
