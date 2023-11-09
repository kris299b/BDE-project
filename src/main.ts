
// interface TodoList {
//   container: HTMLDivElement;
//   heading: HTMLHeadingElement;
//   todoTextArea: HTMLDivElement;
//   taskInput: HTMLInputElement;
//   addButton: HTMLButtonElement;
//   taskList: HTMLUListElement;
// }

// const TodoList: TodoList = {
//   container: document.querySelector(".container") as HTMLDivElement,
//   heading: document.querySelector("h1") as HTMLHeadingElement,
//   todoTextArea: document.querySelector("#todo-text-area") as HTMLDivElement,
//   taskInput: document.querySelector("#task") as HTMLInputElement,
//   addButton: document.querySelector("#btn") as HTMLButtonElement,
//   taskList: document.querySelector("#taskList") as HTMLUListElement,
// };


// Definere en Todo-Item Interface
interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

// Definere en TodoList type
type TodoList = TodoItem[];

// Definere en union type for de mulige actions som kan udføres på Todo listen
type TodoAction = AddTodoAction | ToggleTodoAction;

// Definere en action til at tilføje en ny Todo item
interface AddTodoAction {
  type: 'ADD_TODO';
  text: string;
}

// Definere en action til at toggle den færdige status af en Todo item
interface ToggleTodoAction {
  type: 'TOGGLE_TODO';
  id: number;
}

// Dette stykke er en "reducer function" til at håndtere Todo listens tilstand
function todoReducer(state: TodoList, action: TodoAction): TodoList {
  switch (action.type) {
    case 'ADD_TODO':
      const newItem: TodoItem = {
        id: state.length + 1,
        text: action.text,
        completed: false,
      };
      return [...state, newItem];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

export type { TodoItem, TodoList, TodoAction, todoReducer };