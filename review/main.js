import './style.css';
import leftArrow from "./left_arrow.png";
import rightArrow from "./right_arrow.png";

// local reviews data
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];


let currentIndex = 0;

window.addEventListener("DOMContentLoaded", (event) => {
    

});


document.getElementById("app").innerHTML = `
    <div class='card'>
        <div>
            <h2> Our Reviews </h2>
            <span class="underline"></span>
        </div>
        <article>
            <div class='review_card'>
                <img class="logo" src=${reviews[currentIndex].img} alt="reviewer pic" />
                <span> ${reviews[currentIndex].name} </span>
                <span> ${reviews[currentIndex].job} </span>
                <span class="read-the-docs"> ${reviews[currentIndex].text} </span>
                <span>
                    <img src=${leftArrow} alt="left arrow" />
                    <img src=${rightArrow} alt="right arrow" />
                </span>
                <span> Surprise me <span>
            </div>

        </article>
    </div>
`