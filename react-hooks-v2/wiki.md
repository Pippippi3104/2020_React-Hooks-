# Wiki

## React Hooks ?

- React16.8 で追加された新機能
- class を記述せずに State やその他の React の機能を関数コンポーネントで使える

  - [関数コンポーネント](https://qiita.com/shane/items/b936550820de9a88ad60)

    ```
    function Welcome(props) {
        return <h1>Hello, {props.name} </h1>;
    }
    ```

  - クラスコンポーネント
    ```
    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }
    ```

- 100%後方互換性がある
- 完全にオプトイン
  - [オプトイン:事前に許可を求めるやり方、もしくは同意の意志表示をすること](https://wa3.i-3-i.info/word12519.html)
- クラスコンポーネントでの使用はできない

## Hooks を導入するメリット

- 関数コンポーネントで State 管理ができる
- ステートフルなロジックをシンプルに共有できる
- ロジックの抽象化によるラッパー地獄を避ける
- データ取得や EventListener 等の処理を一箇所にまとめることができる
- DOM 変更やデータ取得による State の変更のような副作用の処理を簡単に実装できる
  - Document Object Model:
    - ツリー構造とも呼ばれる階層構造を取る
    - それぞれノードという言葉で説明される
    - WEB ページと JavaScript などのプログラミング言語とを繋ぐ
- Redux や MobX なしで Store の作成が可能

## App init

- init
  ```
  create-react-app react-hooks-v2 --template typescript
  ```

## ルールなど

- Hooks を呼び出すのはトップレベルのみ
- Hooks を呼び出すのは React 関数内のみ
