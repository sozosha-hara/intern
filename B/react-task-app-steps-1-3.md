# Reactタスク管理アプリ開発 ステップ1-3

## ステップ1: プロジェクトのセットアップ

まず、新しいReactプロジェクトを作成します。ターミナルで以下のコマンドを実行してください：

```bash
npx create-react-app task-management-app
cd task-management-app
npm start
```

---

## ステップ2: 基本的なコンポーネントの作成

`src/App.js`ファイルを開き、以下のコードで置き換えてください：

```jsx
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>タスク管理アプリ</h1>
      {/* ここに他のコンポーネントを追加していきます */}
    </div>
  );
}

export default App;
```

---

## ステップ3: ステートの追加とタスク入力フォームの作成

`src/App.js`ファイルを以下のように更新します：

```jsx
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  return (
    <div className="App">
      <h1>タスク管理アプリ</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="新しいタスクを入力"
        />
        <button type="submit">追加</button>
      </form>
      {/* タスクリストはここに追加します */}
    </div>
  );
}

export default App;
```

### コードの説明：

1. `useState`フックを使用して、`tasks`（タスクのリスト）と`newTask`（新しいタスクの入力）の2つの状態を管理しています。

2. `handleInputChange`関数は、入力フィールドの値が変更されるたびに呼び出され、`newTask`の状態を更新します。

3. `handleSubmit`関数は、フォームが送信されたときに呼び出されます。新しいタスクをタスクリストに追加し、入力フィールドをクリアします。

4. JSXでは、フォームと入力フィールドを描画しています。`value`と`onChange`プロパティを使用して、入力を制御しています。

このコードを入力したら、ブラウザでアプリを確認してください。タイトルとタスク入力フォームが表示されるはずです。次のステップでは、タスクリストの表示と各タスクの操作機能を追加します。
