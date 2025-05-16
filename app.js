require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const clienteRoutes = require('./routes/clienteRoutes');
const sequelize = require('./config/database');

const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Sincronizar banco de dados
sequelize.sync()
  .then(() => console.log('Conectado ao banco de dados MySQL'))
  .catch(err => console.error('Erro ao conectar ao banco:', err));

// Rotas
app.use('/', clienteRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});