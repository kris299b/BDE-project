import assert from 'assert';
import { Selector } from "testcafe"

fixture`todo list test 1` //Sætter en TestCafe fixture op, for den første test, angiver at index.html skal testes.
    .page("./index.html");
    
test('Add new task to todo list', async (t) => {
    //Tjekker at der i første omgang ikke er nogen task i todo-listen.
    await t.expect(Selector("#taskList li").count).eql(0);

    //Her arrangere den ved at den laver en selector på task input feltet, add button, og en ny task string. 
    const taskInput = Selector('#task');
    const addButton = Selector('#btn');
    const newTaskTest = 'Call dad';

    // Her simulerer koden, bruger actions ved at skrive den nye task ind i input feltet - klikker på add button.
    await t.typeText(taskInput, newTaskTest);
    await t.click(addButton);

    // Til slut laver den et count, hvor den forventer at der er endnu et element i #taskList.  
    await t
    const addTodoActionCount = await Selector("#taskList").count;
    assert.equal(addTodoActionCount, 1, 'Expected 1 element with class #taskList');
});



fixture`todo list test 2` //Sætter en TestCafe fixture op, angiver at index.html skal testes.
    .page("./index.html");
    
test('Add another task and delete the old one.', async (t) => { 
    // Tjekker den at der i første omgang er 1 task i todo listen før testen.
    await t
    .expect(Selector("#taskList").count).eql(1)
   
      // Opsat selectors for task input field, add button, og en ny task string.
    const taskInput = Selector('#task');
    const addButton = Selector('#btn');
    const newTaskTest = 'Write in journal';

    // Den skriver en ny test, klikker på knappen, og så simulerer den at den klikker delete knappen. 
    await t.typeText(taskInput, newTaskTest);
    await t.click(addButton);

    const deleteButton = Selector('.deleteButton');
    await t.click(deleteButton);

    //Til slut tjekker, at der efter tilføjelsen af ny test og sletning af den gamle, stadig er et element i task-listen med klassen #taskList.
    const taskList = Selector('#taskList');
    const addedTask = taskList.find('li').withText(newTaskTest);

    const addTodoActionCount = await taskList.count;
    await t.expect(addTodoActionCount).eql(1, 'Expected 1 element with class #taskList');
});
