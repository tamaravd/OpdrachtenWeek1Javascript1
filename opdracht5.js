//oude stijl loops met while

let colors = ["yellow", "blue", "red", "orange"];
let i = 0;

while (i < colors.length) {
    console.log(colors[i]);
    i++;

}
//oude stijl loops met for

for (i=0; i< colors.length; i++) {
    console.log(colors[i]);
}

//nieuwe stijl array methods

const colors2 = ["yellow", "blue", "red", "orange"];

colors2.forEach(element => console.log(element));