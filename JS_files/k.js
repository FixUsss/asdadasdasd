var sizebtn = document.querySelectorAll("#sizebtn button")
sizebtn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        sizebtn.forEach(function(btn1) {
            btn1.classList.remove("active")
        })
        btn.classList.add("active")
        document.querySelectorAll("#sizebtn")
    })
})
var smallimg = document.querySelectorAll("#smallimgs .smallimg")
var bigimg = document.getElementById("bigimg")
smallimg.forEach(function(smimg) {
    smimg.addEventListener("click", function() {
        bigimg.style.backgroundImage = getComputedStyle(smimg).backgroundImage
        smallimg.forEach(function(smimg1) {
            smimg1.classList.remove("activeimg")
        })
        smimg.classList.add("activeimg")
    })
})