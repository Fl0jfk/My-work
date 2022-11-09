// Main
var readline = require("readline-sync");
var chiffreSaisi = readline.questionFloat("");
calcul(chiffreSaisi);
// FONCTION
function calcul(chiffreSaisi,chiffreSaisiA){
    var resultat = 0.00;
    do{ 
        var readline = require("readline-sync");    
        if(operation !== "Fonctions scientifiques"){ 
            console.log("< + >  < - >  < * >  < / >  < = >  < c >  < Fonctions scientifiques >  < Quitter le programme >");
        }
        var operation = readline.question("");
        if( operation === "+" || operation === "-" || operation === "*" || operation === "=" || operation === "/" || operation === "c" || operation === "exit"){

        }else if(operation === "Fonctions scientifiques"){
            console.log("< cos >  < *PI >  < modulo >  < racine carree >  < ^ >  < % >  < Retour >");
                    if(operation === "Retour"){
                        console.log("< + >  < - >  < * >  < / >  < = >  < c >  < Fonctions scientifiques >  < Quitter le programme >");   
                    }
        } 
        if(operation === "Quitter le programme" || operation === "=" || operation === "racine carree" || operation === "%" || operation === "cos" || operation === "PI"){     
                      
        }else if( operation === "+" || operation === "-" || operation === "*" || operation === "/" || operation === "modulo" || operation === "^"){
            var chiffreSaisiA = readline.questionFloat();
        }else if(operation ==="c"){
            resultat = 0;
            console.log(resultat);
            var chiffreSaisiA = readline.questionFloat();
            resultat = chiffreSaisiA;
        }
        switch(operation){
            case "+" : if(resultat !== 0){                
                                resultat += chiffreSaisiA;
                                console.log(resultat);
                        }else{
                                resultat = chiffreSaisi + chiffreSaisiA
                                console.log(resultat);
            }
            break;
            case "-" : if(resultat !== 0){                
                                resultat -= chiffreSaisiA;
                                console.log(resultat);
                        }else{
                                resultat = chiffreSaisi - chiffreSaisiA
                                console.log(resultat);
            }
            break;  
            case "/" : if(resultat !== 0){                
                                resultat /=chiffreSaisiA;
                                console.log(resultat);
                        }else{
                                resultat = chiffreSaisi / chiffreSaisiA
                                console.log(resultat);
            }
            break;
            case "modulo": if(resultat !== 0){                
                                resultat %= chiffreSaisiA;
                                console.log(resultat);
                        }else{
                                resultat = chiffreSaisi % chiffreSaisiA
                                console.log(resultat);
            }
            break;
            case "*" : if(resultat !== 0){                
                                resultat *= chiffreSaisiA;
                                console.log(resultat);
                        }else{  
                                resultat = chiffreSaisi * chiffreSaisiA
                                console.log(resultat);
            }
            break;
            case "racine carree" : if(resultat !== 0){                
                                resultat = Math.sqrt(resultat);
                                console.log(resultat);
                        }else{
                                resultat = Math.sqrt(chiffreSaisi);
                                console.log(resultat);
            }
            break;
            case "^" : if(resultat !== 0){                            
                                resultat = Math.pow(resultat, resultat);
                                console.log(resultat);
                        }else{
                                resultat = Math.pow(chiffreSaisi, chiffreSaisiA);
                                console.log(resultat);
            }
            break;
            case "%" : if(resultat !== 0){                
                                resultat = resultat*chiffreSaisiA/100;
                                console.log(resultat);
                        }else{  
                                resultat = chiffreSaisi * chiffreSaisiA/100
                                console.log(resultat);
            }
            break;
            case "cos" : if(resultat !== 0){                
                                resultat = Math.cos(resultat);
                                console.log(resultat);
                        }else{  
                                resultat = Math.cos(chiffreSaisi);
                                console.log(resultat);
            }
            break;
            case "*PI" : if(resultat !== 0){                
                                resultat = Math.PI*resultat;
                                console.log(resultat);
                        }else{  
                                resultat = Math.PI*chiffreSaisi;
                                console.log(resultat);
            }
            break;
            case "=" : console.log(resultat);
            break;  
            case "c" :
            break;
            case "Fonctions scientifiques" :
            break;     
            case "Quitter le programme" :
            break;
            case "Retour" :
            break;
            default : console.log("Ce n'est pas une opération attendue");                  
            }
            if (resultat === Infinity){
                    resultat = 0;
                    console.log(resultat);
                    var chiffreSaisiA = readline.questionFloat();
                    resultat = chiffreSaisiA;
            }else if (resultat === 35383773 || chiffreSaisiA === 35383773 || chiffreSaisi === 35383773){
                    console.log("ELLEBESE");                    
            }else if(resultat === 3550708){
                    console.log("BOLOSS");                    
            }else if(resultat === 0.808){
                    console.log("BOBO");
            }else if(resultat === 58008 || chiffreSaisiA === 58008 || chiffreSaisi === 58008){
                    console.log("BOOBS");
            }else if(resultat === 0.7734 || chiffreSaisiA === 0.7734 || chiffreSaisi === 0.7734){
                    console.log("HELLO");
            }else if(resultat === 713705 || chiffreSaisiA === 713705 || chiffreSaisi === 713705){
                   console.log("SOLEIL");
            }
        if(operation !== "Fonctions scientifiques" || operation !== "Retour"){
            chiffreSaisi = 0;
        }                
    }while(operation !== "exit");
}  //Vacarme27, Fl0jfk
