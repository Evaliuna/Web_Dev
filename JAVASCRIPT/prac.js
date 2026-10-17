

const doc = {
    name: "Eva",
    age: 22,
    phoneNumber: 123344556,
    mark:70
}

console.log(doc.name)

const doc2 = {
    name: "Eva",
    age: 22,
    phoneNumber: 123344556,
    mark:70
}

doc2.letter = "A+"

console.log(doc2.letter)

const dictionary = {
    Apricity: "The warmth of the sun in winter",
    Petrichor: "The smell of earth after rain",
    Defenestrate: "To throw someone out of a window",
    Psithurism: "The sound of the wind through trees",
    Pulchritude: "Physical beauty"
}

console.log(dictionary)

const id = 123

//id = 345//not allowed to change a constant key declaration

function myFunction() {
    let id2 = 123
}

id2 = 345//not allowed to change a variable declared in a function

let n = 4;

n **= 2; // n = n ^ 2

const age = 15;

if( age>=10 && age<=20 ){
    console.log("Age is between 10 and 20")
}

switch(age){
    case 10:
        console.log("Age is 10")
        break;
    case 15:
        console.log("Age is 15")
        break;
    case 20:
        console.log("Age is 20")
        break;
    default:
        console.log("Age is not between 10 and 20")
}

let num = 10

if(num%2 == 0 && num%3 == 0){
    console.log("Number is divisible by 2 and 3")
}
else{
    console.log("Number is not divisible by 2 and 3")
}

(age > 10)? console.log("you can drive") : console.log("you cannot drive")