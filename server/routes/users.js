const routes = require('express').Router();
const user = require('../controllers/userController');

routes.get('/',user.getUser)
routes.post('/', user.createUser);

module.exports = routes;