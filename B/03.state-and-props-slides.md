# ステートとプロップス

---

## 学習目標
- ステート（state）の概念と使用方法を理解する
- useStateフックの使い方を学ぶ
- プロップス（props）の概念と親子コンポーネント間の通信を理解する

---

## ステート（State）とは
- コンポーネントの内部データを管理
- 変更可能で、変更時にコンポーネントが再レンダリング
- useStateフックを使用して関数コンポーネントで状態を管理

```jsx
const [count, setCount] = useState(0);
```

---

## useStateフックの使い方
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

---

## プロップス（Props）とは
- 親コンポーネントから子コンポーネントへデータを渡す方法
- 読み取り専用で、子コンポーネント内で変更不可
- コンポーネントの再利用性を高める

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// 使用例
<Greeting name="Alice" />
```

---

## 実践演習
1. タスク管理アプリにuseStateを追加し、タスクリストの状態を管理
2. 新しいタスクを追加する機能を実装
3. タスクコンポーネントを作成し、プロップスを使用してタスク情報を渡す
