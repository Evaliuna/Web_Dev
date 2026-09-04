const myArr = [1, 2, 3, 4, 5]
//const myArrDemo = [1, 2, 3, 4, 'Eva', true, null] // arrau can have mixed data types too.

const myHero = ['Iron Man', 'Captain America', 'Thorn', 'Hulk']

const myArr2 = new Array(1, 2, 3, 4, 5) // Creates a new array using the Array constructor.
console.log(myArr[0]) // Accesses the first element of the array (index 0).

// Array methods
myArr.push(6) // Adds an element to the end of the array.
console.log(myArr) // Displays the updated array.

myArr.pop() // Removes the last element from the array.
console.log(myArr) // Displays the updated array.

myArr.unshift(0) // Adds an element to the beginning of the array.
console.log(myArr) // Displays the updated array.

myArr.shift() // Removes the first element from the array.
console.log(myArr) // Displays the updated array.

console.log(myArr.includes(3)) // Checks if the array includes the value 3.
console.log(myArr.indexOf(3)) // Returns the index of the first occurrence of the value 3.

const newArr = myArr.join()// Joins all elements of the array into a string, separated by commas.
console.log(newArr) // Displays the joined string.
console.log(typeof newArr) // Displays the type of the joined string (string).

//slice and splice methods

const myArr3 = myArr.slice(1, 4) // Creates a new array containing elements from index 1 to 3 (4 is not included).
console.log(myArr3) // Displays the new array created by slice.
console.log("B ", myArr) // Displays the original array to show it remains unchanged after slice.

const myArr4 = myArr.splice(1, 3) // Removes 3 elements starting from index 1 and returns them as a new array.
console.log(myArr4) // Displays the new array created by splice.
console.log("A ", myArr) // Displays the original array to show it has been modified after splice.

//so the main difference between slice and splice is that slice does not modify the original array, while splice does. Slice returns a new array with the selected elements, while splice removes elements from the original array and returns them as a new array.
//splice includes the range of elements specified, while slice does not include the end index in the new array.

const marvel_heros = ['Iron Man', 'Captain America', 'Thorn', 'Hulk', 'Black Widow', 'Hawkeye']
const dc_heros = ['Superman', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman', 'Cyborg']

marvel_heros.push(dc_heros) // Adds the entire dc_heros array as a single element to the end of the marvel_heros array.
console.log(marvel_heros) // Displays the updated marvel_heros array, which now includes the dc_heros array as a single element.
console.log(marvel_heros[6][0]) // Accesses the first element of the dc_heros array, which is now the 7th element of the marvel_heros array.

const all_heros = marvel_heros.concat(dc_heros) // Creates a new array by concatenating the marvel_heros and dc_heros arrays.
console.log(all_heros) // Displays the new array containing all heroes from both arrays.

const all_heros2 = [...marvel_heros, ...dc_heros] // Creates a new array by spreading the elements of both arrays into a new array.most people prefer this method as it is more readable and easier to understand.
console.log(all_heros2) // Displays the new array containing all heroes from both arrays.

const anotherArr = [1, 2, 3, 4, 5,[6, 7, 8, 9, 10], [11, 12, 13, [14, 15]]] // Creates a nested array with multiple levels of arrays.
console.log(anotherArr) // Displays the nested array.

const real_anotherArr = anotherArr.flat(Infinity) // Flattens the nested array into a single-level array, regardless of how many levels of nesting there are.
console.log(real_anotherArr) // Displays the flattened array.

console.log(Array.isArray("Eva"))//gave true or false
console.log(Array.from("Eva"))//it form the value into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
