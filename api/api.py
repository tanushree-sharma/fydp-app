import time
from flask import Flask, request, render_template
import solarModel
import solarBatteryModel


template_dir = '../src/components/'
app = Flask(__name__, template_folder=template_dir)

@app.route('/solarModel', methods=['POST'])
def run_model():
    postalCode = request.form['postal_code']
    roofSize = request.form['roof_size']
    usage = request.form['elec-usage']
    month = request.form['month']
    heating = request.form['heating-type']
    budget = request.form['budget']

    solution = solarModel.solve(postalCode, roofSize, usage, month, heating, budget)

    return render_template('Results.js', solution=solution)

@app.route('/batteryModel', methods=['POST'])
def run_BattteryModel():
    postalCode = request.form['postal_code']
    roofSize = request.form['roof_size']
    usage = request.form['elec-usage']
    month = request.form['month']
    heating = request.form['heating-type']
    storage = request.form['storage_capacity']
    DoD = request.form['dod']
    budget = request.form['budget']

    solution = solarBatteryModel.solve(postalCode, roofSize, usage, month, heating, storage, DoD, budget)

    return render_template('Results.js', solution=solution)

if __name__ == '__main__':
    app.run(port=5000, debug=TRUE)