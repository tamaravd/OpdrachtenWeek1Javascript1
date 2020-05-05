const age = 45;
if (age>=18) {
    console.log("je mag naar binnen.")
} else {
    console.log("je bent helaas te jong, je wordt vriendelijk verzocht buiten te blijven.")
};

/*- Je gaat verder in dezelfde file
- Schrijf een nieuwe `const` genaamd `isFemale` die als waarde een `boolean` krijgt.
- Schrijf een if statement die controleert of de input waar is of niet waar is.
- Console.log weer iets naar de console wanneer de waarde waar is én wanneer de waarde niet waar is.*/

const isFemale = true;
if(isFemale==true) {
    console.log("de persoon is een vrouw.")
} else {
    console.log("de persoon is geen vrouw.")
};

/*- Schrijf een nieuwe `const`  genaamd `driverStatus` met de waarde 'bob'.
- Schrijft een if statement die controleert of de input van de driverStatus gelijk is aan 'bob'.
- Console.log een bericht als de bestuurder de status van bob heeft en mag rijden 🚘..
- Console.log een bericht als de bestuurder geen bob is en dus niet mag rijden.*/

const driverStatus = "Bob";
if(driverStatus=="Bob"){
    console.log("de bestuurder heeft de BOB status en mag naar huis rijden.")
} else {
    console.log("de bestuurder heeft geen BOB status en mag NIET naar huis rijden!")
}



const age2 = 30;
if(age2>=18 && age2<=25){
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Helaas moet je de volle prijs betalen.")
}

const name = "Abraham";
if(name=="Sarah" || name == "Abraham"){
    console.log("Je krijgt een gratis biertje op deze feestelijke dag.")
} else {
    console.log("Helaas krijg je geen gratis biertje.")
}

const totalAmount = 30;
if(totalAmount >=25 && totalAmount <50){
    console.log("Je krijgt gratis bitterballen.")
} else if (totalAmount >=50 && totalAmount <100){
    console.log("Je krijgt gratis nachos.")
} else if (totalAmount >=100) {
    console.log("Je krijgt gratis een fles champagne.")
} else {
    console.log("Je hebt te weinig geld besteedt.")
}