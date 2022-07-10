from flask import Flask

from .settings import *
settings_before_init()

app = Flask(__name__)

settings_after_init(app)

from .views import *

if __name__ == '__main__':
    app.run()