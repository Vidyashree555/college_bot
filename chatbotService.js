exports.getResponse = (userMessage) => {
    // Simple response logic for demonstration
    if (userMessage.toLowerCase().includes('admission')) {
        return 'For admission inquiries, please visit our admission office or check our website.';
    } else if (userMessage.toLowerCase().includes('courses')) {
        return 'We offer a variety of courses in Arts, Science, and Commerce. Please visit our website for more details.';
    } else {
        return 'I am here to help you with your inquiries. Please ask me about admissions, courses, or any other information.';
    }
};