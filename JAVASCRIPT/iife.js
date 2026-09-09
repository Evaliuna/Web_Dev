//immediately invoke function

(function fool(){
    //THIS is a named iife as it has a name
    console.log(`DB CONNECTED`)
})();
//we should end it using ; otherwise next iife will not work

//()() first one for defination . 2nd one for execution call

//sometimes global scope variable give polution . to remove this we used iifew

(() => {
    console.log(`DB NOT CONNECTED`)
})();
//this are unnamed iife as it has no name
//to execute the next iife previous iife need to end using ;
((name) =>{
    console.log(`DB CONNECTED ${name}`)
})('Eva')