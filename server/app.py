from flask import Flask, jsonify, send_file, request, send_from_directory
from flask_cors import CORS
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder='../client/dist')

client_folder = os.path.abspath(os.path.join(os.getcwd(), "..", "client"))
build_folder = os.path.join(client_folder, "dist")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(build_folder, path)):
        return send_from_directory(build_folder, path)
    return send_from_directory(build_folder, 'index.html')


if __name__ == '__main__':
    app.run(debug=True, port=5000)