describe('taskService',()=>{
    
    let taskService; 
    beforeEach(()=>{
        jest.resetModules();
        taskService=require('../src/services/taskServices');
    });
    test('crear una tarea',()=>{
        const task = taskService.createTask("Estudiar node.js");

        expect(task).toMatchObject({title: "Estudiar node.js",completed: false});
        expect(task.id).toBeDefined();
    });
    test('consultar las tareas',()=>{
        taskService.createTask('Sacar la basura');
        taskService.createTask('Pasear al perro');

        expect(taskService.getTask()).toHaveLength(2);
    });
    test('update task', ()=>{
        const task = taskService.createTask("Estudiar node.js");

        const updatedTask = taskService.updateTask(task.id,{completed: true});

        expect(updatedTask.completed).toBe(true);
    });
    test('delete task', ()=>{
        const task = taskService.createTask("Estudiar node.js");
        taskService.deleteTask(task.id);

        expect(taskService.getTask()).toHaveLength(0);
    });
});