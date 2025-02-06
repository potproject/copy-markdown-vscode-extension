# copy-markdown-vscode-extension

**copy-markdown-vscode-extension** is a Visual Studio Code extension that adds a "Copy Markdown" item to the file context menu in the Explorer. When invoked, it copies the selected file's relative path and content in a Markdown code block format to your clipboard.

## Features

- **Context Menu Integration:** Adds a "Copy Markdown" option to the right-click context menu in the Explorer.
- **Markdown Formatting:** Copies the file's relative path along with its content formatted as a Markdown code block. The code block's language is automatically set based on the file's extension.
- **Clipboard Support:** The generated Markdown text is automatically copied to your clipboard.

## Usage

1. In Visual Studio Code's Explorer, right-click any file.
2. Select **Copy Markdown** from the context menu.
3. The file's relative path and its content will be copied to your clipboard in the following format:

   ````
   [Relative Path]
   ```[extension]
   [file Plain Body]
   ```
   ````

### Example: 

   ````
   src/index.js
   ```js
    console.log('Hello, World!');
   ```
   ````

4. Paste the copied Markdown text wherever you need it.

## Build

- **Compile:** `npm run compile`
- Use Visual Studio Code's debugging tools to run and test the extension.


## License

MIT License