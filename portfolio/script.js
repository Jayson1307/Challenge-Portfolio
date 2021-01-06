console.log("test")
var naam = prompt("vul je naam hier in")
    if (naam != null) {
      document.getElementById("demo").innerHTML =
      "Hallo " + naam +". En welkom bij mijn portofolio." ;
    }
    -leeftijd
    var leeftijd = prompt("wat is je leeftijd?");
    if (leeftijd >= 18){
        document.body.style.backgroundColor = "lightgreen";
    }
    if (leeftijd < 18){
        document.body.style.backgroundColor = "rgb(238, 106, 106)";
    }
