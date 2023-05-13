
let counterBtn1 = document.querySelector(".buttons1");
let counterBtn2 = document.querySelector(".buttons2");
let displayCounter1 = document.getElementById("counter1");
let displayCounter2 = document.getElementById("counter2");

let counterFirst = 0;
let counterSecond = 0;

const counter1 = (initialValue) => {
    let counter = initialValue;
  
    let incrementCounter = () => {
        counter++;
        return counter;
    }

    let decrementCounter = () => {
        counter--;
        return counter;
    }

    let resetCounter = () => {
        counter=0;
        return counter;
    }

    return {
        increment:incrementCounter,
        decrement:decrementCounter,
        reset:resetCounter
    };
}


const updateCounter = (event, display, callback) => {
    if (event.target.innerHTML === "increase") {
        let value = callback.increment();
        display.innerHTML = value;
    }
    else if (event.target.innerHTML == "decrease") {
        let value = callback.decrement();
        display.innerHTML = value;
    }
    else {
        let value = callback.reset();
        display.innerHTML = value;
    }
}

let callback1 = counter1(0);
let callback2 = counter1(0);


counterBtn1.addEventListener("click", (event) => updateCounter(event, displayCounter1, callback1));
counterBtn2.addEventListener("click", (event) => updateCounter(event, displayCounter2, callback2));