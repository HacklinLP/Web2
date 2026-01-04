# JavaScript code snippets
```javascript
document.getElementById(“abc”);

Doorzoekt de dom tree naar het exacte element met die specifieke ID en retourneert een verwijzing naar dit element. Indien geen element gevonden, null.

document.getElementByClassName(“xyz”);

Doorzoekt de DOM-tree naar elementen met class=“xyz” en retourneert een lijst met verwijzingen naar deze elementen. De volgorde in deze lijst is hetzelfde als hun onderlinge volgorde in het document. De lijst is een NodeList, vergelijkbaar met een array.

document.getElementsByTagName(“img");

Doorzoekt de DOM-tree naar <img> elementen en retourneert een lijst met verwijzingen
naar deze elementen. Je krijgt hetzelfde soort lijst als bij getElementsByClassName, maar de
elementen werden gezocht op basis van hun tag i.p.v. hun CSS-classes.

—

elementNode.addEventListener("anEvent", ourFunction);


//elementNode
dit is een verwijzing naar een element node uit de DOM-tree, die we bv. met
document.getElementById hebben bemachtigd.

//"anEvent"
dit is een String waarde met de naam van het event waarin we geïnteresseerd zijn, bv. “click"

//ourFunction
dit is de naam van de function die moet opgeroepen worden wanneer anEvent zich voordoet op
elementNode. Deze callback functie noemen we een event listener of ook wel event handler.


Bv. 
elementNode.addEventListener("click", printHello);

Om een CSS-property van een element in te stellen in een javascript programma moeten we de .style object property aanspreken van elementNode (vergelijkbaar met C#)

Bv. elementNode.style.color = “red”;

Dit kan je ook doen met backgroundColor of marginLeft.

elementNode.style.backgroundColor = “red”;
elementNode.style.marginLeft = “10px”;




DOM-element property .className 

De CSS-classes van een html element kan je opvragen via diens .className property. De waarde van deze property is een string.

De CSS-classes van een HTML element kun je opvragen via diens .className property. De waarde van
deze property is een string.
Bijvoorbeeld

<p id="txtOutput" class="abc ">blablabla</p>
...
let txtOutput = document.getElementById(“txtOutput”);

console.log( txtOutput.className ); // toont abc

txtOutput.className = "invalid"; //1 class instellen

txtOutput.className = “”; //alle classes verwijderen


De .className property bevat eigenlijk dezelfde tekst als je ook in de HTML code zou schrijven, en kan dus meerdere classes bevatten gescheiden door spaties.

DOM-element property .classList 

Met de .className is het dus heel veel knip- en plakwerk als je 1 bepaalde uit de lijst wil verwijderen. Gelukkig bestaat er .classList die ons deze last bespaart.

txtOutput.classList.add(“invalid”);

txtOutput.classList.remove(“invalid”);

If (txtOutput.classList.contains(“invalid”)) { … }

https://developer.mozilla.org/en/docs/Web/API/Element/classList
```