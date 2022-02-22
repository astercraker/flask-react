import time
from flask import Flask

app = Flask(__name__, static_folder='./public', static_url_path='/')


@app.route('/time')
def get_current():
    return {'time': time.time()}


@app.route('/')
def index():
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0')