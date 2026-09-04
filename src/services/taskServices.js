let tasks = [];
let nextId = 1;

//CREATE
function createTask(title){
    const task = new Object();
    task.id = nextId++;
    task.title = title;
    task.completed = false;

    tasks.push(task);
    return task;
}
//READ
    function getTask(){
        return tasks;
    }
    function getTaskById(id){
        return tasks.find((task)=>task.id == id );
    }
//UPDATE
    function updateTask(id,updates = {}){
        const taskToUpdate = getTaskById(id);
        if(!taskToUpdate){
            return null;
        }
        if(updates.title != undefined){
            taskToUpdate.title = updates.title;
        }
        if(updates.completed != undefined){
            taskToUpdate.completed = updates.completed;
        }
        return taskToUpdate;
    }
//DELETE
    function deleteTask(id){
    const taskToDelete = getTaskById(id);
    if(!taskToDelete){
        return null;
    }
    tasks.splice(tasks.indexOf(taskToDelete),1);
    return taskToDelete;
}
module.exports = {
    createTask, getTask, getTaskById,updateTask,deleteTask
}