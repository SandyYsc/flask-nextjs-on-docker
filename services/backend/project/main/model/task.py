from project import db, ma

class Task(db.Model):
    __tablename__ = "tasks"
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(255), unique=True, nullable=False)

    def __repr__(self):
        return f"Task('{self.content}')"

class TaskSchema(ma.Schema):
    class Meta:
        fields = ('id', 'content')
