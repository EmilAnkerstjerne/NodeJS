"use strict";

//const message = 'hellow World';

//NEVER do this
// insaneVariable = "This is not good";

for(let i = 0; i<=5; i++){
    setTimeout(function runAfterTheloop(){
        console.log(i);
    },1000);
}

