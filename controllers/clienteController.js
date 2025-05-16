const { Sequelize } = require('sequelize');
const Cliente = require('../models/cliente');

exports.index = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      order: [['dataCadastro', 'DESC']]
    });
    res.render('index', { clientes, error: null });
  } catch (err) {
    console.error(err);
    res.render('index', { clientes: [], error: 'Erro ao carregar clientes' });
  }
};

exports.cadastro = (req, res) => {
    res.render('cadastro', { 
        error: null,  // Garante que error existe
        cliente: null // Garante que cliente existe
    });
};

exports.salvar = async (req, res) => {
    try {
        await Cliente.create(req.body);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.render('cadastro', { 
            error: 'Erro ao cadastrar cliente', 
            cliente: req.body 
        });
    }
};

exports.buscar = async (req, res) => {
  try {
    const termo = req.query.termo || '';
    const clientes = await Cliente.findAll({
      where: {
        [Sequelize.Op.or]: [
          { nome: { [Sequelize.Op.like]: `%${termo}%` } },
          { cidade: { [Sequelize.Op.like]: `%${termo}%` } },
          { telefone: { [Sequelize.Op.like]: `%${termo}%` } }
        ]
      }
    });
    res.render('buscar', { clientes, termo, error: null });
  } catch (err) {
    console.error(err);
    res.render('buscar', { clientes: [], termo: '', error: 'Erro na busca' });
  }
};

exports.editar = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    res.render('editar', { cliente, error: null });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
};

exports.atualizar = async (req, res) => {
  try {
    await Cliente.update(req.body, {
      where: { id: req.params.id }
    });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.render('editar', { error: 'Erro ao atualizar', cliente: req.body });
  }
};

exports.excluir = async (req, res) => {
  try {
    await Cliente.destroy({
      where: { id: req.params.id }
    });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
};