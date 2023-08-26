# VSCode API Extension

This extension for Visual Studio Code allows you to send requests to your API and receive responses directly within the editor.

## For tests

- Push `Start Debugging` from `Run` menu  
- Push `Cmd+Shift+P` 
- Type in menu `Get API Response`

## For tests

- Push `Start Debugging` from `Run` menu  
- Push `Cmd+Shift+P` 
- Type in menu `Get API Response`

## Features

- Send requests to the API at: https://jake-my-copilot-2a9c2ff6d8fb.herokuapp.com/predict
- Display responses from the API within VSCode.

## Installation

1. Clone the repository to your computer.
2. Open the extension folder in VSCode.
3. Run `npm install` to install the necessary dependencies.
4. Press `F5` to launch the extension in debug mode.

## Usage

1. Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
2. Type "Get API Response" and press Enter.
3. View the response from your API in a notification.

## TODO

- [ ] Test the extension with the actual API.
- [ ] Register on the Visual Studio Marketplace.
- [ ] Publish the extension on the Visual Studio Marketplace.

## API

Your API was built using Flask and Flask-RESTful. Here's its main code:

```python
from flask import Flask, request, jsonify
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

class Predict(Resource):
    def post(self):
        # Retrieving data from the request
        data = request.get_json(force=True)
        code_input = data.get("code", "")
        output = f"Received: {code_input}. Here will be the output of your model based on the input data."
        return jsonify({"prediction": output})

api.add_resource(Predict, "/predict")

if __name__ == "__main__":
    app.run(debug=True, port=5000)