function sayMyName(){
    console.log("EVA")
}

sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}

addTwoNumbers(3, 4)

function addTwoNum(num1, num2){
    let result = num1 + num2
    return result
    //return num1 + num2
}

let result = addTwoNum(3, 5)
console.log("Result: ", result)

function loginUser(username){
    if(!username){ //username === undifined
        console.log("Please enter username")
        return
    }
    return `${username} logged in`
}

console.log(loginUser('EVA'))
console.log(loginUser())//undefined

//... this is called rest operator and spread operator acording to it's use

function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(203,204,205,2000))

function calculateCartPrice2(val1, val2, ...num){
    return num
}

console.log(calculateCartPrice2(203,204,205,2000))//val1 and val2 take 1st 2 values


const user = {
    username: "eva",
    price: 800
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
//or
// handleObject({
//      username: "eva",
//     price: 800
// })

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))