
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
   window.addEventListener("mousemove", function (e) {
   	var to_append = document.getElementsByClassName('loader-container')[0];
   	var all = document.getElementsByClassName('loader-container');

   	var parent_div = document.createElement('div');
   	parent_div.className = "loader-container";
   	var inner_div = document.createElement('div');
   	inner_div.className = "loader";
   	parent_div.appendChild(inner_div)
   	var d = document.body.appendChild(parent_div);

   	parent_div.style.left = (e.clientX - 50)+'px';
   	parent_div.style.top = (e.clientY - 50)+'px';

   	if(document.getElementsByClassName('loader-container').length > 50) {
   		document.body.removeChild(to_append)
   	}
   });
