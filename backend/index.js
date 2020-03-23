const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        evento: 'semana omnistack 11.0',
        aluno: 'gabriel'
    });
});

app.listen(3333);