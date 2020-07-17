from project.main.model.task import Task, TaskSchema
from project import db

def query_all():
    records = Task.query.all()
    tasks_schema = TaskSchema(many=True)
    tasks_dump = tasks_schema.dump(records)
    return tasks_dump