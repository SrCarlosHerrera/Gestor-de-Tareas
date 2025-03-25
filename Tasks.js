// tasks.js
let tasks = [];
let taskId = 1; // ID autoincremental

// Agregar una tarea
const addTask = (description) => {
    const task = { id: taskId++, description };
    tasks.push(task);
    return task;
};

// Listar todas las tareas
const listTasks = () => tasks;

// Eliminar una tarea por ID
const removeTask = (id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        return tasks.splice(index, 1)[0];
    }
    return null;
};

// Actualizar una tarea por ID
const updateTask = (id, newDescription) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.description = newDescription;
        return task;
    }
    return null;
};

// Exportar funciones
module.exports = { addTask, listTasks, removeTask, updateTask };
