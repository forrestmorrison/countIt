

// input
// input = "Alright, that's all Folks!"

// display output
// expected output = { a: 3, f: 1, g: 1, h: 2, i: 1, k: 1, l: 4, o: 1, r: 1, s: 2, t: 3 }

/* 
<section>
    <ul id="letter-list">
        <li> "a: 3" </li>
        <li> "f: 1" </li>
        <li> "g: 1" </li>
        <li> "h: 2" </li>
        etc ...
    </ul>
</section> 
*/

let input = "";

const saveInput = (userInput) => {
    input = userInput;
    console.log(input);
  }

const duplicates = (string) => {
    let element = document.createElement('div');
    element.innerText = string;
    document.body.appendChild(element);
}

const countDuplicates = () => {
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
    console.log(duplicates);
    let duplicatesStr = JSON.stringify(duplicates);
    const para = document.createElement("p");
    para.innerHTML = duplicatesStr;
    document.getElementById("myDiv").appendChild(para);
}

