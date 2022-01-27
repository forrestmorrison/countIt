// Count It

// EXAMPLE: 
// input = "Alright, that's all Folks!"
// expected output = { a: 3, f: 1, g: 1, h: 2, i: 1, k: 1, l: 4, o: 1, r: 1, s: 2, t: 3 }

// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// getPrompt function asks for input

const getPrompt = () => {
    console.log();
    rl.question('input: ', (input) => {
        countDuplicates(input);
    });
  }
  
getPrompt();

const countDuplicates = (input) => {
    let charExclusion = input.replace(/[^a-zA-Z]/g, ""); // removes special characters and whitespace from string
    let cleanWord = charExclusion.toLowerCase(); //changes uppercase to lowercase
    let sortedArray = cleanWord.split("").sort(); // creates array and sorts string alphabetically
    const duplicates = {};

    for (let i=0; i < sortedArray.length; i++) { // iterates through sortedArray
        if (duplicates[sortedArray[i]]) {
          duplicates[sortedArray[i]] += 1 // add 1 to property if letter repeats
        } else {
          duplicates[sortedArray[i]] = 1 // else property equals 1
        }
    }
    console.log(duplicates)
}

