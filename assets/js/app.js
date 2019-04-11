
var form = document.getElementById('usernameForm');
var output = document.querySelector('.output');

form.addEventListener("submit", function(event){
  event.preventDefault();



  var animal = document.getElementById("animalSelect").value;
  var hobby = document.getElementById("hobbySelect").value;
  var number = document.getElementById("numberSelect").value;
  var symbol = document.getElementById("symbolSelect").value;

  var words = [];
  words.push(animal);
  words.push(hobby);
  words.push(number);

  // ['cat', 'waterpolo', '3']
  // ['catwaterpolo3', 'cat3waterpolo', 'waterpolo3cat', 'waterpolocat3', '3catwaterpolo', '3waterpolocat']

  var shuffled = generateAllPossibleNames(words);

  var username = shuffled.join('');

  output.textContent = symbol + username + symbol;
  localStorage.setItem('username', symbol + username + symbol);


});

 var previous = localStorage.getItem('username');
 output.textContent = previous;

/**
 * Takes an array and returns a shuffled array
 */
function generateAllPossibleNames(array) {
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



  // number of possibilities is 6
  // TODO: if you add more dropdowns, then # of possibilities changes

  // while (arrayOfNames.length < 6) {
  // generate more names
  // if newly generated name is NOT currently in arrayOfNames, then add it to arrayOfNames

  // }






  return shuffleArray(array);
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
