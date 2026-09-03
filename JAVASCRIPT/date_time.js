let myDate = new Date() // Creates a new date object with the current date and time.
console.log(myDate) // Displays the current date and time.
console.log(myDate.toString()) // Converts the date to a string representation.
console.log(myDate.toDateString()) // Converts the date to a string representation of the date only.
console.log(myDate.toTimeString()) // Converts the date to a string representation of the time only.
console.log(myDate.toLocaleString()) // Converts the date to a string representation based on the local time zone.
console.log(myDate.toLocaleDateString()) // Converts the date to a string representation of the date only based on the local time zone.
console.log(myDate.toLocaleTimeString()) // Converts the date to a string representation of the time only based on the local time zone.
console.log(typeof myDate) // Displays the type of the date object, which is "object".

let myDate2 = new Date(2023, 0, 1) // Creates a new date object with the specified year, month (0-based), and day. starts with 0 for January, 1 for February, and so on.
console.log(myDate2) // Displays the specified date.
console.log(myDate2.toString()) // Converts the specified date to a string representation.

let myDate3 = new Date(2023, 0, 1, 5, 3) // Creates a new date object with the specified year, month (0-based), day, hour, and minute.
console.log(myDate3.toLocaleString()) // Converts the specified date and time to a string representation based on the local time zone.

let myDate4 = new Date('2026-01-3')//as it is a string, it will be treated as UTC time. it will not count from 0 for month, it will count from 1 for January, 2 for February, and so on.here i am using yr-month-day format but we can use this as a place preffer mm/dd/yyyy or dd/mm/yyyy format as well.
console.log(myDate4.toLocaleString()) // Converts the specified date to a string representation based on the local time zone.

let myDate5 = Date.now() // Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.
console.log(myDate5) // Displays the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.
console.log(myDate4.getTime()) // Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC for the specified date.

console.log(Math.floor(Date.now() / 1000)) // Returns the number of seconds elapsed since January 1, 1970, 00:00:00 UTC by dividing the milliseconds by 1000 and rounding down to the nearest integer. this value is called as Unix timestamp or Epoch time. it is used in many programming languages and systems to represent a point in time.so mainly by dividing by 1000 we are converting milliseconds to seconds and then using Math.floor() to round down to the nearest integer.

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()) // Returns the month (0-11) of the specified date. January is 0, February is 1, and so on.
console.log(newDate.getDate()) // Returns the day of the month (1-31) of the specified date.
console.log(newDate.getFullYear()) // Returns the year (4 digits) of the specified date.
console.log(newDate.getDay()) // Returns the day of the week (0-6) of the specified date. Sunday is 0, Monday is 1, and so on.

//string interaction with date object
console.log(`${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`)// Returns a string representation of the date in the format "dd/mm/yyyy".

newDate.toLocaleString('default', {
     weekday: 'long' 
    }) // Returns the full name of the day of the week for the specified date.