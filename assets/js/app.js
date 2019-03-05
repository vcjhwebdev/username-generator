//Checking for local storage
function hasLocalStorage() {
	var testingLS = 'testingLS';
	try {
		localStorage.setItem(testingLS, testingLS);
		localStorage.removeItem(testingLS);
		return true;
	}
	catch (e) {
		console.log('Sorry, your browser does not support Web Storage...');
		return false;
	}
}


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
});

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


    //  var result = Math.random();
    // if(result < 0.33)  {
    //     result = ("Your username is" + animal + hobby + number);
    // }
    // else if (result > 0.33 && result < 0.66)  {
    //   result = ("Your username is" + hobby + animal + number);
    // }
    // else if (result > 0.66) {
    //   result = ("Your username is" + number + hobby + animal);
    // }

/*

function myFunction() {
  var x = document.getElementById("numberSelect").selectedIndex;
  alert(document.getElementsByTagName("option")[x].value);
} */
