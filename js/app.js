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
