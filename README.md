# justfix-vscode README

This is an extension to make developing on JustFix.nyc projects in VSCode easier.

## Installation

If you haven't already, install the VS Code Extension Manager:

```
npm install -g vsce
```

Then, from the root of this repository, run:

```
yarn
vsce package
```

Then run:

```
code --install-extension justfix-vscode-0.0.2.vsix
```

If you're already running VS Code, you'll probably want to run the
"Developer: Reload Window" command.

## Commands

### Wrap JSX attribute in Lingui i18n

This is useful for wrapping JSX attribute string literals in Lingui i18n transforms.
Select the text of the attribute, including opening/closing quotes, and run this
command to e.g. convert `"boop"` to <code>{li18n._(t`boop`)}</code>.

Note that this command will _not_ automatically add imports for `li18n` or `t`,
so you'll have to do that part yourself.

### Wrap JSX in Lingui `<Trans>` element

This wraps the selected JSX in Lingui's `<Trans>` element.

Note that this command will _not_ automatically add imports for `Trans`,
so you'll have to do that part yourself.

## Release Notes

### 0.0.2 - 2020-08-26

Added `extensionKind` to `package.json` specifying that the extension
can be installed globally (i.e., does not have to be re-installed every time
a development container is rebuilt).

### 0.0.1 - 2020-06-15

Initial release.
