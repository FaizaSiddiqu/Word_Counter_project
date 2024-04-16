#! /usr/bin/env node

//import the "inquirer" module,which is command line interface of node.js
import inquirer from "inquirer"

//Declare a constant"answers" and assighn it to the result of inquirer.prompt() function.
const answers: {
    Sentence  : string
  }  = await inquirer.prompt([
    {
        name : "Sentence",
        type : "input",
        message : "Enter your sentence to count the word"
    }
  ])
  const words = answers.Sentence.trim().split(" ");

  //prints the array of words to the console.
  console.log(words);

//print the word count of the sentence to the console.
  console.log(`your sentence words count is ${words.length}`);


