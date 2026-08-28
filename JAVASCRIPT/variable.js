const accountId = 144553 //can't be changed
let accountEmail = "Eva@gmail.com"
var accountPassward = "12345"//var let both use to declar variables but in modern let is used cause if we use var and anyware the same name used or change this changed this varible too so let is now mostly used
accountCity = "Dhaka"//we can declare like this but we shouldn't use it
let accountState;//; semicolon is not mandatory my wish
//accountId = 2 //not allowed to change a constant key declaration
accountEmail = "ev@gm.com"
accountPassward = "21212121"
accountCity = "Cumilla"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassward, accountCity])