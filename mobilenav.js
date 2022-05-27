// Hamburger target selectors
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navRemove = document.querySelectorAll(".nav-list");


// Toggle the hamburger navigation for mobile
hamburger.addEventListener("click", function(event){
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
})
// Remove the hamburger navigation for mobile
navRemove.forEach(element => element.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}))