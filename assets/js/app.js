function myFunction() {
    var x = document.getElementById("animalSelect").selectedIndex;
      document.write(document.getElementsByTagName("option")[x].value);


    var y = document.getElementById("hobbieSelect").selectedIndex;
      document.write(document.getElementsByTagName("option")[y].value);


    var z = document.getElementById("numberSelect").selectedIndex;
      document.write(document.getElementsByTagName("option")[z].value);
    }



  document.write(x + y + z)

/*

function myFunction() {
  var x = document.getElementById("numberSelect").selectedIndex;
  alert(document.getElementsByTagName("option")[x].value);
} */
