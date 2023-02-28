
//start making the "make boxes" button active
let myButton = document.querySelector(".make-boxes");
myButton.addEventListener("click", renderBoxes);

//get the number of boxxes to make from user 
function getNumBoxes() {
    var numBoxes = Number(prompt("how many boxes?"));

    if (numBoxes <= 0 || Number.isNaN(numBoxes)) {
        return 0;
    }
    return numBoxes;
}

//Makes boxes based on user input
//we use tempholder to build in the boxes in memory only.
function makeBoxes() {
    const numBoxes = getNumBoxes();
    const tempHolder = document.createDocumentFragment();

//repeat loop
for (let i = 1; i <= numBoxes; i++) {
    let box = document.createElement("DIV");
    let txt = document.createTextNode(i);
    box.className = "box";

//write the event listener     

box.addEventListener('click', (e) => {
        e.target.classList.toggle('spin');
    });

box.appendChild(txt);
tempHolder.appendChild(box);
} 
//end loop

return tempHolder;
}   
// this put the boxes that weve made from makeBoxes on the page

function renderBoxes(e) {
    //gives you the data-holder 
    const containerName = e.target.dataset.holder;
    const container = document.querySelector(containerName);
    const boxes = makeBoxes();

    if (boxes.children.length === 0) {
        container.innerHTML = "Try Again. Please type a positive whole number";
    } else {
        container.innerHTMl = "";
        container.appendChild(boxes);
    }
}

   
   
   
   
   
   
   
   
   
