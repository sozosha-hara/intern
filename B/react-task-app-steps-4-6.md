# Reactタスク管理アプリ開発 ステップ4-6

## ステップ4: タスクリストの表示

`src/App.js`ファイルを以下のように更新して、タスクリストを表示する機能を追加します：

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
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

### 変更点の説明：

1. `ul`要素を追加し、その中で`tasks`配列をマップしています。
2. 各タスクに対して`li`要素を生成し、タスクのテキストを表示しています。
3. Reactのリスト表示のベストプラクティスに従い、各`li`要素に一意の`key`プロパティを設定しています。

## ステップ5: タスクの削除機能

タスクを削除する機能を追加します。`src/App.js`ファイルを以下のように更新してください：

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

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
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
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDelete(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

### 変更点の説明：

1. `handleDelete`関数を追加しました。この関数は、指定されたIDのタスクを配列からフィルタリングして除外します。
2. 各タスク項目に削除ボタンを追加し、クリック時に`handleDelete`関数を呼び出すようにしました。

## ステップ6: タスクの完了/未完了の切り替え機能

タスクの完了状態を切り替える機能を追加します。`src/App.js`ファイルを以下のように更新してください：

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

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
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
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggle(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => handleDelete(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

### 変更点の説明：

1. `handleToggle`関数を追加しました。この関数は、指定されたIDのタスクの`completed`状態を反転させます。
2. タスクのテキストを`span`要素で囲み、クリック時に`handleToggle`関数を呼び出すようにしました。
3. タスクの完了状態に応じて、テキストに取り消し線を適用するようにスタイルを変更しました。

これで、タスクの追加、削除、完了状態の切り替えが可能な基本的なタスク管理アプリが完成しました。ブラウザでアプリを確認し、各機能が正しく動作することを確認してください。
