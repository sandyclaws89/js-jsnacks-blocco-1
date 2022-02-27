// let inputText = document.querySelector(`#input`);
// let buttonInput = document.querySelector(`#button`);
// let outputClass = document.querySelector(`.output`)
// console.log(inputText , buttonInput , outputClass);



// outputClass.innerHTML = "ciao sono finalmente in html";
// buttonInput = 5;
// inputText = 4;
// // let result = buttonInput + inputText;

// outputClass.innerHTML =` ${buttonInput} + ${inputText} = ${ buttonInput + inputText}`;

// // outputClass.innerHTML =result;

// let outputResult = document.querySelector(`.output`);


// SNACK1

// let firstNumber = prompt(`insert the first number`);
// let secondNumber = prompt(`insert the second number`);
// if (firstNumber > secondNumber) {
//     outputResult.innerHTML = `<h1>${firstNumber} HIGHEST NUMBER </h1>   
//     ${secondNumber} LOWEST NUMBER`
// } else if (firstNumber == secondNumber){
//     outputResult.innerHTML = `EQUAL NUMBERS`
// } else {
//     outputResult.innerHTML = `<h1>${secondNumber} HIGHEST NUMBER </h1>  ${firstNumber} LOWEST NUMBERS`
// }



// SNACK2
// let firstWord = prompt (`Insert first word`);
// let secondWord = prompt(`Insert second word`);
// if (firstWord.length > secondWord.length){
//     console.log(firstWord , secondWord);
// }else if (firstWord.length == secondWord.length ){
//     console.log(`The word's letters are the same`);
// } else {
//     console.log(secondWord, firstWord);
// }



// SNACK3
// NON RIESCO A SOMMARE TUTTI I VALORI PRESENTI CON ARRAY IN UN ARRAY
// for (let i=1; i<10 + 1; i++) {
//     let arr = [];
//     let number = prompt(`Insert the ${i}° number`);
//     arr.push(number);
//     let showNumber = arr.length[3];
//     console.log(`showNumber`);
//     var sumNumber = sumNumber + number;
//     console.log(arr);
//     console.log (sumNumber); 
// }

// MI DA COME RISULTATO NAN E NON CAPISCO PERCHE'
// for (let i=1; i<3 + 1; i++) {
//     let number = parseInt(prompt(`Insert the ${i}° number`));
//     // let sumNumber = number;
//     let result
//     result = number + result;
//     console.log(result);
// } 



// SNACK4
/*
IN UN ARRAY SONO CONTENUTI I NOMI DEGLI INVITATI ALLA FESTA DEL GRANDE GATSBY, CHIEDI ALL'UTENTE IL SUO NOME E COMUNICAGLI SE PUO' PARTECIPARE O NO ALLA FESTA.

-PSEUDOCODIFICA
    CREO ARRAY CON NOMI CASUALI
        -CONTROLLO CON INCLUDES SE L'INPUT INSERITO DALL'UTENTE E' PRESENTE
        -STAMPO CHE NON PUO' PARTECIPARE ALLA FESTA SE IL SUO NOME NON C'E' ALTRIMENTI SI.*/

// let invitingList = ["Simone", "Vanessa", "Marco", "Mara", "Paolo", "Park Jin Yong"];
// /*PERCHE' SE DICHIARO LET FUORI DALLA IF ME LO RICONOSCE LO STESSO?*/
// let guest =  prompt(`Insert your name`); /*HO PROVATO A METTERE LOWERCASE MA NON ME LO RICONOSCE, HO PROVATO ANCHE NELLA IF*/
// if (invitingList.includes(guest)) {
//     console.log (`Welcome to the party!`);
// } else {
//     console.log (`Sorry you're not on the guest's list`);
// }



// SNACK5
/*CREA UN ARRAY VUOTO, CHIEDI PER 6 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO, SE E' DISPARI INSERISCILO NELL'ARRAY*/

/*PSEUDOCODIFCA
-IN UNA FOR METTO IL PROMPT CON RICHIESTA DI INPUT
    -CHIEDO L'INPUT E LO ASSEGNO AD UNA VARIABILE
    -CREO UN ARRAY VUOTO
    -FACCIO UNA IF E NELLA CONDIZIONE CONTROLLO CON IL MODULO SE E' PARI O DISPARI
        - SE DISPARI LO INSERISCO NELL'ARRAY CON IL PUSH*/
        // -STAMPO DENTRO LA IF (NON HO CAPITO PERCHE')

// for (let i=0; i<6; i++){
//     let number = prompt(`Insert number`);
//     let arr = [];
//     if (number % 2 == 1) {
//         arr.push(number);
//         console.log (`Odd number ${number}`);
//         // LA VARIABILE MI SAREBBE STATA UTILE FUORI PER STAMPARLA, DOVEVO USARE VAR? 
//     } 
// }

// SNACK6
/*CHIEDI UN NUMERO DI 4 CIFRE ALL'UTENTE E CALCOLA LA SOMMA DI TUTTE LE CIFRE CHE COMPONGONO IL NUMERO*/

/*PSEUDOCODIFICA
-CHIEDO DIRETTAMENTE NEL PROMPT DI INSERIRE UN NUMERO DI 4 CIFRE
-EFFETTUO IL CONTROLLO CON LA IF E IL LENGTH (SE NUM.LENGTH <4 DAI MESSAGGIO DI ERRORE)*/

let number = prompt ("Enter a 4-digit number");
 if (number.length == 4){
    // var result
    for(let i=0; i<=3; i++ ) {
        let result
        result = number[i] + result;
        console.log(result);
            //  let result1 = result + number[i];
    }
} else { console.log ("Error, the number must be only 4-digit number");
}