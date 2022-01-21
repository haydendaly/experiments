from flask import Flask, jsonify, request
from collections import defaultdict

app = Flask(__name__)

users = defaultdict(list)

@app.route('/list/<name>', methods=['GET', 'POST'])
def modify_list(name):
    if request.method == 'POST':
        data = request.json
        users[name] = data

    response = jsonify(users[name])
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

app.run(debug=True)
