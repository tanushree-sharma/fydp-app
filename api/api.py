import time
from flask import Flask, request, render_template
import solarModel
import solarBatteryModel
import json


template_dir = '../src/components/'
app = Flask(__name__, template_folder=template_dir)

@app.route('/solar-results', methods=['POST'])
def run_model():
    postalCode = request.form['postal_code']
    roofSize = request.form['roof_size']
    usage = request.form['elec-usage']
    month = request.form['month']
    heating = request.form['heating-type']
    budget = request.form['budget']

    solution = solarModel.solve(postalCode, roofSize, usage, month, heating, budget)
    # parsing returned solution
    installationSize = solution[0]
    capitalCost = solution[1]
    paybackPeriod = solution[2]
    totalSavings = solution[3]
    springSavings = solution[4]
    summerSavings = solution[5]
    fallSavings = solution[6]
    winterSavings = solution[7]
    reducedCO2 = solution[8]
    treesPlanted = solution[9]
    costsWithoutSolar = solution[10]
    costsWithSolar = solution[11]

    return render_template('Results.html', installationSize = installationSize, capitalCost = capitalCost, paybackPeriod = paybackPeriod, totalSavings = totalSavings,
    springSavings = springSavings, summerSavings = summerSavings, fallSavings = fallSavings, winterSavings = winterSavings, reducedCO2 = reducedCO2, treesPlanted = treesPlanted,
    costsWithoutSolar = costsWithoutSolar, costsWithSolar = costsWithSolar)

@app.route('/solarbattery-results', methods=['POST'])
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
    # parsing returned solution
    installationSize = solution[0]
    capitalCost = solution[1]
    paybackPeriod = solution[2]
    totalSavings = solution[3]
    springSavings = solution[4]
    summerSavings = solution[5]
    fallSavings = solution[6]
    winterSavings = solution[7]
    reducedCO2 = solution[8]
    treesPlanted = solution[9]
    costsWithoutSolar = solution[10]
    costsWithSolar = solution[11]

    return render_template('Results.html', installationSize = installationSize, capitalCost = capitalCost, paybackPeriod = paybackPeriod, totalSavings = totalSavings,
    springSavings = springSavings, summerSavings = summerSavings, fallSavings = fallSavings, winterSavings = winterSavings, reducedCO2 = reducedCO2, treesPlanted = treesPlanted,
    costsWithoutSolar = json.dumps(costsWithoutSolar), costsWithSolar = json.dumps(costsWithSolar))

if __name__ == '__main__':
    app.run(port=5000, debug=TRUE)