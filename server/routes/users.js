const routes = require('express').Router();
const user = require('../controllers/userController');
const helper = require('../helpers/login');
const auth = require ('../helpers/auth');
const passport = require('passport');


routes.post('/register', user.createUser);
routes.post('/login', passport.authenticate('local', {session : false}), helper.login);
routes.get('/users', auth, user.getUser);
routes.put('/users/:id', auth, user.updateUser);
routes.delete('/users/:id', auth, user.removeUser);

module.exports = routes;
