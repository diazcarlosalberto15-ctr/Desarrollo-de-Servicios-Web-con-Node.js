const taskService = require('../services/taskServices');
const logger = require('../utils/logger');

module.exports = {
    TaskService: {
        TaskServicePort: {
            getTask(args,callback){
                const task = taskService.getTask();
                logger.info("Lista de tareas enviadas en soap");
                callback({task : task});
            },
            addTask(args,callback){
                const task = taskService.createTask(args.title);
                logger.info("tarea creada en soap");
                callback({task});
            }
        }
    }
}