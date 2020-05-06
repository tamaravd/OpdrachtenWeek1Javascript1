const tellFortune = (amountChildren, namePartner, location, jobTitle) => {
    return "You will be a " + jobTitle + " in " + location + ", and married to " + namePartner + " with " + amountChildren + " kids."
}

console.log(tellFortune(4, "Bas", "Amsterdam", "web developer"));
console.log(tellFortune(1, "Mary", "Haarlem", "bewaker"));
console.log(tellFortune(2, "Bram", "Utrecht", "police"));



