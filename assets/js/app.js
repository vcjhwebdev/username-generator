//["cat", "soccer", "2"];
// "catsoccer2"



  function myFunction() {

    function shuffleWords(words) {
      // randomize array

      return words.join();
    }

    var x = document.getElementById("animalSelect").selectedIndex;
    var animal = document.getElementsByTagName("option")[x].value;


    var y = document.getElementById("hobbieSelect").selectedIndex;
    var hobby = document.getElementsByTagName("option")[y].value;


    var z = document.getElementById("numberSelect").selectedIndex;
    var number = document.getElementsByTagName("option")[z].value;

    var output = document.querySelector('.output');

    var words = [];
    words.push(animal);
    words.push(hobby);
    words.push(number);

    var result = shuffleWords(words);

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

    output.textContent = result;
    }





/*

function myFunction() {
  var x = document.getElementById("numberSelect").selectedIndex;
  alert(document.getElementsByTagName("option")[x].value);
} */
