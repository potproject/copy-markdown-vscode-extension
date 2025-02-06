import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  // コマンド "copyMarkdown.copyMarkdown" を登録
  let disposable = vscode.commands.registerCommand('copyMarkdown.copyMarkdown', async (uri: vscode.Uri) => {
    if (!uri) {
      vscode.window.showErrorMessage('ファイルが選択されていません。');
      return;
    }

    try {
      // ワークスペース内の相対パスを取得
      const relativePath = vscode.workspace.getWorkspaceFolder(uri)
        ? vscode.workspace.asRelativePath(uri)
        : uri.fsPath;

      // ファイル拡張子を取得（先頭のドットは除去）
      const fileExtension = path.extname(uri.fsPath).replace('.', '');

      // ファイル内容を読み込む
      const fileData = await vscode.workspace.openTextDocument(uri);
      const fileContent = fileData.getText();

      // Markdown形式に整形
      // 以下の形式でクリップボードにコピーします:
      //
      // [Relative Path]
      // ```[extension]
      // [file Plain Body]
      // ```
      const markdown = `${relativePath}\n\`\`\`${fileExtension}\n${fileContent}\n\`\`\``;

      // クリップボードへコピー
      await vscode.env.clipboard.writeText(markdown);
      vscode.window.showInformationMessage('Markdown がクリップボードにコピーされました！');
    } catch (error) {
      vscode.window.showErrorMessage(`Markdown のコピー中にエラーが発生しました: ${error}`);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
