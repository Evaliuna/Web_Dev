//singleton 
//object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Eva",
    "full name": "Mosammat Samiea Jahan Eva",
    [mySym] : "myKey1",
    age: 22,
    location: "Dhaka",
    email: "m.s.jahan.eva@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "eva@gmail.com"

JsUser.greeting = function(){
    console.log("Hello Me")
}

JsUser.greeting2 = function(){
    console.log(`Hello me, ${this.name}`)
}

Object.freeze(JsUser)
JsUser.email = "neva@google.com"
console.log(JsUser)

JsUser.greeting()
JsUser.greeting2()

const tinderUser1 = new Object()//singleton object
const tinderUser = {}//non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Mony"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Inaya",
            lastname: "Treva"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {1: "a", 2: "b"}
const obj3 = {1: "a", 2: "b"}

//const obj4 = { obj1, obj2 }
//const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1,...obj2}//mostly we will use this it is modern. 
console.log(obj3)

const users = [
    {
     email: "eva@gmail.com",
     id: 241
    },
    {
     email: "eva2@gmail.com",
     id: 241
    },
    {
     email: "eva3@gmail.com",
     id: 241
    },
    {
     email: "eva4@gmail.com",
     id: 241
    },
    {
     email: "eva5@gmail.com",
     id: 241
    }

]

console.log(users[0])
console.log(users[1].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "Java Basic",
    price: "999",
    courseInstructor : "Eva"
}

//couse.courseInstructor // this is ok to access but each time we have to write it

const {courseInstructor} = course //so we can use it insted
//we are fatching the value from the obj

console.log(courseInstructor)

const {courseInstructor: Instructor} = course //even we can name it shortly if we want
console.log(Instructor)

