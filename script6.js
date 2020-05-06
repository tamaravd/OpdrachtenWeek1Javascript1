//Deel A//

/*BroodjeKaas:
broodje 
boter
kaas*/

const broodjeKaas = () => {
 console.log("broodje"); 
 console.log("boter"); 
 console.log("kaas"); 
}

broodjeKaas();


//Deel B//
//code declareren://
const makeSandwich = (topping) => {
 console.log("There you go, a sandwich with " + topping );
}
//call code:
makeSandwich("ham");
makeSandwich("chicken");

//Deel C
const calculateDiscountedPrice = (totalAmount, discount) => {
  return Math.round(totalAmount-discount);
}
//deze doet het kennelijk niet:
console.log(calculateDiscountedPrice(200, 50));

//Deel D
const calculateDiscountedPrice25euro = (totalAmount, discount) => {
    if (totalAmount>25) {
        return Math.round(totalAmount-discount);
    } else {
        return totalAmount;
    }
}

console.log(calculateDiscountedPrice25euro(24, 1));



