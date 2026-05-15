document.getElementById('confirmBtn').addEventListener('click', function() {
    const timeInput = document.getElementById('scheduleTime').value;
    const notifyToggle = document.getElementById('notifyToggle').checked;
    const statusMsg = document.getElementById('statusMessage');

    if (!timeInput) {
        alert("Please select a date and time first!");
        return;
    }

   
    this.innerText = "Scheduling...";
    this.style.opacity = "0.7";

    setTimeout(() => {
        this.innerText = "Confirm Schedule";
        this.style.opacity = "1";
        
   
        statusMsg.style.display = "block";
        const selectedDate = new Date(timeInput).toLocaleString();
        
        statusMsg.innerHTML = `✅ Gift Scheduled for <b>${selectedDate}</b>. <br> ${notifyToggle ? 'Notification is ON.' : 'Notification is OFF.'}`;
        
      
        console.log("Scheduled at:", timeInput, "Notify:", notifyToggle);
    }, 1500);
});