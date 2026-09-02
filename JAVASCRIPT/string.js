const name = 'Eva'//string. it is a primitive data type. it is used to store text. it is a string type
const repoCount = 50//number. it is a primitive data type. it is used to store numbers. it is a number type

//console.log(name + repoCount)//Eva50. here + is used to concatenate the string and number. it will convert the number to string and then concatenate it with the string. it is outdated and i will try to avoid it.

//insted we use it
console.log(`My name is ${name} and my repo count is ${repoCount}`)//My name is Eva and my repo count is 50. here we are using template literals to concatenate the string and number. it will not convert the number to string and then concatenate it with the string. it is a modern way of concatenating strings and numbers. it is more readable and easier to use.

const gameName = new String('Chess')//string. it is a non-primitive data type. it is used to store text. it is a string type. here we are using the String constructor to create a string object. it is not recommended to use the String constructor to create a string object because it will create a string object instead of a string primitive. it will take more memory and it will be slower than using string primitive.
//but we can use it to solve many problems. for example, if we want to check the length of the string then we can use the String constructor to create a string object and then we can use the length property to get the length of the string. it will return the length of the string object instead of the string primitive.
console.log(gameName[0])//C. here we are using the index to get the first character of the string object. it will return the first character of the string object instead of the string primitive.
//as the new String object create it like key value pair. so we can use the key to get the value of the string object. 
console.log(gameName.__proto__)//String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}. here we are using the __proto__ property to get the prototype of the string object. it will return the prototype of the string object instead of the string primitive. it is not recommended to use the __proto__ property because it is deprecated and it will be removed in future versions of javascript. it is better to use Object.getPrototypeOf() method to get the prototype of the string object.
console.log(gameName.length)//5. here we are using the length property to get the length of the string object. it will return the length of the string object instead of the string primitive. 
console.log(gameName.toUpperCase())//CHESS. here we are using the toUpperCase() method to convert the string object to uppercase. it will return the string object in uppercase instead of the string primitive. 
console.log(gameName.charAt(0))//C. here we are using the charAt() method to get the first character of the string object. it will return the first character of the string object instead of the string primitive. 
console.log(gameName.indexOf('e'))//1. here we are using the indexOf() method to get the index of the first occurrence of the character 'e' in the string object. it will return the index of the first occurrence of the character 'e' in the string object instead of the string primitive. 

const newGameName = gameName.substring(0, 3)//Che. here we are using the substring() method to get the substring of the string object from index 0 to index 3. it will return the substring of the string object instead of the string primitive. 
console.log(newGameName)//Che. it will return 0 to 2 value means before 3 the last index is not included. it will return the substring of the string object instead of the string primitive. 

const newGameName2 = gameName.slice(-4, 3)//he. here we are using the slice() method to get the substring of the string object from index -4 to index 3. it will return the substring of the string object instead of the string primitive. 
console.log(newGameName2)//he. it will return -4 to 2 value means before 3 the last index is not included. it will return the substring of the string object instead of the string primitive.here it dosen't print the first character because we are using the negative index. 

const newGameName3 = "   Chess  " //string. it is a primitive data type. it is used to store text. it is a string type. here we are using the string primitive to create a string. 
console.log(newGameName3)//   Chess. here we are using the string primitive to create a string. it will return the string primitive instead of the string object. 
console.log(newGameName3.trim())//Chess. here we are using the trim() method to remove the whitespace from the string primitive. it will return the string primitive without whitespace instead of the string object. 

const url = 'https://www.google.com/search?q=javascript+string+methods&oq=javascript+string+methods&aqs=chrome..69i57j0i512l9.1234j0j7&sourceid=chrome&ie=UTF-8'//string. it is a primitive data type. it is used to store text. it is a string type. here we are using the string primitive to create a string.

console.log(url.replace('https', 'http'))//http://www.google.com/search?q=javascript+string+methods&oq=javascript+string+methods&aqs=chrome..69i57j0i512l9.1234j0j7&sourceid=chrome&ie=UTF-8. here we are using the replace() method to replace the 'https' with 'http' in the string primitive. it will return the string primitive with the replaced value instead of the string object.
console.log(url.includes('google'))//true. here we are using the includes() method to check if the string primitive contains the 'google' or not. it will return true if the string primitive contains the 'google' otherwise it will return false. it will return the boolean value instead of the string object.
console.log(url.split('&'))//["https://www.google.com/search?q=javascript+string+methods", "oq=javascript+string+methods", "aqs=chrome..69i57j0i512l9.1234j0j7", "sourceid=chrome", "ie=UTF-8"]. here we are using the split() method to split the string primitive into an array of substrings based on the '&' character. it will return an array of substrings instead of the string object.

const myString = 'Hello World'//string. it is a primitive data type. it is used to store text. it is a string type. here we are using the string primitive to create a string.
console.log(myString.split(''))//["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]. here we are using the split() method to split the string primitive into an array of substrings based on the '' character. it will return an array of substrings instead of the string object.
