from flask import Flask

from .settings import *

app = Flask(__name__)

from .views import *

if __name__ == '__main__':
    app.run()