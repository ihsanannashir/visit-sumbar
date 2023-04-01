const hamburger = document.querySelector('li:nth-child(1)');
hamburger.addEventListener('click', function () {
    let a = document.getElementById('navbar-atas');
    if (a.className === "navbar") {
        a.className += " responsive";
    } else {
        a.className = "navbar";
    }
});

function showInput() {
    document.getElementById('alerta').style.display = "block";
    let nama = document.getElementById('name').value;
    document.getElementById("showNama").innerHTML = nama;
}
