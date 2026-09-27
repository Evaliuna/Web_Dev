const myObject = {
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//object dosent work on 'for of' so we use 'for in'
for(const key in myObject){
    console.log(`${key} shortcut is of ${myObject[key]}`)
}

const programming = ["js", "rb", "py","java", "cpp"]

for (const key in programming) {
    console.log(programming[key])
}