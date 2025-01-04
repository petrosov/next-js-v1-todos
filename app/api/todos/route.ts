// app/api/todos/route.ts (если используется новая структура Next.js)
import { NextResponse } from "next/server";

// Пример списка задач
const todos = [
  { id: 1, task: "Купить продукты", completed: false },
  { id: 2, task: "Прочитать книгу", completed: true },
  { id: 3, task: "Почистить дом", completed: false },
  { id: 5 , task: "Почистить дом", completed: false },
  { id: 6 , task: "Почистить дом", completed: false },
  { id: 7 , task: "Почистить дом", completed: false },
  { id: 8 , task: "Почистить дом", completed: false },
  { id: 9 , task: "Почистить дом", completed: false },
  { id: 10 , task: "Почистить дом", completed: false },
];

export async function GET() {
  return NextResponse.json(todos);
}