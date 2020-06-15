// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

function registerSelectionTransformerCommand(id: string, transformer: (selection: string) => string) {
	let disposable = vscode.commands.registerCommand(id, () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		const editor = vscode.window.activeTextEditor;

		if (!editor) { return; }

		const sel = editor.selection;
		const text = editor.document.getText(sel);

		editor.edit(editBuilder => {
			editBuilder.replace(sel, transformer(text));
		});
	});

	return disposable;
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		registerSelectionTransformerCommand('justfix-vscode.wrapJsxAttrInLingui', (text) => {
			const textWithoutQuotes = text.substring(1, text.length - 1);
			return "{li18n._(t`" + textWithoutQuotes + "`)}";
		})
	);

	context.subscriptions.push(
		registerSelectionTransformerCommand('justfix-vscode.wrapJsxInTrans', (text) => {
			const textWithoutQuotes = text.substring(1, text.length - 1);
			return "<Trans>" + text + "</Trans>";
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
