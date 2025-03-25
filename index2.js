const express = require("express");
const { addTask, listTasks, removeTask, updateTask } = require("./Tasks");

const app = express();
app.use(express.json()); // Middleware para leer JSON

// Ruta para obtener todas las tareas
app.get("/tasks", (req, res) => {
    res.json(listTasks());
});

// Ruta para agregar una tarea
app.post("/tasks", (req, res) => {
    const { description } = req.body;
    if (!description) {
        return res.status(400).json({ error: "La descripción es requerida" });
    }
    const newTask = addTask(description);
    res.status(201).json(newTask);
});

// Ruta para eliminar una tarea por ID
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deletedTask = removeTask(id);
    if (deletedTask) {
        res.json({ message: "Tarea eliminada", deletedTask });
    } else {
        res.status(404).json({ error: "Tarea no encontrada" });
    }
});

// Ruta para actualizar una tarea por ID
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { description } = req.body;
    if (!description) {
        return res.status(400).json({ error: "La descripción es requerida" });
    }
    const updatedTask = updateTask(id, description);
    if (updatedTask) {
        res.json(updatedTask);
    } else {
        res.status(404).json({ error: "Tarea no encontrada" });
    }
});

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("API de Tareas funcionando 🚀");
});

// Configuración para Vercel (para que funcione correctamente en serverless)
module.exports = app;
