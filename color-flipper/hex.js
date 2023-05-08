

let paragraph = document.getElementById("backgroundColorText");

// using arrow function : const randColor = () =>  {
    // we can use padStart or padEnd
    // return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
// }

function generateRandomColorHex(event){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = "#"+randomNumber.padStart(6, 0);
    document.documentElement.style.setProperty('--background-color', randColor);
    console.log(randColor);
    paragraph.innerHTML = `Background Color : ${randColor.toUpperCase()}`;
}

let colorChangerBtn = document.querySelector(".colorChangerBtn");

colorChangerBtn.addEventListener("click", generateRandomColorHex);