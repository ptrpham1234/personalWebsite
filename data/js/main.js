

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