var readline = require("readline-sync");
//MAIN
do{
    afficherMenu();
var menu = readline.questionInt("Que voulez-vous faire?")
switch(menu){
    case 1 :var taille = readline.questionInt("Quel est votre taille ? (en cm)");
            var poids = readline.questionInt("Quel est votre poids ? (en kg)");
                if (CalcImc(taille,poids) <= 16){
                    console.log("Votre IMC est de : " + CalcImc(taille,poids) + "\nExtreme maigreur : Votre indice est un très faible, c'est à dire que vous êtes très maigre. Il faut faire très attention, je vous recomande de voir un nutrioniste!");
                }
                if (CalcImc(taille,poids) > 16 && CalcImc(taille,poids) <=18.5){
                    console.log("Votre IMC est de : " + CalcImc(taille,poids) + "\nMaigreur : Votre poids apparaît trop faible par rapport à votre taille. Ce faible indice de masse corporel (IMC) est peut-être la conséquence d'une pathologie, mais elle-même peut exposer à un certain nombre de risques pour votre santé (carences, anémie, ostéoporose...). Parlez-en avec votre médecin traitant. Il pourra rechercher la cause de cette maigreur et vous conseiller.");
                }
                if(CalcImc(taille,poids) > 18.5 && CalcImc(taille,poids) < 25){
                    console.log("Votre IMC est de : " + CalcImc(taille,poids) + "\nPoids normal : Votre poids est adapté à votre taille. Gardez vos habitudes alimentaires pour conserver un indice de masse corporel (IMC) idéal et un poids qui vous assure un état de santé optimal. Une alimentation équilibrée, sans excès de matières grasses, associée à une activité physique régulière vous aideront à maintenir votre poids idéal.");
                }
                if(CalcImc(taille,poids) >= 25 && CalcImc(taille,poids) < 30){
                    console.log("Votre IMC est de : " + CalcImc(taille,poids) + "\nSurpoids : Votre poids commence à devenir trop élevé par rapport à votre taille. A long terme, un indice de masse corporel (IMC) élevé a des conséquences sur la santé. L'excès de poids entraîne un risque accru de maladies métaboliques (diabète), cardiaques, respiratoires, articulaires et de cancer. Si vous souhaitez commencer un régime pour perdre du poids, parlez-en au préalable avec votre médecin traitant. Au-dessus de 30, l'indice de masse corporelle peut indiquer une obésité.");
                }
                if(CalcImc(taille,poids) >= 30 && CalcImc(taille,poids) < 40){
                    console.log("Votre IMC est de : " + CalcImc(taille,poids) + "\nObésité modérée : Votre poids est trop élevé par rapport à votre taille. Du point de vue médical, l'obésité est un excès de masse grasse ayant des conséquences sur la santé. L'excès de poids entraîne un risque accru de maladies métaboliques (diabète), cardiaques, respiratoires, articulaires et de cancer. Si vous souhaitez commencer un régime pour perdre du poids, parlez-en au préalable avec votre médecin traitant. A noter que la sévérité de l'obésité dépend de l'indice de masse corporelle (IMC");
                }
                if(CalcImc(taille,poids) > 40){
                    console.log("Votre IMC est de : " + CalcImc(taille,poids) + "\nObésité sévère : Votre poids est trop élevé par rapport à votre taille. Du point de vue médical, l'obésité est un excès de masse grasse ayant des conséquences sur la santé. L'excès de poids entraîne un risque accru de maladies métaboliques (diabète), cardiaques, respiratoires, articulaires et de cancer. Si vous souhaitez commencer un régime pour perdre du poids, parlez-en au préalable avec votre médecin traitant. A noter que la sévérité de l'obésité dépend de l'indice de masse corporelle (IMC");                
                }                  
    break;
    case 0 : console.log("Au revoir");
    break;
    default : console.log("Saisir 1 pour calculer votre IMC ou 0 pour quitter");
}
}while(menu !== 0);


//FONCTION
function CalcImc(taille,poids){
var imc = 1;
imc = (poids*10000) / (taille * taille);
return Math.round(imc*100)/100;
}

function afficherMenu(){
    var menu = "**************************************\n"
    menu += "******Indice De Masse Corporelle******\n"
    menu += "***********Enfant et adulte***********\n"
    menu += "**************************************\n"
    menu += "---------/1 Caculer votre IMC---------\n"
    menu += "-------------/0 Quitter---------------\n"
    menu += "**************************************"
    console.log(menu);
}
//Vacarme27 & Fl0jfk