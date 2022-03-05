

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