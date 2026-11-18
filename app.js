const express = require('express');
const app = express();

app.get('/api/saudacao', (req, res) => {
    res.status(200).json({ mensagem: 'Olá, Jenkins!' });
});

app.get('/api/soma', (req, res) => {
    const { a, b } = req.query;
    const resultado = parseInt(a)+ parseInt(b);
    res.status(200).json({ resultado });
});

module.exports = app;
