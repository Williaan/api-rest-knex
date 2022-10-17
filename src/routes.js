const express = require('express');
const { listUsers, obterUser, createUser, updateUser, deleteUser } = require('./controllers/usuarios');

const rotas = express();

rotas.get('/usuarios', listUsers);
rotas.get('/usuarios/:id', obterUser);
rotas.post('/usuarios/', createUser);
rotas.put('/usuarios/:id', updateUser);
rotas.delete('/usuarios/:id', deleteUser);




module.exports = rotas;