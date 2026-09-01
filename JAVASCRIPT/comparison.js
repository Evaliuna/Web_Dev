console.log(2>1);//comparison operator. it will return true if the left value is greater than the right value otherwise it will return false
console.log(2 >= 1);//comparison operator. it will return true if the left value is greater than or equal to the right value otherwise it will return false
console.log(2<1);//comparison operator. it will return true if the left value is less than the right value otherwise it will return false
console.log(2 <= 1);//comparison operator. it will return true if the left value is less than or equal to the right value otherwise it will return false
console.log(2 == 1);//comparison operator. it will return true if the left value is equal to the right value otherwise it will return falsew

console.log("2" > 1);//although the left value is a string but it will be converted to number and then compared. but not always it can give correct value so alwyas should compare same type of values. 

console.log(null > 0);//false. null is converted to 0 and then compared. so 0 > 0 is false
console.log(null == 0);//false. null is not equal to 0
console.log(null >= 0);//true. null is converted to 0 and then compared. so 0 >= 0 is true
// == this will check the value only but >, <, >=, <= these will convert the value to number and then compare.

// === this stictly check if the type is equal and data
console.log(2 === 2);//true. both the type and value are equal
console.log(2 === "2");//false. the type is not equal