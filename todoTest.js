import assert from 'assert';
import { Selector } from "testcafe"

fixture`todo list test 1`
    .page("./index.html");
    
test('Add new task to todo list', async (t) => {
    //Pre-assertion
    await t.expect(Selector("#taskList li").count).eql(0);

    // Arrange
    const taskInput = Selector('#task');
    const addButton = Selector('#btn');
    const newTaskTest = 'Call mom';

    // Act
    await t.typeText(taskInput, newTaskTest);
    await t.click(addButton);

    // Assert
    await t
    const addTodoActionCount = await Selector("#taskList").count;
    assert.equal(addTodoActionCount, 1, 'Expected 1 element with class #taskList');
});



fixture`todo list test 2`
    .page("./index.html");
    
test('Add another task and delete the old one.', async (t) => {
    // Pre-assertion
    await t
    .expect(Selector("#taskList").count).eql(1)
   
    // Arrange
    const taskInput = Selector('#task');
    const addButton = Selector('#btn');
    const newTaskTest = 'Write in journal';

    // Act
    await t.typeText(taskInput, newTaskTest);
    await t.click(addButton);

    const deleteButton = Selector('.deleteButton');
    await t.click(deleteButton);

    // Assert
    const taskList = Selector('#taskList');
    const addedTask = taskList.find('li').withText(newTaskTest);

    const addTodoActionCount = await taskList.count;
    await t.expect(addTodoActionCount).eql(1, 'Expected 1 element with class #taskList');
});
