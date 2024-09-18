import React from "react";
import styles from './App.module.css';

const Task = React.memo(({ task, onToggle, onDelete }) => {
  console.log('Task rendered:', task.text);
  return (
    <li className={styles.item}>
      <span
      className={`${styles.text} ${task.completed ? styles.completed : ''}`}
      onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>削除</button>
    </li>
  )
});

export default Task;