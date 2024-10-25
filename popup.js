document.getElementById('sendButton').addEventListener('click', async () => {
  const userInput = document.getElementById('userInput').value;

  // API কল করার জন্য ফাংশন
  const response = await fetch('http://localhost:3000/chatbot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: userInput }),
  });

  const data = await response.json();
  document.getElementById('response').innerText = data.reply;
});
