// traccia uno
const parolaUtente = prompt('Inserisci una parola per sapere se è polindroma').toUpperCase()
console.log(parolaUtente)

function isPalindroma (parola){
    let nuovaParola =''.toUpperCase()
    for (let i = 0; i < parola.length; i++ ){
        const lettera = parola.at(-i - 1)
        nuovaParola += lettera
        
    }
    
     console.log(nuovaParola)
     if(nuovaParola === parolaUtente){
        return true
     } 

    
}

if (isPalindroma(parolaUtente)) {
    console.log(`Si, la parola ${parolaUtente} è palindroma`)
} else{
    console.log(`No, la parola ${parolaUtente} non è palindroma`)
}
// traccia due
const utentePariODispari = prompt('Scegli se pari o dispari')
const numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'))
console.log(`Le tue scelte: ${utentePariODispari},${numeroUtente}`)
function numeroCasuale(){
    const numero1a5 = Math.floor(Math.random()* 5) + 1
    return numero1a5
}
const numeroPc =numeroCasuale()
console.log('Mio numero: ',numeroPc)
const somma = numeroUtente + numeroPc
console.log('Somma: ',somma)
let risultato = pariODispari(somma)
console.log(`${somma} = ${risultato}`)
function pariODispari(numero){
    if (somma % 2 === 0){
        
        return 'pari'
    } else{
    
        return 'dispari'
}
 
}
if (utentePariODispari === risultato){
    console.log('Bravo hai vinto!')

} else {
    console.log('ahahaha hai perso!')

}