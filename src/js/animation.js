
const animate = document.querySelectorAll(".building, .investment, .estimate, .offers__cards, .history");

animate.forEach(element => {
    element.style.opacity = 0
});

const fadeIn = function () {


    let delay = 0.25;

    animate.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom

        if(elementTop < window.innerHeight) {
            element.style.animation = `fadein 1s ${delay}s both`
            delay = delay + 0.25;
        }
    })
}
fadeIn();

document.addEventListener("scroll", function (){
    fadeIn()
})

window.addEventListener("resize", function(){
    fadeIn()
})

