//! 타입 스크립트 TODO 리스트 구현

/*
# 데이터 구조
  - 여러 개의 할 일을 저장할 수 있는 배열
  - 각 할 일은 객체

  ex) 상품등-상품/ 회원들-회원 / 할일들(TodoItem[]) - 할 일(TodoItem)

  cf) 배열 타입 정의 : 요소 타입[]

# 요구사항 정리
  1. Todo(할 일, 객체) 항목의 인터페이스 정의(TodoItem)
    : id(고유값, number), task(할 일 내용, string), completed(완료여부, boolean)

  2. 각 할 일들을 todos 배열로 관리
  
  3. 할 일 리스트를 관리하는 함수 구현
    - addTodo (추기)
    - completedTodo (수정)
    - deleteTodo (삭제)
*/

//% 할 일의 객체 인터페이스 명시
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

// 할일 추가
function addTodo(todos: TodoItem[], task: string): TodoItem[] {
  const newTodo: TodoItem = {
    id: Math.max(0, ...todos.map((todo) => todo.id)) + 1,
    task: task,
    completed: false,
  };
  const newTodos = [...todos, newTodo];
  return newTodos;
}

//^ 2. 요구 사항 정리 (map & filter 사용)
// 1) 특정 id를 가진 Todo 항목의 task를 편집하는 함수(editTodo)

// 2) 완료된 Todo 항목을 모두 삭제하는 함수(clearCompleted)
// 3) 모든 Todo 항목을 조회하는 함수(getAllTodos)
// 4) 특정 상태(completed)에 따라 Todo 항목을 필터링하는 함수(filterTodos)
// 5) 특정 id를 가진 Todo 항목의 completed 상태를 토글하는 함수(toggleTodo)
// 6) 모든 Todo 항목의 completed 상태를 일괄적으로 설정하는 함수(setAllTodosCompletion)

//^ 3. 프로그램 구현
function editTodo(todos: TodoItem[], id: number, task: string) {
  const updateTask = todos.map((todo) =>
    todo.id === id ? { ...todo, task: task } : todo
  );
  return updateTask;
}

function clearCompleted(todos: TodoItem[], completed: boolean) {
  const ingTodos = todos.filter((todo) => todo.completed !== completed);
  return ingTodos;
}

function getAllTodos() {
  const allTodos = todos;
  return allTodos;
}

function filterTodos(todos: TodoItem[], completed: boolean) {
  const filteringTodo = todos.filter((todo) => todo.completed === completed);
  return filteringTodo;
}

function toggleTodo(todos: TodoItem[], id: number) {
  const changeTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  return changeTodos;
}

function setAllTodosCompletion(todos: TodoItem[], completed: boolean) {
  const completedTodos = todos.map((todo) =>
    todo.completed !== completed
      ? { ...todo, completed: !todo.completed }
      : todo
  );
  return completedTodos;
}

//^ 4. 프로그램 실행
let todos: TodoItem[] = [
  { id: 1, task: "abc", completed: false },
  { id: 2, task: "def", completed: true },
  { id: 3, task: "ghi", completed: false },
  { id: 4, task: "jkl", completed: false },
  { id: 5, task: "mno", completed: true },
  { id: 6, task: "pqr", completed: false },
  { id: 7, task: "stu", completed: true },
  { id: 8, task: "vwx", completed: true },
  { id: 9, task: "yz", completed: false },
];

console.log("task 수정");
todos = editTodo(todos, 1, "ts공부");
console.log(todos);

console.log("전체조회");
todos = getAllTodos();
console.log(todos);

console.log("전체 completed 변경");
todos = setAllTodosCompletion(todos, false);
console.log(todos);

console.log("completed변경");
todos = toggleTodo(todos, 3);
console.log(todos);

console.log("상태별조회 - false");
todos = filterTodos(todos, false);
console.log(todos);
console.log("상태별조회 - true");
todos = filterTodos(todos, true);
console.log(todos);

console.log("완료된 todo삭제");
todos = clearCompleted(todos, true);
console.log(todos);
