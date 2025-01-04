// app/api/articles/route.ts

import { NextResponse } from 'next/server';

const articles = [
  { id: 1, title: 'Как начать с React', description: 'Обзор основ React.js' },
  { id: 2, title: 'Что такое Node.js?', description: 'Введение в Node.js' },
  { id: 3, title: 'Введение в JavaScript', description: 'Основы языка JavaScript' },
  { id: 4, title: 'Как работает HTTP', description: 'Понимание протокола HTTP' },
  { id: 5, title: 'Основы CSS Flexbox', description: 'Как работать с Flexbox' },
  { id: 6, title: 'Как настроить Webpack', description: 'Шаги по настройке Webpack' },
  { id: 7, title: 'Что такое TypeScript?', description: 'Основы TypeScript' },
  { id: 8, title: 'Основы Git', description: 'Как работать с Git' },
  { id: 9, title: 'Как разрабатывать с использованием REST API', description: 'Работа с REST API' },
  { id: 10, title: 'Как настроить MongoDB', description: 'Шаги по настройке MongoDB' },
  { id: 11, title: 'Что такое React Hooks?', description: 'Понимание React Hooks' },
  { id: 12, title: 'Введение в Cloud Computing', description: 'Основы облачных вычислений' },
  { id: 13, title: 'Основы Docker', description: 'Как работает Docker' },
  { id: 14, title: 'Что такое GraphQL?', description: 'Понимание GraphQL' },
  { id: 15, title: 'Как работать с SQL', description: 'Основы работы с SQL' },
  { id: 16, title: 'Основы Python', description: 'Как начать с Python' },
  { id: 17, title: 'Как создать сервер на Express', description: 'Работа с Express.js' },
  { id: 18, title: 'Основы тестирования с Jest', description: 'Как писать тесты с Jest' },
  { id: 19, title: 'Что такое Progressive Web App?', description: 'Понимание PWA' },
  { id: 20, title: 'Как работать с Firebase', description: 'Использование Firebase в проектах' },
];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get('q')?.toLowerCase() || '';

  // Фильтруем статьи по поисковому запросу
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery) ||
    article.description.toLowerCase().includes(searchQuery)
  );

  return NextResponse.json(filteredArticles);
}