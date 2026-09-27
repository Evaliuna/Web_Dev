const coding = ['js', 'ruby', 'java','cpp']

const value = coding.forEach( (item) => {
    console.log(item)
})

console.log(value);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = myNums.filter( (num) => num > 4)//only paran-theses no need to return key word

// const newNums = myNums.filter( (num) => {
//      return num > 4
// })
//here we need to add return keyword, cause we are opening a scope when using a second bracket

//another way insted of filter
// const newNums2 = []

// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums2.push(num)
//     }
// })

console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1991, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1996}
];

let userBooks = books.filter( (bk) => { bk.genre === 'History'})

userBooks = books.filter ( (bk) => { return bk.publish > 2000})//we opened a scope

console.log(userBooks)