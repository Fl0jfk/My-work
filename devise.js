var readline = require("readline-sync");

do{ 

    console.log("Voici les devises que nous pouvons convertir :") 
    console.log("< Euro (Europe) > -" + " < Dollar (Etas-Unis) > -" + " < Rouble (Russie) > -" + " < Yen (Japon) >-" + " < Livre (Angleterre) >");
    console.log("< Franc suisse (Suisse) > -" + " < Dollar canadien (Canada) > -" + " < Baht (Thailande) > -" + " < Dirham (Maroc) > -" + " < Bitcoin (Cryptomonnaie) >");
    console.log("< Ethereum (Cryptomonnaie) > -" + " < Real (Brésil) > -" + " < Dinar (Tunisie) > -" + " < Shekel (Israel) > -" + " < Yuan (Chine) > -" + " < Dollar australien (Australie) >");
    var choixMenu = readline.question("Quelle devise voulez-vous convertir ? ");
    console.log("Vous avez choisi le " + choixMenu + " dans quelle devise souhaitez vous le convertir ? ");
    console.log("< Euro (Europe) > -" + " < Dollar (Etas-Unis) > -" + " < Rouble (Russie) > -" + " < Yen (Japon) >-" + " < Livre (Angleterre) >");
    console.log("< Franc suisse (Suisse) > -" + " < Dollar canadien (Canada) > -" + " < Baht (Thailande) > -" + " < Dirham (Maroc) > -" + " < Bitcoin (Cryptomonnaie) >");
    console.log("< Ethereum (Cryptomonnaie) > -" + " < Real (Brésil) > -" + " < Dinar (Tunisie) > -" + " < Shekel (Israel) > -" + " < Yuan (Chine) > -" + " < Dollar australien (Australie) >");
    var choixConversion = readline.question("");
    calculConversion(choixMenu, choixConversion);
    var choixMenuBoucle = readline.question("Souhaitez-vous continuer ou quitter ? ");

} while( choixMenuBoucle !== "quitter")
    
function calculConversion(choix1, choix2){
var cour = 0;
var cour2 = 0; 
var resultat = 0;
var sOuPasS = "";
var sOuPasS2 = "";

choix1 = choix1.toLowerCase(); 
choix2 = choix2.toLowerCase();

if(choix1 ===  "euros" || choix1 === "euro"){
    cour = 1;
} if(choix1 ===  "dollar" || choix1 === "dollars"){
    cour = 1.00745;
}  if(choix1 ===  "rouble" || choix1 === "roubles"){
    cour = 61.4293;
}  if(choix1 ===  "yen" || choix1 === "yens"){
    cour = 146.7645;
}  if(choix1 ===  "franc suisse" || choix1 === "francs suisses"){
    cour = 0.99275;
}  if(choix1 ===  "dollar canadien" || choix1 === "dollars canadiens"){
    cour = 1.3528;
}  if(choix1 ===  "baht" || choix1 === "bahts"){
    cour = 37.2695;
}  if(choix1 ===  "bitcoin" || choix1 === "bitcoins"){
    cour = 0.000057;
}  if(choix1 ===  "ethereum" || choix1 === "ethereums"){
    cour = 0.00083;
}  if(choix1 ===  choix1 === "real" || choix1 === "reals"){
    cour = 5.1765;
}  if(choix1 ===  choix1 === "dinar" || choix1 === "dinars"){
    cour = 3.2097;
}  if(choix1 ===  "shekel" || choix1 === "shekels"){
    cour = 3.5709;
}  if(choix1 ===  "yuan" || choix1 === "yuans"){
    cour = 7.2869;
}  if(choix1 === "dollar australien" || choix1 === "dollars australiens"){
    cour = 1.5507;
}
 
if(choix2 ===  "euros" || choix2 === "euro"){
    cour2 = 1;
} if(choix2 ===  "dollar" || choix2 === "dollars"){
    cour2 = 1.00745;
}  if(choix2 ===  "rouble" || choix2 === "roubles"){
    cour2 = 61.4293;
}  if(choix2 ===  "yen" || choix2 === "yens"){
    cour2 = 146.7645;
}  if(choix2 ===  "franc suisse" || choix2 === "francs suisses"){
    cour2 = 0.99275;
}  if(choix2 ===  "dollar canadien" || choix2 === "dollars canadiens"){
    cour2 = 1.3528;
}  if(choix2 ===  "baht" || choix2 === "bahts"){
    cour2 = 37.2695;
}  if(choix2 ===  "bitcoin" || choix2 === "bitcoins"){
    cour2 = 0.000057;
}  if(choix2 ===  "ethereum" || choix2 === "ethereums"){
    cour2 = 0.00083;
}  if(choix2 === "real" || choix2 === "reals"){
    cour2 = 5.1765;
}  if(choix2 ===  "dinar" || choix2 === "dinars"){
    cour2 = 3.2097;
}  if(choix2 ===  "shekel" || choix2 === "shekels"){
    cour2 = 3.5709;
}  if(choix2 ===  "yuan" || choix2 === "yuans"){
    cour2 = 7.2869;
}  if(choix2 === "dollar australien" || choix2 === "dollars australiens"){
    cour2 = 1.5507;
}
console.log("Vous avez choisi de convertir la devise " + choix1 + " en " + choix2 + ".");
var valeur1 = readline.questionInt(" Quelle est la valeur en "+ choix1 + " que vous souhaitez convertir en " + choix2 + " ? ");
resultat = (valeur1/cour) * cour2
if(resultat <= 1 ){

} if(choix1[choix1.length-1] === "s"){

} else {
    sOuPasS = "s"
}
if(resultat <= 1 ){

} if(choix2[choix2.length-1] === "s"){

} else {
    sOuPasS2 = "s"
}
console.log(valeur1 + " " + choix1 + sOuPasS + " équivaut à " + Math.round(resultat*1000)/1000 + " " + choix2 + sOuPasS2);              
}