from app import app
from flask import Response, render_template, send_from_directory,jsonify
import json

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return Response("<h1>Flask</h1><p>You visited: /%s</p>" % (path), mimetype="text/html")

@app.route('/')
def home():
    data = {"header":"ENMIND"}
    return render_template('index.html', result = data)

@app.route('/game')
def game():
    data = {}
    return render_template('game.html', result = data)



@app.route('/api', defaults={'path': ''})
@app.route('/api/<path:path>')
def api(path):
    with open("data/"+path+'.json', mode='r') as my_file:
        data = "".join([i.strip() for i in my_file.read().split("\n")])
        d = json.loads(data)
        return jsonify(d)
    
@app.route('/static', defaults={'path': ''})
@app.route('/static/<path:path>')
def fetch_static(path):
    return send_from_directory('static', path)