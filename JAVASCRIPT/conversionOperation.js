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
console.log(booleanIsloggedIn);

//"" => false
//"Eva" => true
//0 => false, 1 => true

let someNumber = 100
let stringNumber = String(someNumber)//convert number to string. always the type name first letter is capital letter
console.log(typeof stringNumber);