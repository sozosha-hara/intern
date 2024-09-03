# ローカルストレージを使用したデータの永続化

---

## 学習目標
- ブラウザのローカルストレージの概要を理解する
- useEffectフックの使い方を学ぶ
- タスクデータの保存と読み込みを実装する

---

## ブラウザのローカルストレージ
- キーと値のペアでデータを保存
- 文字列のみを保存可能
- ブラウザを閉じても保持される

基本的な使い方：
```javascript
// データの保存
localStorage.setItem('key', 'value');

// データの取得
const value = localStorage.getItem('key');

// データの削除
localStorage.removeItem('key');
```

---

## useEffectフック
- 副作用を扱うためのフック
- コンポーネントのレンダリング後に実行される
- 依存配列を指定して実行タイミングを制御

```jsx
useEffect(() => {
  // 副作用を記述
}, [依存配列]);
```

---

## タスクデータの保存と読み込み
```jsx
const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
});

useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);
```

---

## 実践演習
1. useEffectを使用してタスクデータをローカルストレージに保存
2. アプリ起動時にローカルストレージからデータを読み込む
3. タスクの追加、削除、更新時にローカルストレージが更新されることを確認
4. ブラウザを更新してもデータが保持されることをテスト
