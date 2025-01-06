var mybutton = document.getElementById("gttopbtn");

function scrollFunction() {
    500 < document.body.scrollTop || 500 < document.documentElement.scrollTop ? mybutton.style.display = "block" : mybutton.style.display = "none"
}

function topFunction() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}
window.onscroll = function() {
    scrollFunction()
}