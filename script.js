let x = "asd"
let y = 12
let z = false

let arr = ["egy","kettő","három"]
let arr2 = [10,2,67]
let arr3= [true, false, true]
let arr4= ["string", 1, false]

let obj1 ={
    key1: "value",
    key2: 101,
    key3: false,
    key4: [
        "cat",
        "dog",
        "chicken"
    ],

    key5: {
        nestedKey: "text",
        nestedKey2: 66
    },
    users: [
        {
            name: "Gipsz Jakab",
            age: 28

        },
        {
            name: "John Doe",
            age:66,
            isActive: false,
            pets: ["Jani", "Laci"]

        }

    ]
}

// console.log(obj1)


// function myFunc(){
//     console.log("This is my function")
// }

// myFunc()

// function greetMe(param) {
//     console.log(`Szia ${param}!`)
// }

// greetMe("argument")


// function addTwoNumbers(number1,number2){
//     let sum = number1 + number2
//     console.log(`The sum of two numbers (${number1}, ${number2}) is: ${sum}`)
//     return sum
// }

// let resultOfAddTwoNumbers = addTwoNumbers(10,2)
// console.log(`The result of resultOfAddTwoNumbers: ${resultOfAddTwoNumbers}`)


function cbExample(){
    console.log("i am a callback function")
}

function funcExample(name, callback) {
    console.log(`hello ${name}`)
    callback()
}

funcExample("Reka", cbExample)