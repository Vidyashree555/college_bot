const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/chatbot', (req, res) => {
    const userMessage = req.body.message;
    let botReply = '';

    // Simple logic for chatbot responses
    if (userMessage.toLowerCase().includes('admission')) {
        botReply = 'For admission details, please visit our admission page or contact our admission office.';
    } else if (userMessage.toLowerCase().includes('courses')) {
        botReply = 'We offer a variety of courses in Arts, Science, and Commerce. Please visit our courses page for more details.';
    } else {
        botReply = 'I am sorry, I did not understand your question. Please contact our support for more information.';
    }

    res.json({ reply: botReply });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
