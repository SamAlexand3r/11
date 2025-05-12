const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Папка с вашим сайтом

// Конфигурация
const VALID_USERNAME = 'admin';
const VALID_PASSWORD_HASH = 'хеш_пароля'; // Используйте bcrypt для хеширования

// API для авторизации
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    // Здесь должна быть проверка с хешированием пароля
    if(username === VALID_USERNAME && password === 'secret123') {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
});

app.listen(3000, () => console.log('Server started on port 3000'));