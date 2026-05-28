document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior:'smooth'
        });

    });

});

// DARK MODE

const themeToggle =
document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle(
        "dark-mode"
    );

    if(
        document.body.classList.contains(
            "dark-mode"
        )
    ){
        themeToggle.innerHTML = "☀️";
    }
    else{
        themeToggle.innerHTML = "🌙";
    }

});

// ACTIVE NAVIGATION

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
    "nav ul li a"
);

window.addEventListener(
"scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(
            pageYOffset >= sectionTop
        ){
            current =
            section.getAttribute(
                "id"
            );
        }

    });

    navLinks.forEach(link => {

        link.classList.remove(
            "active"
        );

        if(
            link.getAttribute(
                "href"
            ) === "#" + current
        ){
            link.classList.add(
                "active"
            );
        }

    });

});

// TYPING ANIMATION

const typingText = [

    "BSIT Student",
    "Web Developer",
    "Future Programmer",
    "Frontend Designer"

];

let textIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById(
    "typing"
);

function typeEffect(){

    if(
        charIndex <
        typingText[textIndex].length
    ){

        typingElement.innerHTML +=
        typingText[textIndex]
        .charAt(charIndex);

        charIndex++;

        setTimeout(
            typeEffect,
            100
        );

    }
    else{

        setTimeout(
            eraseEffect,
            1500
        );

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingElement.innerHTML =

        typingText[textIndex]
        .substring(
            0,
            charIndex - 1
        );

        charIndex--;

        setTimeout(
            eraseEffect,
            50
        );

    }
    else{

        textIndex++;

        if(
            textIndex >=
            typingText.length
        ){
            textIndex = 0;
        }

        setTimeout(
            typeEffect,
            500
        );

    }

}

typeEffect();
const topBtn =
document.getElementById(
    "topBtn"
);

topBtn.addEventListener(
"click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
