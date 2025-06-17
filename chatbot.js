document.addEventListener("DOMContentLoaded", function() {
    const chatbotContainer = document.getElementById('chatbot');

    function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = sender;
        messageElement.innerText = message;
        chatbotContainer.appendChild(messageElement);
    }

    window.sendMessage = function() {
        const userInput = document.getElementById('userInput').value.toLowerCase();
        appendMessage(userInput, 'user');
        
        let response = '';

        if (userInput.includes('fees structure')) {
            response = 'Our fees structure varies by program. Please visit our website or contact the admissions office for detailed information.';
        } else if (userInput.includes('facilities')) {
            response = 'We offer state-of-the-art facilities including libraries, laboratories, sports complexes, and more.';
        } else if (userInput.includes('bca')) {
            response = 'The BCA program focuses on computer applications and software development. For more details, visit our BCA program page.';
        } else if (userInput.includes('bsc')) {
            response = 'The BSc program offers various specializations in science. For more details, visit our BSc program page.';
        } else if (userInput.includes('bcom')) {
            response = 'The BCom program covers commerce and business studies. For more details, visit our BCom program page.';
        } else if (userInput.includes('ba')) {
            response = 'The BA program offers a range of arts subjects. For more details, visit our BA program page.';
        } else if (userInput.includes('bba')) {
            response = 'The BBA program focuses on business administration and management. For more details, visit our BBA program page.';
        } else {
            response = 'I am sorry, I did not understand your question. Please ask about fees structure, facilities, or specific programs like BCA, BSc, BCom, BA, or BBA.';
        }

        appendMessage(response, 'bot');
        document.getElementById('userInput').value = '';
    }
});