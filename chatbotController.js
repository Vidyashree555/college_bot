const chatbotService = require('../services/chatbotService');

exports.handleMessage = (req, res) => {
    const userMessage = req.body.message;
    const botResponse = chatbotService.getResponse(userMessage);
    res.json({ response: botResponse });
};