from unicodedata import name
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app= Flask(__name__)
db=SQLAlchemy(app)

@app.route('/trial')
def trial():
    return 'Heyy!'

if __name__ == '__main__':
    app.run()
