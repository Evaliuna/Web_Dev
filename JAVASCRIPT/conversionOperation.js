let score = undefined

//console.log(typeof score);//to check the type of a variable
//console.log(typeof(score));//to check the type of a variable

let score2 = "100a"

let valueInNumber = Number(score2)//convert string to number
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//100 => number
//"100abc" => NaN (Not a Number)
// true => 1 , false => 0

let isloggedIn = "Eva"//string

let booleanIsloggedIn = Boolean(isloggedIn)//convert number to boolean
//console.log(booleanIsloggedIn);

//"" => false
//"Eva" => true
//0 => false, 1 => true

let someNumber = 100
let stringNumber = String(someNumber)//convert number to string. always the type name first letter is capital letter
//console.log(typeof stringNumber);

// ******************Operations******************

let value = 3
let negValue = -value
console.log(negValue);

console.log(3 + 2);//addition
console.log(3 - 2);//subtraction
console.log(3 * 2);//multiplication
console.log(3 / 2);//division
console.log(3 % 2);//modulus

let str1 = "Eva"
let str2 = " Khan"
console.log(str1 + str2);

console.log("3" + 2);//string concatenation
console.log(3 + "2");//string concatenation
console.log("1" + 2 + 2);//if the first value is string then all the values will be converted to string and concatenated
console.log(1 + 2 + "2");//if the first value is number then all the values will be added and then converted to string and concatenated

console.log(+true);//1 here + is a unary operator which converts the boolean value to number
console.log(+false);//0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2//assignment operator is right associative. so the expression will be evaluated from right to left

let gameCounter = 100
gameCounter++//increment operator. it will increase the value of gameCounter by 1
console.log(gameCounter);

