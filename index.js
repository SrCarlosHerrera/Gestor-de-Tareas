// Importaciones de funciones
const { addTask, listTasks, removeTask, updateTask } = require("./tasks");updateTask

// Agregar algunas tareas
addTask("Estudiar Node.js");
addTask("Practicar JavaScript");
addTask("Hacer ejercicio");
addTask("Lavar el vehículo");

// Listar tareas
listTasks();

// Eliminar una tarea
removeTask(1);

// Llamamos a la función para actualizar una tarea
updateTask(1, "Salir a pasear"); // Corregido el nombre de la función

// Listar nuevamente para verificar
listTasks();
