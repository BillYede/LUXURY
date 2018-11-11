const menu = document.querySelector(".menu-nav")
const button = document.querySelector(".hamburger-button")
const remove = document.querySelector(".remove")

remove.style.display = "none"

const add = function () {
    remove.style.display = "block"
    menu.classList.toggle("active")
}

const erased = function () {
    remove.style.display = "none"
    menu.classList.toggle("active")
}

button.addEventListener("click", add)
remove.addEventListener("click", erased)












