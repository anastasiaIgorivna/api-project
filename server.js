const express = require('express');
const app = express();
app.use(express.json());

let items = []; 

// GET – отримати всі елементи
app.get('/items', (req, res) => {
    res.json(items);
});

// POST – додати новий елемент
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).json(item);
});

// PATCH – оновити елемент за ID
app.patch('/items/:id', (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    items = items.map(item => item.id === id ? { ...item, ...updatedData } : item);
    res.json({ message: 'Updated successfully' });
});

// DELETE – видалити елемент за ID
app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    items = items.filter(item => item.id !== id);
    res.json({ message: 'Deleted successfully' });
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
