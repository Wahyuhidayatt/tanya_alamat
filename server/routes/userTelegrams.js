const routes = require('express').Router();
const telegram = require('../controllers/telegramController');
const helper = require('../helpers/login');
const auth = require ('../helpers/auth');
const passport = require('passport');

routes.get('/', auth, telegram.readUserTelegram);
routes.delete("/:id", auth, telegram.removeUserTelegram);

module.exports = routes;
