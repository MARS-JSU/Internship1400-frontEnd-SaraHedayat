//functions
function switcher(){
    slides.forEach(slide =>{
        slide.classList.remove("active");
    })
    points.forEach(point =>{
        point.classList.remove("active");
    })
    slides[active].classList.add("active");
    points[active].classList.add("active");
}

let gonext = () =>{
    active = (active == slides.length-1) ? 0 : active + 1;
    switcher();
}
let goprev = () =>{
    active = (active == 0) ? slides.length-1 : active - 1;
    switcher();
}
let active=0;
let timer=5000;

let slidshow = document.querySelector(".slideshow");
let slides = document.querySelectorAll(".slide");
let points = document.querySelectorAll(".points > span");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let startslideshow =setInterval(gonext,timer);

//points
points.forEach((point , index) =>{
    point.addEventListener("click" , e =>{
        active = index;
        switcher();
    })
})

next.addEventListener("click" , e =>{
    gonext();
})

prev.addEventListener("click" , e =>{
    goprev();
})

slideshow.addEventListener("mouseover" , e =>{
    clearInterval(startslideshow);
})
slideshow.addEventListener("mouseleave" , e =>{
    startslideshow = setInterval(gonext,timer);
})

