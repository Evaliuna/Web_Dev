//when we reffer current contex we use this key word

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        // In an object method, this refers to the object that called the method.
        console.log(`${this.username}, welcome to the website`)
        //here we are using usename inside the vary object where we declar it so it is current contex
        console.log(this)
    }
}

user.welcomeMessage()
user.username = 'Jahan'
user.welcomeMessage()//here it print jahan cause right now the current contex is jahan for username
// Changing the property changes the value read through this.username.

console.log(this)//it gives empty cause still no global variable / contex to print

function fool(){
    let usename = "nona"
    // In a regular function, this depends on how the function is called.
    console.log(this)//here it shows many prebuild values but not usename cause this key word works in object perfectly not in function
    //console.log(this.username)//doesn't work
}

fool()

//arrow function
const tea = () => {
    let usename = "nona"
    // Arrow functions inherit this from their surrounding scope.
    console.log(this)
}

tea()//this will not show anything too

const addTwo = (num1, num2) => {
    // Curly braces create a function body, so an explicit return is needed.
    return num1 + num2
}

console.log(addTwo(3,6))

//another way of creating arrow function - implicit return

const addTwo1 = (num1, num2) => num1+num2
// A single expression is returned automatically without the return keyword.
console.log(addTwo1(3,6))

//another way

const addTwo2 = (num1, num2) => (num1 + num2)
//curly braces {} wrap need return key word. ( ) paranthesis wrap dosen't need return key word

//even to use object without return keyword needs parenthesis
const addTwo3 = (num1, num2)({username: "Eva"})
// Parentheses let an arrow function return an object literal directly.

console.log(addTwo3(3,4))

const myArray = [2,3,4,5]
// forEach can run a callback once for every item in an array.

//myArray.forEach(() => ())


