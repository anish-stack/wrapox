const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});
function navbarAnimation (){

    gsap.from("#page1 #navbars",{
        y:-80,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.2
    })



}

navbarAnimation()
function sliderAnimation (){

    gsap.from("#page1 #slider",{
        x:-80,
        y:20,
        opacity:0,
        delay:0.9,
        duration:0.9,
        stagger:0.2
    })



}
sliderAnimation()

document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu");
    const navbars = document.querySelector(".nav");
  
    menuBtn.addEventListener('click', () => {
      navbars.classList.toggle('show');
    });
  });

// Initialize slider -->
const slides = document.querySelectorAll('.slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 1;
let interval; // Declare interval as a let variable

function showSlide() {
    slides.forEach((slide, index) => {
        const diff = index + 1 - currentSlide;
        slide.style.transform = `translateX(${diff * 100}%)`;
    });
}

prevButton.addEventListener('click', () => {
    if (currentSlide > 1) {
        currentSlide--;
    } else {
        currentSlide = slides.length;
    }
    showSlide();
});

nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length) {
        currentSlide++;
    } else {
        currentSlide = 1;
    }
    showSlide();
});

function nextSlide() {
    if (currentSlide < slides.length) {
        currentSlide++;
    } else {
        currentSlide = 1;
    }
    showSlide();
}

// Automatically change the slide every 4 seconds
interval = setInterval(nextSlide, 4000);

// Stop the automatic slide change when the previous or next button is clicked
prevButton.addEventListener('click', () => {
    clearInterval(interval);
});

nextButton.addEventListener('click', () => {
    clearInterval(interval);
});

// Start the automatic slide change again after a button click
prevButton.addEventListener('click', () => {
    interval = setInterval(nextSlide, 4000);
});

nextButton.addEventListener('click', () => {
    interval = setInterval(nextSlide, 4000);
});

showSlide();




function loadingAnimation (){

    gsap.from("#page2 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.2
    })

   
}
loadingAnimation()



// Split the heading text into words
const heading = document.querySelector("#page2 #our__misson h3");
const words = heading.textContent.split(" ");

// Replace the heading text with individual spans for each word
heading.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");

// Select all the individual word spans
const wordSpans = document.querySelectorAll("#page2 #our__misson h3 span");

// Animate each word one by one
wordSpans.forEach((word, index) => {
    gsap.from(word, {
        y: 100,
        opacity: 0,
        delay: 0.5 + index * 0.2, // Delay each word by 0.2 seconds
        duration: 0.9,
        onComplete: () => {
            // Callback for each word animation
            console.log(`Animation for word "${words[index]}" complete`);
            // You can add custom code here
        }
    });
});


gsap.from("#page2 #our__misson p", {
    x: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.2,
    onComplete: () => {
        // Callback for the paragraph animations
        console.log("Paragraph animation complete");
        // You can add custom code here
    }
});


function videoPlayBtn() {
    const video_container = document.querySelector("#page2");
    const play_btn = document.querySelector("#cursor");

    play_btn.addEventListener('click', () => {
        // Replace with the actual URL you want to navigate to
        window.location.href = "conatch.html";
    });

    video_container.addEventListener("mouseenter", () => {
        gsap.to(play_btn, {
            opacity: 1,
            scale: 1
        });
    });

    video_container.addEventListener("mouseleave", () => {
        gsap.to(play_btn, {
            scale: 0,
            opacity: 0
        });
    });

    video_container.addEventListener("mousemove", (dets) => {
        gsap.to(play_btn, {
            left: dets.x - 20,
            top: dets.y - 80
        });
    });
}

videoPlayBtn();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});