// for(let i=0; i<10; i++){

// console.log("hello world");
// }


// for(let i=5; i<51; i = i+5){
//     console.log(i);
// }

// for(let i=10; i<101; i = i+10){
//     console.log(i);
// }

// for(let i=3; i<90; i = i+3){
//     console.log(i);
// }


// for(let i=0; i<10; i++)  {
//     console.log("helo man")
// }




// FOR LOOPS=======================
// for(let i=0;i<10;i++){
// console.log("helpo world")
// }

// for(let i=5;i<51;i = i+5){
//     console.log(i)
//     }


// for(let i=50; i>4; i=i-5){
//     console.log(i)
// }

// for(let i=0;i<10;i++){
//     if(i%2 == 0)
//     console.log(i)
//     }

// for(let i=0;i<10;i++){
//     console.log("helpo world")
//     }



// while loops====================
// let i=10;
//     while(i>=0){
//         console.log("helpo world")
//         i--
//     }

// Do while Loops =========================
    // let j=0;
    // do{
    //     console.log("helpo world")
    //     j++
    // }
    // while(j<-100)
        

    // for ...in
    // Object
    let animal = {
        name :"Zebra",
        leg:4
    };
    for(let key in animal){
        console.log(key,animal[key]);
    }


    // Arrays
    let names= ["Rahul", "hena", "Aman", "rakib", "Ullah"];
    for(let index in names){
        console.log(index, names[index]) 
    }


    // for...of loops
    for(let name of names){
        console.log(name)
    }