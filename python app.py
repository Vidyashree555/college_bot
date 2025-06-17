from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_message = request.json.get('message')
    # Here you can implement your chatbot logic
    response_message = "This is a response from the chatbot."
    return jsonify({'response': response_message})

if __name__ == '__main__':
    app.run(debug=True)