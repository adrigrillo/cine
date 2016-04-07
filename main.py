from flask import Flask, render_template
from flask.ext.script import Manager
import os

app = Flask(__name__)

manager = Manager(app)

@app.errorhandler(404)
def page_not_found(e):
    return 'PAGINA NO ENCONTRADA', 404


@app.errorhandler(500)
def internal_server_error(e):
    return 'ERROR 500 bitch', 500
    
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/user/<name>')
def user(name):
    return render_template('user.html', name=name)

if __name__ == '__main__':
    manager.run()

