function Acquista() {
    let età;
    let prezzo;

    do{
        età=prompt("Inserisci la tua età:");
        console.log(età);
    }while(età == "" || età<0 || età >110);

    if(età >= 18 && età <=25){
        prezzo=3.5;
    }else if(età < 5){
        prezzo = 0;
    }else if(età >= 50 && età <=55){
        prezzo = 5;
    }else{
        prezzo = 8;
    }

    if(prezzo != 0){
        alert(età + " anni - paghi " + prezzo + "€.");
        console.log(età + " anni - paghi " + prezzo + "€.");
    }else{
        alert(età + " anni - gratis.");
        console.log(età + " anni - gratis.");
    }
}
