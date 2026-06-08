const runways = [
    { img: "/images/runway_4.jpeg", alt: "runway/1999" },
    { img: "/images/runway_5.jpeg", alt: "runway/1999" },
    { img: "/images/runway_1.jpeg", alt: "runway/1999" },
    { img: "/images/runway_7.jpeg", alt: "runway/1990" },
    { img: "/images/runway_8.jpeg", alt: "runway/1999" }
];

let current = 0;

const img = document.getElementById("slider_img");
const containerCircle = document.getElementById("container_circle");
const actualLook = document.getElementById("look");

function CreateCircles() {
    for (let i = 0; i < runways.length; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        containerCircle.appendChild(circle);
    }
}

function updateCircles() {
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        circle.classList.remove("active");
    });

    circles[current].classList.add("active");
}

function ShowImgScroll() {
    img.classList.add("animation");
    setTimeout(() => {
    img.src = runways[current].img;
    img.alt = runways[current].alt;

    img.classList.remove("animation");
    updateCircles();
    }, 600);
}

CreateCircles();
ShowImgScroll();

setInterval(() => {
    current += 1;
    if(current == runways.length){
        current = 0
    }
    actualLook.innerHTML = `Look 0${current + 1}`;
    ShowImgScroll();
}, 5000);