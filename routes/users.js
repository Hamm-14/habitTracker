const express = require('express');

const router = express.Router();

const passport = require('passport');

const userController = require('../controllers/users_controller');

router.get('/sign-in',userController.login);
router.get('/sign-out',userController.destroySession);

router.post('/create',userController.createUser);
router.post('/create-session',passport.authenticate('local',{failureRedirect: '/'}),userController.createSession);

module.exports = router;