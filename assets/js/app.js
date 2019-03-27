

//Generating username by getting the name
var form = document.getElementById('usernameForm');

form.addEventListener("submit", function(event){
  event.preventDefault();


  // var x = document.getElementById("animalSelect").selectedIndex;
  var animal = document.getElementById("animalSelect").value;

  // var y = document.getElementById("hobbySelect").selectedIndex;
  var hobby = document.getElementById("hobbySelect").value;

  // var z = document.getElementById("numberSelect").selectedIndex;
  var number = document.getElementById("numberSelect").value;

  //console.log(animal,hobby,number);

  var output = document.querySelector('.output');

  var words = [];
  words.push(animal);
  words.push(hobby);
  words.push(number);

  var shuffled = shuffleArray(words);

  var username = shuffled.join('');
  var username = shuffled.join('');
  var username = shuffled.join('');

  output.textContent = username;
function theLocalstorage(){
  if(localStorage.getItem('username') === null) {
    localStorage.getItem('username');
  } else {
    localStorage.getItem('username');
    localStorage.setItem('username', username);
  }
};
document.getElementById("previous").innerHTML = localStorage.getItem('username');
});

var LStorage = localStorage.getItem('username');
var previous = document.querySelector('.output');
previous.textContent = LStorage;

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

function local()	{
	output();
  theLocalstorage();

}

//find all local storage
function allStorage() {
    var archive = [];
    for (var i = 0; i<localStorage.length; i++) {
        archive[i] = localStorage.getItem(localStorage.key(i));
    }
}
