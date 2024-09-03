# タスクの削除と完了機能

---

## 学習目標
- タスクの削除機能を実装する
- タスクの完了/未完了の切り替え機能を追加する
- ステート更新の最適化について学ぶ

---

## タスクの削除機能
```jsx
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};
```

使用例：
```jsx
<button onClick={() => deleteTask(task.id)}>削除</button>
```

---

## タスクの完了/未完了の切り替え
```jsx
const toggleTask = (id) => {
  setTasks(tasks.map(task => 
    task.id === id ? { ...task, completed: !task.completed } : task
  ));
};
```

使用例：
```jsx
<span onClick={() => toggleTask(task.id)}>
  {task.text}
</span>
```

---

## ステート更新の最適化
- 直接的な配列の変更を避ける
- 新しい配列やオブジェクトを作成して更新
- React.memo や useCallback を使用してパフォーマンスを向上

---

## 実践演習
1. タスク削除機能を実装し、各タスク項目に削除ボタンを追加
2. タスクの完了/未完了を切り替える機能を実装
3. 完了したタスクに視覚的な区別（例：取り消し線）を追加
4. 実装した機能をテストし、正しく動作することを確認
