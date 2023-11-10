interface AddTodoAction {
  type: 'ADD_TODO';
  text: string;
}

// Definere en TodoList type
type TodoList = AddTodoAction[];

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

const addButton = document.querySelector("#btn") as HTMLButtonElement; // click event

// Update the testme function to add new todo items to the list
function testme() {
  const taskInput = document.querySelector("#task") as HTMLInputElement;
  const text = taskInput.value;

  if (text) {
    // Create the AddTodoAction based on user input
    const action: AddTodoAction = {
      type: 'ADD_TODO',
      text: text,
    };

    // Dispatch the action (you might not need this depending on your setup)
    // dispatch(action);

    console.log("test2", action);

    // Reset the input field
    taskInput.value = "";
    console.log("todo: " + text);

    // Add the new todo item to the list
    const todoList = document.querySelector("#taskList") as HTMLUListElement;
    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = text;
    todoList.appendChild(newTodoItem);


    // Create a delete button for each todo item
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      // Handle delete button click here
      // You can remove the todo item from the list or perform any other action
      todoList.removeChild(newTodoItem);
    });

    
    // Apply styles directly using the style property
    deleteButton.style.backgroundColor = "#f1f1f1"; // Set the background color
    deleteButton.style.color = "#black"; // Set the text color
    deleteButton.style.padding = "5px 15px"; // Add some padding for better appearance
    deleteButton.style.cursor = "pointer"; // Change cursor to pointer on hover for better user experience


    // Append the delete button to the todo item
    newTodoItem.appendChild(deleteButton);

    // Append the new todo item to the list
    todoList.appendChild(newTodoItem);

  }
}



// make an interface/type that makes sure the text is a string


addButton.addEventListener("click", testme);

export type { AddTodoAction, TodoList, TodoAction, testme };