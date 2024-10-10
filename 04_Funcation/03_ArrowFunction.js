//Objects

const user = {
    username: 'AHmad',
    age: 30,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`) // when we reffer to the current context we use this keyword
        console.log(this) // it return all current context
    }
}

user.welcomeMessage()

console.log(this) // it return the empty braces


//Function

function one() {
    let user = "AHmad Umar"
    console.log(this.user) // it return empty braces and it does not work in function and it work in objects
}

one()


// Arrow Function

const two = () => {
    let user = "AHmad Umar"
    console.log(this.user) // it return empty braces and it does not work in function
}

two()

const addTwo = (num1 , num2) => {
    return num1 + num2
}

console.log(addTwo(2 , 3))

// If we are using braces and we use return keyword.

const addThree = (num1 , num2 , num3) => (num1 + num2 + num3)

console.log(addThree(2 , 3, 4))

// const addThree = (num1 , num2 , num3) => num1 + num2 + num3

// console.log(addThree(2 , 3, 4))

const myArray = [1 , 2 , 3 , 4 , 5 , 6]

myArray.forEach((index)  => (console.log(index)))