const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://rodrigo:gqwabc123@omnistack-5l5vj.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// req.query = Acessar Query Params, (Para filtros) Ex: ?idade=20
// req.params = Acessar Route Params, (Para edição e delete) Ex: /users/1
// req.body = Acessar Corpo da Requisição (Para criação e edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
