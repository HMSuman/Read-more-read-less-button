// declare the variable
let dots = document.getElementById("dots");
let moreText = document.getElementById("more");
let btnText = document.getElementById("myBtn");
btnText.addEventListener('click', () => {
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
})