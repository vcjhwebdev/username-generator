var x = document.getElementById("animalSelect").selectedIndex;
  alert(document.getElementsByTagName("option")[x].value);
  var y = document.getElementById("hobbieSelect").selectedIndex;
    alert(document.getElementsByTagName("option")[x].value);
    var z = document.getElementById("numberSelect").selectedIndex;
      alert(document.getElementsByTagName("option")[x].value);
function myFunction() {
  document.write(x + y + z)
}
