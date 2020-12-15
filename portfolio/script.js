var naam = prompt("vul je naam hier in");
    if (naam != null) {
      document.getElementById("demo").innerHTML =
      "Hallo " + naam +". En welkom bij mijn portofolio." ;
    }



var leeftijd = prompt("hoe oud ben je");
if(leeftijd >= 18){
    document.body.style.backgroundColor = "green";
}
if(leeftijd <= 17){
    document.body.style.backgroundColor = "red";
}

//console
let bezoeker ={
    naam:naam,
    leeftijd:leeftijd
}
console.log(bezoeker);