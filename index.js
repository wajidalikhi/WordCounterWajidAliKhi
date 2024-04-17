#! /usr/bin/env node
// This line called a shebang, it tells the os to run it with nodejs
// import the 'inquirer' module, which is a command line interface for node.js
import inquirer from "inquirer";
// declare a constant 'answers' and assing it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.sentence.trim().split(" ");
// print the array of words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
