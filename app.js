const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/chatbot', (req, res) => {
    const userMessage = req.body.message;

    // চ্যাটবটের সহজ কিছু উত্তর যুক্ত করা হয়েছে
    let botResponse;
    if (userMessage.toLowerCase().includes("hello")) {
        botResponse = "Hello! How can I assist you?";
    } else if (userMessage.toLowerCase().includes("bye")) {
        botResponse = "Goodbye! Have a great day!";
    } else {
        botResponse = "I'm here to help you with any questions you may have!";
    }

    res.json({ reply: botResponse });
});

app.listen(PORT, () => {
    console.log(`Chatbot API running on http://localhost:${PORT}`);
});
