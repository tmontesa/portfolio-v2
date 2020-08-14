var hamburger = document.getElementById("hamburger");
var links = document.getElementById("menu-links");
var menu = document.getElementById("menu");
var menuContainer = document.getElementById("menu-container");
var contentGridContainer = document.getElementById("content-grid-container");

if (window.innerWidth > 1250) {
    links.style.display = "block"
    menu.style.width = menuContainer.clientWidth + "px"
} 

hamburger.onclick = function() {
    if (window.innerWidth < 900) {

        if (links.style.display == "none") {
            links.style.display = "block"
            
        } else {
            links.style.display = "none"
        }

    } else if (window.innerWidth < 1250) {

        if (links.style.display == "none") {
            links.style.display = "inline-flex"
            
        } else {
            links.style.display = "none"
        }
    }
}

window.onresize = function () {
    if (window.innerWidth > 1250) {
        links.style.display = "block"
        menu.style.width = menuContainer.clientWidth + "px"
    } else {
        links.style.display = "none"
        menu.style.width = "100%"
    }
} 