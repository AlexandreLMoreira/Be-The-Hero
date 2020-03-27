const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Postar uma informação
 * PUT: Alterar uma informaçãao
 * DELETE: Deletar uma informação
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 *  => request.query
 * Route Params: Parâmetros utilizados para identificar recursos
 *  => request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *  => request.body
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

routes.post('/login', SessionController.login);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.list);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.create);

module.exports = routes;