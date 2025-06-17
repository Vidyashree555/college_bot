from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    data = request.form
    full_name = data.get('fullName')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')
    
    # Here you can add code to save the data to a database or send an email
    print(f"Received message from {full_name} ({email}, {phone}): {message}")
    
    return jsonify({"status": "success", "message": "Form submitted successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
