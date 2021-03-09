const express = require('express');
const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();
routes.use(express.json());//Aplicação converter a requisão json em objeto javascript
// Rota '/', Recurso ex: /users


// Metodos HTML
// GET    - Buscar/Listar informação do Backend
// POST   - Criar informação no Backend
// PUT    - Alterar informação no Backend
// DELETE - Remover informação do Backend

/**Tipos de Parametros
 * Query params : são parametros nomeados passados na url depois de '?' que podem ser combinados com '&' para (páginação, filtros)
 * Route params : são paramentros passados na propia rota como exemplo do '/users' para identificar recursos
 * Requests body : corpo da requisição ultilizado para criar e alterar recursoss
 */

routes.post('/session', sessionController.create);

routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile',profileController.index);


module.exports = routes;