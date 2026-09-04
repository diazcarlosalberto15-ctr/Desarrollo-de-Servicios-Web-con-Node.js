const taskService = require('../services/taskServices');
const logger = require('../utils/logger');

module.exports = {
    TaskService: {
        TaskServicePort: {
            GetTasks(args,callback){
                const task = taskService.getTask();
                logger.info("Lista de tareas enviadas en soap");
                callback({task: task});
            },
            AddTask(args,callback){
                const task = taskService.createTask(args.title);
                logger.info("tarea creada en soap");
                callback({task});
            }
        }
    }
}