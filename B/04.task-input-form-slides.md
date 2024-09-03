# タスク入力フォームの作成

---

## 学習目標
- Reactでのフォーム処理の基本を理解する
- 制御されたコンポーネントの概念を学ぶ
- タスク追加機能を実装する

---

## Reactでのフォーム処理
- フォームの状態をReactのstate内で管理
- onChange イベントを使用して入力を制御
- onSubmit イベントでフォーム送信を処理

---

## 制御されたコンポーネント
```jsx
function TaskForm() {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <input 
      type="text"
      value={task}
      onChange={handleChange}
    />
  );
}
```

---

## タスク追加機能の実装
```jsx
const addTask = (e) => {
  e.preventDefault();
  if (task.trim() !== '') {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask('');
  }
};
```

---

## 実践演習
1. タスク入力用のフォームコンポーネントを作成
2. 制御されたコンポーネントを使用して入力を管理
3. フォーム送信時にタスクを追加する機能を実装
4. UIで新しいタスクが追加されることを確認
