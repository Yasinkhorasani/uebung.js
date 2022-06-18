let angabe = prompt('hier ein zahl eintippen!!');
            setTimeout(() => 
                prompt('du bist richtig'),2000);
/////////////////////////////////////////
                let zahl = prompt( 'hier ein zahl eingeben');

                setInterval(() => {
                    console.log('Dankeschön')
                }, 2000);
                

//////////////////////////////////////////
                let delay = prompt('hier eingeben');
                
                setInterval(() => {
                    let element = document.createElement('div');
                     element.innerHTML= delay;
                    document.body.append(element)
                }, 2000);
let ratenSpiel = ~~(Math.random()*100);
console.log(ratenSpiel);
let einschätzen = prompt('hier eine Zahl raten!!');

    if (einschätzen==ratenSpiel)
    console.log('du hast gewonnen' + prompt('Nochmaaaaaaaaaaaaaalll') );
    else if (einschätzen>ratenSpiel)
    console.log(prompt(`${einschätzen} ist größer als ${ratenSpiel}`));
    else if (einschätzen<ratenSpiel) console.log(prompt(`${einschätzen} ist kleiner als ${ratenSpiel}`) );
//////////////////////////////////////////////            
                
  let eingabe = prompt('Eingabe', 1234);
let quersumme = 0;
for (let i = 0; i < eingabe.length; i++){
 quersumme += Number(eingabe[i]);
}
console.log(quersumme);

let geldsume = 1000;
let laufzeit = (7*12)/365;
let zinsen = 5 ;
for( let i = 0; i<laufzeit; i++){
    geldsume+= geldsume / 100 * zinsen;
}
geldsume = ~~(geldsume)/100;
console.log(geldsume);
/////////////////////////////////////////////////
let s = 'Hallo Welt';
let ausgabe = '';
for ( let i = 1; i < s.length; i+=2){
    ausgabe += s[i];
}
console.log(ausgabe);