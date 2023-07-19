// alert('Le fichier fonctionne');




// console.log("Hello");

// let maVarriableSuperCool = "kamelCase";

// console.log(maVarriableSuperCool);







// let unChiffre = 24;

// unChiffre = 15;

// console.log(unChiffre);



// let chaine = "je suis une chaine de caractère*"


// let chaine = "15*"

// let nouvelleChaine = "Chaine Précédente : " + chaine;

// console.log(nouvelleChaine);





// let Chiffre = "25*"

// let nouvelleChaine = 'le chiffre attendu est : " &{chiffre} degrés' ;

// console.log(nouvelleChaine);


// let string = "je suis une chaine";
// let number = 24;
// let booleen =["je", "suis", 24, false];
// let array = ["je", "suis", 24, false];

// let object = {
//     prenon: "Aboubacar",
//     age: 34,
//     ville: "Bordeaux",
// };

// console.log(typeof array);



// let arbre;
// console.log(arbre)




// let total = 2;
// let x = 4;

// x++;

// total = x;

// console.log(total);



// let x = 6;
// let y = "5";

// if (x === y) {
//     console.log("True !");
// } else if (x == y) {
//     console.log("e rt y égaux en valeur");
// } else{
//     console.log(x + "et" + y "ne sont pas du tout égaux");
//     console.log('${x} et ${y} ne sont pas du tout égaux');
// }




// let x = 6;
// let y = "5";

//  x === y ? Console.log("True !") : console.log("false");




// function fareQuelqueChose() {
//     console.log("je fais un truc !");
//     console.log("Trop cool");
// }

// const faireUneTache = (tache) => {
//     console.log("je fais : " + tache);
// };

// function add2() {
//     let a = 4; 
//     return a + 2
// }

// (function () {
//     console.log("je ne joue toute seule");
// })()

// (() => {
//     console.log("je ne joue aussi toute seule");
// })();



// let a = 9;

// function fareQuelqueChose() {
//     console.log("je fais un truc !");
//     console.log("Trop cool");
// }

// const faireUneTache = (tache) => {
//     console.log("je fais : " + tache);
// };

// function add2() {
//     return a + 2
// }


// EXERCICE : Une calcilatrice

let total = 0;

function addition(x) {
    total += x;
    return total;
}

function soustraction(x) {
    total -= x;
    return total;
}

function division(x) {
    if (total === 0){
        return (total = x);
    } else{
        total /= x;
        return total;
    }
}
function multiplication(x) {
    if (total === 0){
        return (total = x);
    } else{
        total *= x;
        return total;
    }
}

function reset( ){
    total = 0;
}






