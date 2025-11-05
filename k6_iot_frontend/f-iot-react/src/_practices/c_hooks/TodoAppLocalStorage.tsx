import TodoList from "@/components/TodoList";
import React, { useEffect, useRef, useState } from "react";

//! Hooks + 로컬 스토리지
// : 백엔드 DB 를 대신하여 로컬 스토리지로 CRUD 구현
// - 로컬 스토리지에서 데이터를 불러오고, 상태관리, 할 일을 추가 상제 토글하는 기능 구현

// 1. 할 일(Todo) 타입정의
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// 2. 로컬 스토리지의 데이터를 불러오는 함수
// : 저장된 데이터 값을 상태관리에 전달
const loadTodosFromLocalStroage = (): Todo[] => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};
function TodoAppLocalStorage() {
  //! === hooks ===
  const [todos, setTodos] = useState<Todo[]>(loadTodosFromLocalStroage);
  const [inputValue, setInputValue] = useState<string>("");
  const nextId = useRef<number>(
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //! Event Handler

  const onAddTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo: Todo = {
      id: nextId.current,
      text: inputValue.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    nextId.current += 1;
    setInputValue("");
  };

  const onToggleTodoCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const onDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h5>Todo List</h5>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onAddTodo}> 저장</button>
      <TodoList
        todos={todos}
        toggleTodo={onToggleTodoCompleted}
        deleteTodo={onDeleteTodo}
      />
    </div>
  );
}

export default TodoAppLocalStorage;
