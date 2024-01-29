// document.getElementById("count-el").innerText = 5


//Create two variables, myAge and humanDogRatio
//2.Multiply the two together and store the result in myDogAge
//3. Log myDogAge to the console

// let myAge = 21 
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

/*let bonusPoints = 50
bonusPoints = bonusPoints * 2
console.log(bonusPoints)
bonusPoints = bonusPoints - 75
console.log(bonusPoints)
bonusPoints = bonusPoints + 45
console.log(bonusPoints) */

// initialize the count as 0 
// listen for clicks on the increment button
// increment the count variable when the button is clicked 
// change the count-el in the html to reflect the new count




//function increment() {}


/* let lap1 = 34
let lap2 = 33
let lap3 = 36

function myLogger() {
    let totalLaptime = lap1 + lap2 + lap3
    console.log(totalLaptime)
}
myLogger() */

/* let lapsCompleted = 0
// Create a function that increments the lapscompleted variable with one
// Run it three times

function incrementlaps() {
    lapsCompleted = lapsCompleted + 1
    
}
 incrementlaps()
 incrementlaps()
 incrementlaps()
 console.log(lapsCompleted) */


// initialize the count as 0 
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

/* let count = 0
 
function increment() {
    count = count + 1
    console.log(count)
     document.getElementById("count-el").innerText = count
}
increment() */

// grab the count-el element, store it in a countEl variable 
/* let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count = count + 1
    countEl.innerText = count
    // set countEl's innerText to the count

}


// 1. Create a function, save(), which logs out the count when it's called

function save() {
    
    console.log(count)
} */

/* let username = "aya"
// create a variable, message, that stores the string: "You have three new notifications"

let message = "You have three new notifications"
console.log(message + ", " + username + "!")
// Create a variable, messageToUser, that contains the message we have logged

let messageToUser = message + ", " + username + "!"
console.log(messageToUser) */

/* // Create two variables, name and greeting. The name variable should store your name 
// and the greeting should store e.g. "Hi, my name "
let myName = "Aya"
let greeting = "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
let myGreeting = greeting + " " + myName
console.log(myGreeting) */


// Sring vs numbers -- String always win

// 1.Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    
    

}

function save() {
    //2. Create a variable contains both the count and the dash separator, i.e "12 - " 
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let saveCount = count + " - " 
    
    saveEl.textContent += saveCount
    countEl.textContent = 0
    count = 0
    
}
