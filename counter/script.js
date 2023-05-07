
let counterBtn1 = document.querySelector(".buttons1");
let counterBtn2 = document.querySelector(".buttons2");
let displayCounter1 = document.getElementById("counter1");
let displayCounter2 = document.getElementById("counter2");

let counterFirst = 0;
let counterSecond = 0;

const counter1 = (event) => {
    let counter = 0;
    console.log(event);
    
    const counterCallback1 = (event) => {
        console.log("hey");
        if (event.srcElement.innerHTML === "reset") {
            console.log("Reset pressed");
            counterFirst = 0;
            displayCounter1.innerHTML = counterFirst;
        }
        else if (event.srcElement.innerHTML === "decrease") {
            console.log("Decrease pressed");
            counterFirst--;
            displayCounter1.innerHTML = counterFirst;
        }
        else if (event.srcElement.innerHTML === "increase") {
            console.log("Increase pressed");
            counter++;
            displayCounter1.innerHTML = counter;
        }
    }
    return counterCallback1;
}

let callback1 = counter1.bind(counterFirst);
let callback2 = counter1();

counterBtn1.addEventListener("click", callback1);
counterBtn2.addEventListener("click", callback2);