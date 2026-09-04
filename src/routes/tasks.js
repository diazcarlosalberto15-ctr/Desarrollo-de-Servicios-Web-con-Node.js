const express = require('express');
const taskServices = require('../services/taskServices');
const logger = require('../utils/logger')
const router = express.Router();

//POST
router.post('/',(request,response)=>{
    let title = request.body.title;
    let task = taskServices.createTask(title);
    logger.info(`Tarea con el id = ${task.id} creada`);
    response.status(201).json(task);
});

//GET
router.get('/',(request,response)=>{
    response.json(taskServices.getTask());
});
//GET
router.get('/:id',(request,response)=>{
    const id = request.params.id;
    response.json(taskServices.getTaskById(id));
});
//PUT
    router.put('/:id',(request,response)=>{
        const id = request.params.id;
        let taskToUpdate = taskServices.updateTask(id,request.body);
        logger.info(`Tarea con el id = ${taskToUpdate.id} se ha modificado`);
        response.json(taskToUpdate);

    })
//DELETE
    router.delete('/:id',(request,response)=>{
        const id = request.params.id;
        let taskToDelete = taskServices.deleteTask(id);
        logger.info(`Tarea con el id = ${taskToDelete.id} se ha eliminado`);
        response.json(taskToDelete);
    });

module.exports = router;