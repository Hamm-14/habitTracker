const express = require('express');

const router = express.Router();

const habitController = require('../controllers/habit_controller');

router.post('/create',habitController.create);
router.get('/done',habitController.done);
router.get('/undone',habitController.undone);
router.get('/delete',habitController.delete);

router.get('/favourite/add',habitController.addFavourite);
router.get('/favourite/remove',habitController.removeFavourite);

module.exports = router;