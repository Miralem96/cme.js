class Event {
    static loadEvent() {
        const hamburger = document.querySelector(".hamburger");
        const navList = document.querySelector(".nav-list");
        const navRemove = document.querySelectorAll(".nav-list");
        

        hamburger.addEventListener("click", function(event){
            hamburger.classList.toggle("active");
            navList.classList.toggle("active");
        })

        navRemove.forEach(element => element.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navList.classList.remove("active");
        }))
    }
}


export default Event;