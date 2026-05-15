const API_KEY = "AIzaSyDBeksXaHGXIm-qZuBpJiVbWBf3zrNpqMc"; 
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

document.getElementById('suggestBtn').addEventListener('click', async function() {
    const inputField = document.getElementById('aiInput');
    const input = inputField.value;
    const responseBox = document.getElementById('resultBox');
    const responseText = document.getElementById('aiResponse');
    const loader = document.getElementById('loader');
    const btnText = document.querySelector('.ai-btn span');

    if (input.trim() === "") {
        alert("Bhai, kisu ekta to lekhen!");
        return;
    }

    // UI State: Loading Start
    btnText.style.display = 'none';
    loader.style.display = 'inline-block';
    responseBox.style.display = 'block';
    responseText.innerHTML = "Upohar AI is thinking...";

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ 
                        text: `You are an expert gift consultant for 'Upohar'. Suggest 3 creative gift ideas based on this scenario: ${input}. Keep it professional and concise.` 
                    }]
                }]
            })
        });

        const data = await response.json();
        
        
        console.log("API Response:", data);

        if (data.candidates && data.candidates[0].content.parts[0].text) {
            let aiText = data.candidates[0].content.parts[0].text;
            
            
            aiText = aiText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); 
            aiText = aiText.replace(/\n/g, '<br>');

            responseText.innerHTML = aiText;
        } else {
            responseText.innerHTML = "AI theke kono response asheni. Abar try koro bhai.";
        }

    } catch (error) {
        console.error("Error Details:", error);
        responseText.innerHTML = "Jhamela hoyeche! Internet check koro ba console e error dekho.";
    } finally {
        
        btnText.style.display = 'inline-block';
        loader.style.display = 'none';
    }
});