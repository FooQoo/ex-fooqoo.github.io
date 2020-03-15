# VuePressでブログをはじめる

## フォルダ構成について
公式サイトのメモです。
- `docs/.vuepress`: ページ全体の設定やコンポーネント、静的ファイルなどを置くところ
- `docs/.vuepress/components`: ここに保存されたVueコンポーネントは自動的にグローバルなコンポーネントとして登録されます
- `docs/.vuepress/theme`: 一部のページに適用するテーマファイルを保存します
- `docs/.vuepress/styles`: スタイルファイルを保存します
- `docs/.vuepress/index.styl`: 最も優先度が高く適用されるスタイルファイルを保存します。
- `docs/.vuepress/palette.styl`: デフォルトで設定された色を上書きする？
- `docs/.vuepress/public`: 静的ファイルのディレクトリ
- `docs/.vuepress/templates`: HTMLファイル
- `docs/.vuepress/templates/dev.html`: 開発環境のHTMLテンプレートファイル
- `docs/.vuepress/templates/ssr.html`: サーバサイドレンダリングで使われるHTMLテンプレート
- `docs/.vuepress/config.js`: Entry file?の設定ファイル
- `docs/.vuepress/enhanceApp.js`: App level enhancement??

## sidebar
サイドバーを設置して、カテゴリーごとに展開したい場合は、
以下のように実装する。
```js
module.exports = {
    themeConfig: {
        sidebar: [
            {
                title: 'title',
                collapsable: true,
                children: [
                    'to/your/children'
                ]
            }
        ]
    }
}
```
