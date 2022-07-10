from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

def settings_before_init(): 
    load_dotenv('./.flaskenv')
    
def settings_after_init(app): 
    CORS(app, resources={r"/*":{'origins':'http://127.0.0.1:5000', 'allow_headers':'Access-Control-Allow-Origin'}})