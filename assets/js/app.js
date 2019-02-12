//["cat", "soccer", "2"];
// "catsoccer2"
var form = document.getElementById('usernameForm');

form.addEventListener("submit", function(event){
  event.preventDefault();
  var x = document.getElementById("animalSelect").selectedIndex;
  var animal = document.getElementsByTagName("option")[x].value;

  var y = document.getElementById("hobbySelect").selectedIndex;
  var hobby = document.getElementsByTagName("option")[y].value;

  var z = document.getElementById("numberSelect").selectedIndex;
  var number = document.getElementsByTagName("option")[z].value;

  var output = document.querySelector('.output');

  var words = [];
  words.push(animal);
  words.push(hobby);
  words.push(number);

  var shuffled = shuffleArray(words);

  var username = shuffled.join();

  output.textContent = username;
});

/**
 * Takes an array and returns a shuffled array
 */
function shuffleArray(array) {


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
