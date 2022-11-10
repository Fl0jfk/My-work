var readline = require("readline-sync");
var menu = readline.question("Souhaitez-vous créer un minuteur ? ");
if(menu === "oui"){
var nbreJours = readline.questionInt("De combien de jours voulez-vous décompter ? ");
var nbreHeures = readline.questionInt("De combien d'heures voulez-vous décompter ? ");
var nbreMinutes = readline.questionInt("De combien de minutes voulez vous décompter ? ");
var nbreSecondes = readline.questionInt("De combien de secondes voulez vous décompter ? ");
var temps = (nbreJours * 24 * 60 * 60)+ (nbreHeures * 60 * 60) + (nbreMinutes * 60) + nbreSecondes;
decompte(temps);
} else {
    console.log("Merci au revoir.")
}

function decompte(temps){
    var sOuPasSJ = "s";
    var sOuPasSH = "s";
    var sOuPasSM = "s";
    var sOuPasSS = "s";
    console.log("Le minuteur commence : ");
    var compteRebours = setInterval(function(){
    var jours = parseInt(temps /(60 * 60 * 24), 10);
    var heures = parseInt((temps  / (60 * 60) - jours * 24), 10);
    var minutes = parseInt((temps / 60 - jours * 24 * 60  - heures * 60), 10);
    var secondes = parseInt((temps - jours * 24 * 60 * 60 - heures * 60 * 60 - minutes * 60), 10);
    jours = jours < 10 ? "0" + jours : jours;
    heures = heures < 10 ? "0" + heures : heures;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
    if(jours === "01"){
        sOuPasSJ = "";
    } else {
        sOuPasSJ = "s";
    }
    if(heures === "01"){
        sOuPasSH = "";
    } else if(heures === "00"){
        sOuPasSH = "";
    } else {
        sOuPasSH = "s";
    }
    if(minutes === "01"){
        sOuPasSM = "";
    } else if(minutes === "00"){
        sOuPasSM = "";
    } else {
        sOuPasSM = "s";
    }
    if(secondes === "00"){
        sOuPasSS = "";
    } else if(secondes === "01"){
        sOuPasSS = "";
    } else {
        sOuPasSS = "s";
    }  
    if(temps >= 86400){
        console.log("Il reste " + jours + " jour" + sOuPasSJ + " " + heures + " heure" + sOuPasSH + " " + minutes + " minute" + sOuPasSM + " " + secondes + " seconde" + sOuPasSS + ".");
    }
    if(temps < 86400 && temps > 3600){
        console.log("Il reste " + heures + " heure" + sOuPasSH + " " + minutes + " minute"+ sOuPasSM + " " + secondes + " seconde" + sOuPasSS + ".");
    }       
    if(temps < 3600 && temps > 60){
        console.log("Il reste " + minutes + " minute" + sOuPasSM + " " + secondes + " seconde" + sOuPasSS + ".");
    }        
    if(temps < 60){
        console.log("Il reste " + secondes + " seconde" + sOuPasSS + ".");
    }   
    temps = temps <= 0 ? 0 : temps - 1;
    if(temps === 0){
        temps = console.log("Le décompte est terminé");
        clearInterval(compteRebours);
    }
  }, 1000);
}
//Vacarme27&Fl0jfk
