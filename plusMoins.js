var readline = require("readline-sync");
do{
    afficherMenu();
var menu = readline.questionInt("Que voulez-vous faire?")
switch(menu){
    case 1 : jeuPlusMoins();
    break;
    case 0 : console.log("Merci d'avoir joué A+");
    break;
    default : console.log("Saisir 1 pour jouer ou 0 pour quitter");
}
}while(menu !== 0);


function jeuPlusMoins(){
var random = Math.floor(Math.random() * 1000 + 1);
do{
    var saisie = readline.questionInt("trouvez le nombre secret (entre 1 et 1000) ");
if(random > saisie){
    console.log("C'est plus")
} else if(random < saisie){
    console.log("C'est moins")
} else if( random = saisie){
    console.log("Félicitation !\nLe nombre était : " + random);
} 
}
while(saisie !== random);
}


function afficherMenu(){
    var menu = "**************************************\n"
    menu += "Bienvenue dans le jeu du Plus ou moins\n"
    menu += "**************************************\n"
    menu += "-----------/1 Jouer au jeu------------\n"
    menu += "-------------/0 Quitter---------------\n"
    menu += "**************************************"
    console.log(menu);
}