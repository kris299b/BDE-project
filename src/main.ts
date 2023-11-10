
interface AddTodoAction { //Tilføjelsen af et TODO.
  type: 'ADD_TODO'; 
  text: string; 
}

type TodoList = AddTodoAction[];

// Union type 
type TodoAction = AddTodoAction | ToggleTodoAction; //2 stadier eller veksle imellem muligheder.

// Interface
interface AddTodoAction {
  type: 'ADD_TODO';
  text: string;
}

// Interface
interface ToggleTodoAction {
  type: 'TOGGLE_TODO';
  id: number;
}

const addButton = document.querySelector("#btn") as HTMLButtonElement; 

// Opdatering = kan tilføjes en ny todo til listen.
function testme() {
  const taskInput = document.querySelector("#task") as HTMLInputElement;
  const text = taskInput.value;

  if (text) {
    const action: AddTodoAction = {
      type: 'ADD_TODO',
      text: text,
    };

    console.log("test2", action);


    taskInput.value = "";
    console.log("todo: " + text);

    // Tilføjes en ny todo til listen.
    const todoList = document.querySelector("#taskList") as HTMLUListElement;
    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = text;
    todoList.appendChild(newTodoItem); 


    // Dynamisk "Delete" knap.  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";  
    deleteButton.addEventListener("click", () => { 
      todoList.removeChild(newTodoItem); 
    });
    

    deleteButton.style.backgroundColor = "#f1f1f1"; 
    deleteButton.style.color = "#black"; 
    deleteButton.style.padding = "5px 15px"; 
    deleteButton.style.cursor = "pointer"; 
    

    // Tilføjer delete-kanppen til todo'en.
    newTodoItem.appendChild(deleteButton);

    // Tilføjer den nye todo til listen. 
    todoList.appendChild(newTodoItem);

  }
}

//Tilføjer en event listener til knappen.
addButton.addEventListener("click", testme); 

export type { AddTodoAction, TodoList, TodoAction, testme };