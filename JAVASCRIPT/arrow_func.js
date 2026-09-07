//when we reffer current contex we use this key word

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        //here we are using usename inside the vary object where we declar it so it is current contex
        console.log(this)
    }
}

user.welcomeMessage()
user.username = 'Jahan'
user.welcomeMessage()//here it print jahan cause right now the current contex is jahan for username

console.log(this)//it gives empty cause still no global variable / contex to print

function fool(){
    let usename = "nona"
    console.log(this)//here it shows many prebuild values but not usename cause this key word works in object perfectly not in function
    //console.log(this.username)//doesn't work
}

fool()

//arrow function
const tea = () => {
    let usename = "nona"
    console.log(this)
}

tea()