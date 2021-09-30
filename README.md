# calculator-app
This project is allows the user to interact with an online calculator with basic arithmetic operators.

![calculator layout](/assets/app-preview.jpg)

With that said, this project is my first project and I have faced quite a decent amount of roadblock. The main problem was with my main function being too bloated. It was filled with if-else statement, and multiple variables that I lost track of halfway through.

## Innovation
I decided to use an array *miniBlockChain* to keep track of my state variables.

As the name implies, it has some features of a blockchain where the new array would contain some information about the previous array.

        let miniBlockChain=[]; // initialised as an empty array
        miniBlockChain=[num1]; // userInput
        ...
        miniBlockChain=[num1,add,num2]; // after some code miniBlockChain would have a length of 3
        miniBlockChain=[add(num1,num2)]; // miniBlockChain would be reassigned to length 1, allowing the process to repeat
