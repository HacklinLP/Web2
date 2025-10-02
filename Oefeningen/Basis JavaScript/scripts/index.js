    console.log("Hello World!");

    let leeftijd = 18;
    let prijs = 12.98;
    let tekst = "Hello World!";
    let isRoker = true;

    console.log(tekst);
    console.log(tekst.length);



    let htmlCode = '<p>blabala</p>'; // je mag zowel single (') als double (") gebruiken voor een string in JS

    let bericht = `dit kost ${prijs}Eur`; // (`) dit is een backtick. Wordt gebruikt voor ${}.

    console.log(bericht);

    console.clear();

    // Gebruik voor alle variabelen "let"

    let leeftijd1 = 24;
    var leeftijd2 = 12;
    leeftijd3 = 10;

    // Deze werken alle 3

    // let is de enige die werkt met block scoping. als var ergens in een loop wordt gebruikt dan wordt die als het ware
    // "hoisted". Hij zal dus eigenlijk aan de bovenkant van de methode komen te staan.

    // let hoeft enkel bij de declaratie te staan. Daarna kan je de inhoud veranderen zonder terug de variabele te declareren.

    const password = "blablabla";
    //probeer zo veel mogelijk const te gebruiken (goede gewoonte) indien de waarde toch niet meer moet veranderen

    const printNaam = (naam, leeftijd) => { // dit is een (arrow)functie
        console.log(`de persoon ${naam} is ${leeftijd} jaar`);
    }

    // DEZE NIET DOEN
    // function printNaam(naam, leeftijd) {
    //     console.log(`de persoon ${naam} is ${leeftijd} jaar`);
    // }

    // const printNaam = function(naam, leeftijd) {
    //     console.log(`de persoon ${naam} is ${leeftijd} jaar`);
    // }


