const express = require('express');
const bodyParser = require('body-parser');
const chatbotRoutes = require('./routes/chatbotRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/chatbot', chatbotRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});