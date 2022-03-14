

// const options = { }

// const observer = new IntersectionObserver(function(entries, observer) {
    
//     entries.forEach(entry => {
//         console.log(entry);
//     })

// }, options);

// observer.observe(sectionOne)

function copyClipboard() {
    navigator.clipboard.writeText("ptrpham2468@gmail.com")

    // email-tooltip
    var tooltip = document.getElementById("email-tooltip")
    tooltip.innerHTML = "Copied to clipboard!"
}

function copyOutFunc() {
    var tooltip = document.getElementById("email-tooltip")
    tooltip.innerHTML = "Copy to clipboard";
}

function fadeOut() {
    TweenMax.to(".explore-button", 1, {
        y: -20,
        opacity: 0,
    });

    TweenMax.to(".card", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2,
    });

    TweenMax.from(".wrapper", 2, {
        ease: Power2.easeInOut,
    });

    TweenMax.to(".wrapper", 2, {
        delay: 2.6,
        top: "-110%",
        ease: Expo.easeInOut,
    });

    TweenMax.to(".overlay", 2, {
        delay: 3,
        top: "-110%",
        ease: Expo.easeInOut,
    });

    TweenMax.from(".content", 2, {
        delay: 3.2,
        opacity: 0,
        ease: Power2.easeInOut,
    });

    TweenMax.to(".content", 2, {
        opacity: 1,
        y: -300,
        delay: 3.2,
        ease: Power2.easeInOut,
    });
}