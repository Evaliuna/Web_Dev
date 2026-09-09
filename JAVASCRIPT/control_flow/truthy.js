const email = '123@gmail.com'//this will give true
//const email = ""//this will give false
const userEmail = []// this will give true

if(email){
    console.log('got User email')
}else{
    console.log("don't got user email")
}

//falsy values
//false, 0, -0, BigInt 0n, null, undefined, "", NaN

//truthy values
//"0", 'false', " ",[], {}, function(){}

if(userEmail.length === 0) {
    console.log('Array is empty')
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log('Object is empty')
}

//false == 0 - true
//false == '' - true
//0 == '' - true

//nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 //10
//val1 = undefined ?? 15
 val1 = null ?? 10 ?? 20 //10 the value came first is the value it prints

 console.log(val1)

//Terniary Operator

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log('less then 80') : console.log('more then 80')
