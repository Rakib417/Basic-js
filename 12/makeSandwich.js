let bread1 = prompt("which Breade would you like to have :- ");
let veg1 = prompt("what are your favrite Vaggies ");
let sauce1 = prompt("which sauce would you like to have :- ");


function makeSandwich(bread, veg , sauce){
    let sandwich = bread + " Bread " + veg + " " + sauce + " sandwich Is ready";
    return sandwich; 
}

let vegsandwich = makeSandwich(bread1, veg1, sauce1);
console.log(vegsandwich);