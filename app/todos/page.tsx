'use client'; // Указываем, что этот компонент должен работать на клиенте

import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Функция для загрузки задач с сервера
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch('/api/todos'); // Используем относительный путь
        if (!res.ok) {
          throw new Error('Ошибка при загрузке задач');
        }
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []); // Пустой массив зависимостей — запрос будет выполнен только один раз при монтировании компонента

  // Функция для добавления новой задачи вручную
  const addTodo = () => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 1000); 
    const newTodo = {
      id: Date.now(), // Генерация уникального id
      task: 'Новая задача',
      completed: false
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <TodoList todos={todos} onAddTodo={addTodo} />
    </div>
  );
};

export default TodosPage;