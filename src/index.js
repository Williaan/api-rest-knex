const express = require('express');
const cors = require('cors');
const rotas = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(rotas);


app.listen(3000, () => {
    console.log('Server running..');
});