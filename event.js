
        // Buy ticket selectors
        const ticketForm = document.querySelector(".ticket-form");
        const input = document.querySelectorAll(".input");
        const name = document.querySelector(".name")
        const email = document.querySelector(".email");
        const ticket = document.querySelector("#ticket");
        const popupCard = document.querySelector(".popup-card");
        

        let ticketNumber = Math.floor(Math.random() * 5000);
        
        ticketForm.addEventListener("submit", form);
        
        

        function form(event){
            event.preventDefault();

            for(let i = 0; i < input.length; i++)
            
            if(input[i].value == ""){
                alert("You need to type in every input")
                return false;
            } else{
                
                
                // Loading data from local storage
                let data;

                if (localStorage.getItem("data")){
                    data = JSON.parse(localStorage.getItem("data"))
                } else {
                    data = [];
                }

                // adding the users input to the data array
                data.push(input[i].value, ticketNumber)
                // Saving the data in local storage
                localStorage.setItem("data", JSON.stringify(data));

                
               
            }
            
            {
                

                let code = `
                <div class="card">
                    <h2 class="heading-card">thanks for purchase, go to your email for more information</h2>
                    <p class="email-input input">Email : ${email.value}</p>
                    <p class="ticket-number">Ticket Number : ${ticketNumber}</p>
                    <p class="ticket-city">Ticket : ${ticket.value}</p>
                    <div class="btn-card">
                        <button class="btn-done">done</button>
                    </div>
                </div>
                `

                popupCard.innerHTML = popupCard.innerHTML + code;

                for(let i = 0; i < input.length; i++)
                
                input[i].value = "";
            }

            // Remove class="card"
            popupCard.addEventListener("click",function(event){
                if (event.target.classList.contains("btn-done")){
                    popupCard.removeChild(event.target.parentElement.parentElement)
                }
            })



        }
        
