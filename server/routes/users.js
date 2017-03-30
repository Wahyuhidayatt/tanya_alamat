const routes = require('express').Router();
const user = require('../controllers/userController');
const helper = require('../helpers/login');
const auth = require ('../helpers/auth');
const passport = require('passport');


routes.post('/register', user.createUser);//register
routes.post('/login', passport.authenticate('local', {session : false}), helper.login);
routes.get('/', auth, user.getUser);

module.exports = routes;
