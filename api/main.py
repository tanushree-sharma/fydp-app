from flask import Flask, render_template, request
import solarModel

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("/../src/components/mainHomepage.js")

@app.route('/solveSolar', methods=['POST'])
def run_model():
    budget = request.form.get("budget", "") # or request.form["username"]
    return jsonify(budget=budget) # from flask import jsonify 

    return render_template('/../src/components/mainHomepage.js')


if __name__ == "__main__":
    app.run(port=5000, debug=True)