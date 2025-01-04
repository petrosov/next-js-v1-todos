'use client'; // Указываем, что этот компонент должен работать на клиенте

import React from 'react';

const TodoList = ({ todos, onAddTodo }) => {
  return (
    <div>
      <h1>Список задач</h1>
      <button onClick={onAddTodo}>Добавить задачу</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;