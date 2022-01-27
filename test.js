// countIt test



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
        countIt(input);
    });
  }
  
getPrompt();



const countIt = (strInput) => {
    if (strInput !== "") {
        console.log("CALL FUNCTION!!");
    } else {
        getPrompt();
    }
}



const printLetterCount = (letterCountObj) => {
    console.log(letterCountObj);
}