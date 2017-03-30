const routes = require('express').Router();
const user = require('../controllers/userController');

routes.get('/',user.getUser)
routes.post('/', user.createUser);
routes.put('/:id', user.updateUser);
routes.delete('/:id', user.removeUser);

module.exports = routes;
