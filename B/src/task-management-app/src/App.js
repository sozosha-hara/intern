import React, { useState, useEffect, useCallback } from 'react';
import Task from './Task';
import styles from './App.module.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error('Failed to load tasks:', error);
      return [];
    }
  });
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Failed to save tasks:', error);
      setError('タスクの保存に失敗しました。')
    }
  }, [tasks]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
      setError(null);
    } else {
      setError('タスクを入力してください');
    }
  }

  const handleDelete = useCallback((id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    setError(null);
  }, []);

  const handleToggle = useCallback((id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    setError(null);
  }, []);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>タスク管理アプリ</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder='新しいタスクを入力'
        />
        <button className={styles.button} type="submit">追加</button>
      </form>
      <ul className={styles.list}>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;