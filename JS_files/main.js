var menu_icon = document.querySelector("#menu-icon")
var menu = document.querySelector("#menu")
var exitbtn = document.getElementById("exitmenu")
menu_icon.addEventListener("click", function() {
    menu.classList.add("menuactive")
    exitbtn.style.opacity = 1;
    menu_icon.style.opacity = 0;
})
exitbtn.addEventListener("click", function() {
    menu.classList.remove("menuactive")
    exitbtn.style.opacity = 0
    menu_icon.style.opacity = 1
})