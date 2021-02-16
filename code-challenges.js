// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

//Pseudo Code
//create a function named whatIsTemp that takes in 3 arguments of temperature: temp1, temp2, temp3 and returns 3 different outcomes: temperature below boiling point, at boiling point, or above boiling point.
//if temp is below boiling point, return "85 is below boiling point"
//if temp is above boiling point, return "350 is above boiling point"
//if temp is at boiling point, return "212 is at boiling point"

var temp1 = 85
var temp2 = 350
var temp3 = 212

const whatIsTemp = (temp) => {
    if (temp < 212) {
        return `${temp} is below boiling point`
    } else if (temp === 212) {
        return `${temp} is at boiling point`
    } else if (temp > 212) {
        return `${temp} is above boiling point`
    } else {
        return "Not a temperature."
    }
}
console.log(whatIsTemp(temp1))
console.log(whatIsTemp(temp2))
console.log(whatIsTemp(temp3))




// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

//Pseudo code
//write a function newNumbers that takes in an array of numbers
//access each number in the array and multiply by 5
//return a new array of each new product 

var myForNumbers1 = [3, 7, 0, 6, -9]
var myForNumbers2 = [2, 5, -8, 20, 32]

const newNumbers = (numbers) => {
    let newArray = []
    for (i=0; i<numbers.length; i++){
        newArray.push(numbers[i] * 5)
    }
    return newArray
}
console.log(newNumbers(myForNumbers1))
console.log(newNumbers(myForNumbers2))



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]

//Pseudo code
//write a function named mult5 that takes in an array of numbers
//using map multiply each number in the array by 5 - map iterates through each value in an array
//return a new array with expected outcome.

var myMapNumbers1 = [87, 6, 28, 16, 2]
var myMapNumbers2 = [8, -7, 0, 6, 12]

// var mult5 = myMapNumbers1.map(value => {
//     return value * 5
// })
// console.log(mult5)

// var mult5 = myMapNumbers2.map(value => {
//     return value * 5
// })
// console.log(mult5)

// Realised this wasn't the right way to do it.

const mult5 = (array) => {
    return array.map(value => {
        return value * 5
    })
}
console.log(mult5(myMapNumbers1))
console.log(mult5(myMapNumbers2))



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

//pseudo code
//write a function named noVowels that takes in a string from var stringWithVowels1 and var stringWithVowels2
//use .split to convert string to array
//use .filter method applied to the vars determine if each value in the array is not "a", "e", "i", "o", and "u"
//return the values that are not vowels and join back to a string. Expected output: "HyThrLrnStdnt" "LvJvScrpt"



var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const noVowels = (string) => {
    let stringToArray = string.split("")
    return stringToArray.filter(value => {
        return value !== 'a' && value !== 'e' && value !== 'i' && value !== 'o' && value !== 'u'
    }).join("")
}

console.log(noVowels(stringWithVowels1))
console.log(noVowels(stringWithVowels2))



// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

//Pseudocode
//refactor function to look for different data types
//add an if statement to test if the type of data is a string
//add an else statement that runs the code from the previous question and outputs just the vowels.

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

const refactorTest = (data) => {
    if (typeof data !== "string") {
        return `${data} is not a string`
    } else {
    let stringToArray = data.split("")
    return stringToArray.filter(value => {
        return value !== 'a' && value !== 'e' && value !== 'i' && value !== 'o' && value !== 'u'
    }).join("")
    }
}

console.log(refactorTest(refactorTester1))
console.log(refactorTest(refactorTester2))
console.log(refactorTest(refactorTester3))



// --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// Expected output: "chopsticks" "stemware"

//Pseudocode
//create a function named kitchenItems that takes in an array of strings as an argument
//declare a variable itemsSorted and apply the .sort() method to return itemsSorted in ascending order
    //after googling a bunch of different things the .sort() method was suggested by someone on discord
    //had to learn how to use it to sort the items in the array by length
//use .pop() method to remove and return the last value in the sorted array


var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]

const longestString = (array) => {
    let itemsSorted = array.sort(function(a, b) {
        return a.length - b.length;
    })
    return itemsSorted.pop()
}

console.log(longestString(utensils))
console.log(longestString(vessels))


// --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

//Pseudocode
//create a function that takes in an argument of an array
//return a new array using .map() 
//inside .map() use .substr() method to return a string starting at the 0 index -1 of the length to remove the last letter.
    //had to learn about the .substr() method that returns a portion of the string starting at the specified index and extending for a given number of charachters afterwards. Using the .length method like in the last problem to access the length of the string and then subtract 1 to remove the last lettter.

var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]

const lessLastLetter = (array) => {
    return array.map(value => {
        return value.substr(0, value.length -1)
    })
}
console.log(lessLastLetter(mario));
console.log(lessLastLetter(pacman));