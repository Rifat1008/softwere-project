document.addEventListener("DOMContentLoaded", function() {
    const planButtons = document.querySelectorAll('.plan-btn');

    planButtons.forEach(button => {
        button.addEventListener('click', function() {
           
            const planName = this.parentElement.querySelector('h3').innerText;
            
          
            alert("You have selected the " + planName + " plan! Redirecting to registration...");

           
        });
    });
});