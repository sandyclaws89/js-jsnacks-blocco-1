
let outputResult = document.querySelector(`.output`);

// SNACK1
// L'UTENTE INSERISCE DUE NUMERI IN SUCCESSIONE, CON DUE PROMPT. IL SOFTWARE STAMPA IL MAGGIORE.

// PSEUDOCODIFICA
/*
-DOCUMENT.QUERYSELECTOR (HTML CLASS OR ID);
-PROMPT(NUM1), PROMPT(NUM2)
-IF NUM1 > NUM2 
    -OUTPUTRESULT.INNERHTML = NUM1, NUM2;
-ELSE IF (NUM1== NUM2)
    -OUTPUTRESULT.INNERHTML = (EQUAL NUMBERS);
-ELSE
    -OUTPUTRESULT.INNERHTML = NUM1, NUM2;*/

// let jsButton = document.getElementById("#htmlbutton");
// let jsInput = document.getElementById("#htmlinput");
// function myFunction(){
//     console.log("Mi hai cliccato!")
// }
// jsButton.addEventListener(click, myFunction); 
// HO PROVATO AD ACQUISIRE L'INPUT CON IL BOTTONE I INPUT IN HTML MA NON CI RIESCO

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
/*
L'UTENTE INSERISCE DUE PAROLE IN SUCCESSIONE CON DUE PROMPT, IL SOFTWARE STAMPA PRIMA LA PAROLA CORTA, POI QUELLA LUNGA.
*/

/*
PSEUDOCODIFICA
-PROMPT FIRSTWORD, SECONDWORD
-IF FIRSTWORD.LENGTH>SECONDWORD.LENGTH
    -OUTPUTRESULT.INNERHTML = FIRSTWORD, SECONDWORD;
-ELSE IF FIRSTWORD.LENGTH == SECONDWORD.LENGTH
    -OUTPUTRESULT.INNERHTML = THE WORD'S LETTERS ARE THE SAME
.ELSE
    -OUTPUTRESULT.INNERHTML = SECONDWORD, FIRSTWORD;
*/

/*
let firstWord = prompt (`Insert first word`);
let secondWord = prompt(`Insert second word`);
if (firstWord.length > secondWord.length){
    outputResult.innerHTML = ` <h1>The longest word is ${firstWord}</h1> </br>
    <h2> The smallest word is ${secondWord}`;
}else if (firstWord.length == secondWord.length ){
    outputResult.innerHTML = ` <h1>The word's letters are the same</h1>`;
} else {
    outputResult.innerHTML = ` <h1>The longest word is ${secondWord}</h1> </br>
    <h2> The smallest word is ${firstWord}`;
}
*/



// SNACK3
/*IL SOFTWARE DEVE CHIEDERE PER 10 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO. IL PROGRAMMA STAMPA LA SOMMA DI TUTTI I NUMERI INSERITI.*/

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
-CREO ARRAY CON NOMI CASUALI
-PROMPT GUEST(INSERT YOUR NAME)
-IF INVITINGLIST.INCLUDES GUEST
    OUTPUTRESULT.INNERHTML = WELCOME
ELSE
    OUTPURESULT.INNNERHTML = SORRY
*/

// let invitingList = ["Simone", "Vanessa", "Marco", "Mara", "Paolo", "Park Jin Yong"];
// /*PERCHE' SE DICHIARO LET FUORI DALLA IF ME LO RICONOSCE LO STESSO?*/
// let guest =  prompt(`Insert your name`); /*HO PROVATO A METTERE LOWERCASE MA NON ME LO RICONOSCE, HO PROVATO ANCHE NELLA IF*/
// if (invitingList.includes(guest)) {
//     outputResult.innerHTML = "<h1>Welcome to the party!</h1>"; 
// } else {
//     outputResult.innerHTML = "<h1>Sorry you're not on the guest's list</h1>";
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
//         // outputResult.innerHTML = `Odd number ${number}`;
//             // QUI CON INNER HTML NON MI FUNZIONA, MI STAMPA SOLO L'ULTIMO NUMERO DISPARO, CON CONSOLE LOG FUNZIONA
//         console.log (`Odd number ${number}`);
//         // LA VARIABILE MI SAREBBE STATA UTILE FUORI PER STAMPARLA, DOVEVO USARE VAR? 
//     }
//     // outputResult.innerHTML = `Odd number ${number}`;
 
// }

// SNACK6
/*CHIEDI UN NUMERO DI 4 CIFRE ALL'UTENTE E CALCOLA LA SOMMA DI TUTTE LE CIFRE CHE COMPONGONO IL NUMERO*/

/*PSEUDOCODIFICA
-CHIEDO DIRETTAMENTE NEL PROMPT DI INSERIRE UN NUMERO DI 4 CIFRE
-EFFETTUO IL CONTROLLO CON LA IF E IL LENGTH (SE NUM.LENGTH <4 DAI MESSAGGIO DI ERRORE)*/
// FIXME: CHIEDERE COME SI FANNO LE ADDIZIONI ARITMETICHE
// let number = prompt ("Enter a 4-digit number");
//  if (number.length == 4){
//     // var result
    
//     for(let i=0; i<=3; i++ ) {
//         let result
//         result = number[i] + number[i+1];

//         console.log(result);
//             //  let result1 = result + number[i];
//     }
  
// } else { console.log ("Error, the number must be only 4-digit number");
// }


// var test1 = prompt("inserire il primo numero");
// var test2 = prompt("inserire il secondo numero");
// var testTot = (`${test1.value} + ${test2.value}`);
// console.log(testTot);

// STO PROVANDO PERCHE' NON FUNZIONA L'ADDIZIONE CON LE VARIABILI. HO LETTO SU INTERNET E SPECIFICANO CHE BASTA IL SIMBOLO + MA NON FUNZIONA.





/*
SNACK 1.9
CALCOLA LA SOMMA E LA MEDIA DEI PRIMI 10 NUMERI 

PSEUDOCODIFICA CON FOR:
-DICHIARA VARIABILE SUM =0
-FAI UN CICLO FOR PER RIPETERE I NUMERI FINO A 10
    -SUM = SUM + I DI QUELL'ITERAZIONE
-LET MEDIA = SUM /10
-CONSOLE.LOG SUM , AVEREGE
*/
/*let sum=0;
for(let i=1; i<=10; i++){
    sum+= i;
}
let averege = sum / 10;
console.log(`Sum = ${sum}
Averege = ${averege}`)*/

/*
PSEUDOCODIFICA CON WHILE:
-VARIABILE SUM = 0;
-FAI WHILE MENTRE I<=10
    -SUM -SUM = SUM + I DI QUELL'ITERAZIONE
    -I++
-LET MEDIA = SUM /10
-CONSOLE.LOG SUM , AVEREGE
*/
/*
let sum =0;
let i =0;
while (i<=10) {
    sum += i;
    i++;
}
let averege = sum / 10;
console.log(`Sum = ${sum}
Averege = ${averege}`);
*/


/*Snack 2.1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.*/

// PSEUDOCODIFICA CON FOR:
// UN CICLO FOR CHE RIPETE 5 VOLTE
//     -PROMPT PER INPUT CON PARSEINT E METTERE DENTRO ARRAY
//     -SUM += ARRAY[I DELL'ITERAZIONE IN CORSO]
// CONSOLE LOG SUM
/*let sum =0;
let arr = [];
for (let i=1; i <=6; i++){
    let num = parseInt(prompt(`insert the ${i}° number: `));
    arr.push(num);
    sum += arr[i-1];    
}
console.log(sum);*/

PSEUDOCODIFICA CON WHILE