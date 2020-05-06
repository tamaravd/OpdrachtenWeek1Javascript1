const maxAge = 80;
const calculateSupply = (age, amountDay) => {
 return "You will need " + Math.round((maxAge-age) * (amountDay*365)).toFixed(2) + " to last you until the ripe old age of "+ maxAge
}

console.log(calculateSupply(20.5, 3));
