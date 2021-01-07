//Naam
var naam = prompt("vul je naam hier in")
    if (naam != null) {
      document.getElementById("demo").innerHTML =
      "Hallo " + naam +" en welkom bij mijn portofolio." ;
    }
//leeftijd
    var leeftijd = prompt("wat is je leeftijd?");
    if (leeftijd >= 18){
        document.body.style.backgroundColor = "lightgreen";
    }
    if (leeftijd < 18){
        document.body.style.backgroundColor = "rgb(238, 106, 106)";
    }
//console
let bezoeker ={
    naam:naam,
    leeftijd:leeftijd
}
console.log(bezoeker);