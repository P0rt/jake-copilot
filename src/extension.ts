import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.getApiResponse', async () => {
        try {
            const response = await axios.post('https://jake-my-copilot-2a9c2ff6d8fb.herokuapp.com/predict', {
                code: "Test code"
            });

            vscode.window.showInformationMessage(`API Response: ${response.data.prediction}`);
					} catch (error: any) {
						vscode.window.showErrorMessage(`Error fetching API: ${error.message}`);
				}				
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
