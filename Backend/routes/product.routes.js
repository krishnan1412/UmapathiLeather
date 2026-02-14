const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const controller = require('../controllers/product.controller');

router.get('/', auth, controller.getProducts);

module.exports = router;
