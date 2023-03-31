const hamberger = document.querySelector('li:nth-child(1)');
hamberger.addEventListener('click', function () {
    let a = document.getElementById('navbar-atas');
    if (a.className === "navbar") {
        a.className += " responsive";
    } else {
        a.className = "navbar";
    }
});