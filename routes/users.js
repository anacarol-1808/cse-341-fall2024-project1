const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const validate = require('../middleware/validation-middleware');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

// week 02 - Add API routes to perform GET, POST, PUT, and DELETE requests
router.post('/', validate.saveUser, usersController.createUser);
router.put('/:id', validate.saveUser, usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;