import time
from flask import Flask, request, render_template
import solarModel
import solarBatteryModel
from datetime import datetime


template_dir = '../src/components/'
app = Flask(__name__, template_folder=template_dir)

@app.route('/solar-results', methods=['POST'])
def run_model():
    postalCode = request.form.get('postal_code') or "M3N"
    roofSize = request.form.get('roof_size') or 1800
    usage = request.form.get('elec-usage') or 0
    month = request.form.get('month') or datetime.now().month
    heating = request.form.get('heating-type') or 1
    budget = request.form.get('budget') or 10000

    if usage == 0:
        if month == 1 or month == 2 or month == 12: # winter months
            usage = 750 * 2.98
        elif month == 6 or month == 7 or month == 8: # summer months
            usage = 750 * 1.3
        else:
            usage = 750

    if type(roofSize) is not int:
        roofSize = int(roofSize)
    if type(usage) is not int:
        usage = int(usage) 
    if type(month) is not int:
        month = int(month)
    if type(heating) is not int:
        heating = int(heating)
    if type(budget) is not int:
        budget = int(budget)  


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

    return render_template('Results.html', installationSize = installationSize, capitalCost = capitalCost, paybackPeriod = paybackPeriod, totalSavings = totalSavings,
    springSavings = springSavings, summerSavings = summerSavings, fallSavings = fallSavings, winterSavings = winterSavings, reducedCO2 = reducedCO2, treesPlanted = treesPlanted)

@app.route('/solarbattery-results', methods=['POST'])
def run_BattteryModel():
    postalCode = request.form.get('postal_code') or "M3N"
    roofSize = request.form.get('roof_size') or 1800
    usage = request.form.get('elec-usage') or 0
    month = request.form.get('month') or datetime.now().month
    heating = request.form.get('heating-type') or 1
    budget = request.form.get('budget') or 10000
    storage = request.form.get('storage_capacity') or 13
    DoD = request.form.get('dod') or 80

    if usage == 0:
        if month == 1 or month == 2 or month == 12: # winter months
            usage = 750 * 2.98
        elif month == 6 or month == 7 or month == 8: # summer months
            usage = 750 * 1.3
        else:
            usage = 750

    if type(roofSize) is not int:
        roofSize = int(roofSize)
    if type(usage) is not int:
        usage = int(usage) 
    if type(month) is not int:
        month = int(month)
    if type(heating) is not int:
        heating = int(heating)
    if type(storage) is not int:
        storage = int(storage)
    if type(DoD) is not int:
        DoD = int(DoD)
    if type(budget) is not int:
        budget = int(budget)  

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

    return render_template('Results.html', installationSize = installationSize, capitalCost = capitalCost, paybackPeriod = paybackPeriod, totalSavings = totalSavings,
    springSavings = springSavings, summerSavings = summerSavings, fallSavings = fallSavings, winterSavings = winterSavings, reducedCO2 = reducedCO2, treesPlanted = treesPlanted)

if __name__ == '__main__':
    app.run(port=5000, debug=TRUE)