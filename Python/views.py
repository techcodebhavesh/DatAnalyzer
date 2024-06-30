from flask import request, jsonify, render_template
from app import app
from app.controllers import process_prompt


@app.route('/chat', methods=['POST'])
def chat():
    prompt = request.json.get('prompt')
    if not prompt:
        return jsonify({"error": "No prompt provided"}), 400

    response = process_prompt(prompt)
    return jsonify({"response": response})
