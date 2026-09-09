//if

// if(false){
//     //when it false anything under this scope will not execute. only when it's true it will work
// }

const temp = 41

if( temp === 41){
    console.log("executed")
} else{
    console.log("greater")
}

// <, >, <=, >=, ==, !=, ===(it also check if the type also same), !==

const score = 200

if(score > 100) {
    let power = 'fly'
    console.log(`User power: ${power}`)
}

console.log(`User power: ${power}`)

const balance = 1000;
//this is implecit scope
//although we can write it like this .this is immature code and we should not use this idea never do it.
if(balance > 500) console.log("test"), console.log("test2");


if(balance < 500){
    console.log("la")
}else if(balance == 500){
    console.log('lalala')
}else{
    console.log('lalalala')
}

const UserLoggedIn = true
const DebitCard = true
const CreditCard = false

if(userLoggedIn && DebitCard){
    console.log('Accepted')
}

if(DebitCard || CreditCard){
    console.log('User Logged In')
}