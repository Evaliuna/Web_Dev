//scope refers to the current context of execution that determines the visibility and accessibility of your variables and functions
//global , function, block scope
//var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    console.log(" Inner: ", a)
}

console.log(a)
console.log(b)
//console.log(c)

function one(){
    const username = "Eva"
    function two (){
        const website = "bingbing"
        console.log(username)
    }
    //console.log(website)

    two()
}

one()

if(true){
    const username = "Eva"
    if(username === "Eva"){
        const website = "oracle"
        console.log(username + website)
    }
    //console.log(website)
}

//console.log(username)

//+++++++++++intresting++++++++++++++

console.log(addone(5))//this will execute so it shows we can call this function upon the declaration

function addone(num){
    return num+1
}

addone(5)

//addTow(5)//this will give error cause we store it in a variable so i can't be access before declaration
const addTwo = function(num){//this is also function but some times it called expression
    return num
}

addTwo(5)