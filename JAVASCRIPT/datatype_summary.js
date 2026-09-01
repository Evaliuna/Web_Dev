//premetive data types
//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100//number
const scoreValue = 100.3//number number is number here nothing like integer or float in javascript. all are number type

const isLoggedIn = false//boolean
const user = null//null empty value. it is an object type

let userEmail//undefined. it is a variable which is declared but not assigned any value. it is an undefined type

const id = Symbol('123')//symbol. it is a unique identifier. it is a symbol type
const anotherId = Symbol('123')
console.log(id === anotherId)//false. because symbol is unique identifier

const bigNumber = 1234567890123456789012345678901234567890n//bigint. it is a number type but it is used for very large numbers. it is a bigint type. here n is used to denote that it is a bigint type.


//non-premetive data types -> reference data types
// Object, Array, function

const heros = ['spiderman', 'ironman', 'hulk']//array. 
const myObj = {
    name: 'John',
    age: 30,
    isAdmin: true
}//object. it is a collection of key-value pairs. it is an object type

const myFunction = function() {
    console.log('Hello World')
}//function. it is a block of code that can be executed when called. it is a function type

console.log(typeof score)//to check the type of the variable. it will return 'number'
console.log(typeof myFunction)//this will return 'function'. it is a special type of object.
//array is also a special type of object. it is an object type but it is used to store multiple values in a single variable.
//null is also a special type of object. it is an object type but it is used to represent the absence of any value.
//anotherId will return 'symbol'. it is a unique identifier. it is a symbol type.