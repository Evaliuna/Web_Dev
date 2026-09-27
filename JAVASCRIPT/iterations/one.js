//for
for(let i  = 0; i<=10; i++){
    const cement = i;
    if(i == 5){
        console.log("5 is best number")
    }
    console.log(cement)
}


for(let i = 0; i<=10; i++){
    for(let j = 0; j<= 10; j++){
        console.log(`this is ${i}, ${j}`)
    }
}

//array
let myArray = [1,2,3,4,5]

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}

//break & continue

for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log("detected 5")

        break//break the loop
    }
    console.log(`value of i is ${i}`)
}

for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log("detected 5")

        continue//skip this iteration of the loop
    }
    console.log(`value of i is ${i}`)
}