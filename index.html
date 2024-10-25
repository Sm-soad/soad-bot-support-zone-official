<script>
    function startChat() {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('chatContainer').style.display = 'block';
    }

    async function sendMessage() {
        var userInput = document.getElementById('userInput').value;
        if (userInput === '') return;

        // Display user message
        var userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = userInput;
        document.getElementById('messages').appendChild(userMessage);
        document.getElementById('userInput').value = '';

        // Send message to the chatbot API and get the response
        try {
            const response = await fetch("http://localhost:3000/chatbot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: userInput })
            });

            const data = await response.json();

            // Display bot response
            var botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = 'SOAD BOT: ' + data.reply;
            document.getElementById('messages').appendChild(botMessage);
        } catch (error) {
            // Display error message
            var botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = 'SOAD BOT: দুঃখিত, কিছু সমস্যা হয়েছে।';
            document.getElementById('messages').appendChild(botMessage);
        }

        // Scroll to bottom
        var messageBox = document.getElementById('messages');
        messageBox.scrollTop = messageBox.scrollHeight;
    }
                </script>
