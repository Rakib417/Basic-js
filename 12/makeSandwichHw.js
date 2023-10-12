let bread1 = prompt(" Type your Bread name ");
let veg1 = prompt ( " Which types of Vegetable ");
let sauce1 = prompt( "which type of Sauce you like?" );

function makeSandwich(bread, veg, sauce){
    let sandwich = bread + " Bread " + veg + " Vegitable " + sauce + " sauce " + "sandwich Is ready";
    return sandwich;
}

let vegsandwich = makeSandwich(bread1,veg1,sauce1);
console.log(vegsandwich);
