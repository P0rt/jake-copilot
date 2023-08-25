import * as vscode from 'vscode';
import * as axios from 'axios'; // Используем библиотеку axios для HTTP-запросов

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.getApiResponse', async () => {
        try {
            const response = await axios.post('https://jake-my-copilot-2a9c2ff6d8fb.herokuapp.com/predict', {
                code: "Ваш тестовый код или текст"
            });

            vscode.window.showInformationMessage(`API Response: ${response.data.prediction}`);
        } catch (error) {
            vscode.window.showErrorMessage(`Error fetching API: ${error.message}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
