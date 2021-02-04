import time
from flask import Flask
import solarModel
import solarBatteryModel

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}