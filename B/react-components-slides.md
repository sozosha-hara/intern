# コンポーネントの基本

---

## 学習目標
- Reactコンポーネントの概念を理解する
- 関数コンポーネントを作成できるようになる
- JSXの基本を理解する

---

## Reactコンポーネントとは
- UIの再利用可能な部品
- JavaScriptの関数またはクラス
- プロップスを受け取り、React要素を返す

---

## 関数コンポーネント
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

- シンプルで理解しやすい
- Hooksを使用して状態やライフサイクルを管理

---

## JSXの基本
- JavaScriptの拡張構文
- HTMLに似た構文でUI要素を表現
- 波括弧{}内でJavaScript式を評価

例：
```jsx
const name = 'World';
const element = <h1>Hello, {name}!</h1>;
```

---

## 実践演習
1. App.jsを編集し、シンプルな関数コンポーネントを作成
2. JSXを使用して、タイトルと簡単な説明を表示
3. ブラウザで結果を確認
