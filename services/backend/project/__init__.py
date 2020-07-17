from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object("project.config.Config")
CORS(app)
db = SQLAlchemy(app)
ma = Marshmallow(app)

from project.main.route import task
app.register_blueprint(task.task_routes)

