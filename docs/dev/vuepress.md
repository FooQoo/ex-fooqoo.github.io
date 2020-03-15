# VuePressでブログをはじめる
今まで技術系の記事は[Qiita](https://qiita.com/FooQoo)で投稿していたが、 
技術以外についても思ったことを書きたくて、ブログを作ってみた。  
今後もアップデートすると思うので、多分この記事の文章はかなり雑。

勤務先では、日々の資料作成に[Confluence](https://www.atlassian.com/ja/software/confluence)を使っていて、  
ツリー構造で記事を管理できる点や気軽にページを作成できる点、何より共有というよりは普段のメモとして利用できる点が気に入っている。
なので、今回作成するブログも以上の点が満たされるようなものがいいなと思ったしだいです。  

あと、サーバ代がかからないとかスキル(Vue.jsなど)を生かせるようなものがいいとか考えた結果、  
_vuepress + GitHub Pages_ にたどり着いた。

## vuepress
vuepressのフォルダ構成については以下。
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

なんかいろいろ多いけど、nuxtみたいな感じ？

コンフルのツリー構造を実装する場合は、  
以下のように実装するのが良さそう。
ちょうどこのブログのカテゴリーと同じ感じになる。
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
あとは、ページをmarkdownで記述していけばブログとしての体が立つ。

## GitHub pages
知り合いはよく利用しているが自分は利用したことがなかった。  
最初につまづいたのは、ファイルの置き方でvuepressがビルドしたファイルが `./docs/.vuepress/dist` に配置されることに気づくまでに少し時間を取られた。  

次に、GitHub pagesはmasterブランチを見るので、開発用ブランチ(developとか?)を用意して、そこにvuepressの開発環境を置いて、masterはビルド後のファイルのみ置くような感じにした。  
ちょっと気持ち悪い気もするけど。  

ビルドとデプロイは `GitHub Actions` で行う。
こちらは、以下のリポジトリが参考になりそう。

[peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

鍵の設定で少し時間取られたけど、最終的にはtypoが原因だった。
(deploy\_keyをdelopy\_keyにしてた)

そんなこんなで、ブログが完成?  
これから頑張りたいなぁ

2020/03/15 FooQoo
