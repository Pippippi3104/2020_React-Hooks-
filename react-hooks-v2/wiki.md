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

## useEffect ?

- 副作用(Side effect)の処理を関数コンポーネントで扱う
  - (副作用とは、DOM の変更、API 通信、変数への代入 etc)
- クラスコンポーネントでのライフサイクルメソッドに相当する
  - componentDidMount
  - compoenntDidUpdate
  - componentWillUnmount

## Context ?

- 「状態」と「状態を変更するメソッド」を Props を用いず、アプリケーション全体で取り回せるようにする

## Others

- useState に型を定義するかしないか
  - 要素が一つ and ラベルが必要無い　 → 　型定義不要
  - 要素が複数 or ラベルが必要　 → 　型定義必要

## Links

- [useState に配列の型を定義したい](https://qiita.com/macotok/items/6fdce8b90bef97588538#%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B32)
- [【React × TypeScript】input の入力値を取得したい時](https://awesome-linus.com/2019/12/29/react-typescript-get-input-value/)
