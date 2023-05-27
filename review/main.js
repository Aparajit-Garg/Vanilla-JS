import './style.css';

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

let author = document.getElementById("name");
let role = document.getElementById("job");
let review = document.getElementById("review");
let img = document.getElementById("profile");

let leftArrowBtn = document.getElementById("leftArrow");
let rightArrowBtn = document.getElementById("rightArrow");
let surpriseMeBtn = document.getElementById("surpriseMe");

window.addEventListener("DOMContentLoaded", (event) => {
    author.innerHTML = reviews[0].name;
    role.innerHTML = reviews[0].job;
    review.innerHTML = reviews[0].text;
    img.src = reviews[0].img;
});


const showPerson = (index) => {
    console.log(currentIndex);
    const item = reviews[index];
    author.innerHTML = reviews[currentIndex].name;
    role.innerHTML = reviews[currentIndex].job;
    review.innerHTML = reviews[currentIndex].text;
    img.src = reviews[currentIndex].img;
}


leftArrowBtn.addEventListener('click', (event) => {
    if (currentIndex > 0)
        currentIndex--;
    else
        currentIndex = 3;
    showPerson(currentIndex);
});


rightArrowBtn.addEventListener('click', (event) => {
    if (currentIndex < 3)
        currentIndex++;
    else
        currentIndex = 0;
    showPerson(currentIndex);
});

surpriseMeBtn.addEventListener('click', (event) => {
    currentIndex = Math.floor(Math.random() * reviews.length);
    showPerson(currentIndex);
})