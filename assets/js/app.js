//["cat", "soccer", "2"];
// "catsoccer2"



  function myFunction() {



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
    return words.join();

    var result = shuffleWords(words);



    output.textContent = result;
    console.log(words);
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
