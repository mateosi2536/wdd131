const nav = document.querySelector("#menu");
const btOpne = document.querySelector("#open");
const btClose = document.querySelector("#close");

btOpne.addEventListener("click", () => {
    nav.classList.add("visible");
})

btClose.addEventListener("click", () => {
    nav.classList.remove("visible");
})