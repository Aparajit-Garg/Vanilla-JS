
const colorChoices = ["red", "green", "blue", "black", "white", "gray", "maroon", 
                "purple", "lime", "olive", "navy", "teal", "aqua"];


let colorChangerBtn = document.querySelector(".colorChangerBtn");
let paragraph = document.getElementById("backgroundColorText");

const changeColor = (event) => {
    const index = Math.floor(Math.random() * colorChoices.length);
    document.documentElement.style.setProperty("--background-color", colorChoices[index]);
    paragraph.innerHTML = `Background Color : ${colorChoices[index].toUpperCase()}`;
}

colorChangerBtn.addEventListener("click", changeColor);