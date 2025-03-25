// Array para almacenar las tareas
let tasks = [];

// Función para agregar una tarea
const addTask = (description) => {
    tasks.push({ id: tasks.length, description });
    console.log(`Tarea agregada: ${description}`);
};

// Función para listar tareas
const listTasks = () => {
    console.log("Lista de tareas:");
    tasks.forEach(task => console.log(`${task.id}: ${task.description}`));
};

// Función para eliminar una tarea
const removeTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Tarea con ID ${id} eliminada.`);
};

// Función para actualizar una tarea
const updateTask = (id, newDescription) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.description = newDescription;
        console.log(`Tarea con ID ${id} actualizada.`);
    } else {
        console.log(`No se encontró tarea con ID ${id}`);
    }
};

// Exportamos las funciones
module.exports = { addTask, listTasks, removeTask, updateTask };